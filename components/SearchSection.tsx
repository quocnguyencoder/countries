import { Box, Paper } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import Results from '@/components/Results'
import toSpinalCase from '@/helpers/toSpinalCase'
import Country from '@/interfaces/country'
import SearchBar from './SearchBar'

interface Props {
  countries: Country[]
}

const SearchSection = ({ countries }: Props) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(0)
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries)

  const goToDetail = (countryIndex: number) => {
    const countryName = toSpinalCase(
      `${filteredCountries[countryIndex].name.common}`,
    )
    // store search term and selected country index into session
    router.push(`/detail/${countryName}`)
  }

  // handle navigation and selection by keyboard in results list
  const handleResultsActions = (key: string) => {
    const hasResults = filteredCountries.length !== 0

    const isSelect = key === 'Enter'
    const isMoveUP = key === 'ArrowUp'
    const isMoveDown = key === 'ArrowDown'

    const lastResultsIndex = filteredCountries.length - 1
    const isAtFirstResult = selectedCountry === 0
    const isAtLastResult = selectedCountry === lastResultsIndex

    // move select result to last result if move up at first result
    const moveUp = () =>
      isAtFirstResult
        ? setSelectedCountry(lastResultsIndex)
        : setSelectedCountry(selectedCountry - 1)
    // move select result to first result if move down at last result
    const moveDown = () =>
      isAtLastResult
        ? setSelectedCountry(0)
        : setSelectedCountry(selectedCountry + 1)

    const changeSelectedCountry = () => {
      isMoveUP ? moveUp() : isMoveDown ? moveDown() : void 0
    }

    // only handle when result section is showed and has result(s)
    showResults &&
      hasResults &&
      (isSelect ? goToDetail(selectedCountry) : changeSelectedCountry())
  }

  // filter countries when search term changes
  useEffect(() => {
    const searchResults = countries.filter((country) =>
      country.name.common
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()),
    )
    setFilteredCountries(searchResults)
  }, [searchTerm, countries])

  // reset selected country to first result when results changes
  useEffect(() => setSelectedCountry(0), [filteredCountries])

  // scroll to selected result if needed
  useEffect(() => {
    const element = document.getElementById(
      `country-${selectedCountry}`,
    ) as Element

    element &&
      scrollIntoViewIfNeeded(element, {
        behavior: 'smooth',
        scrollMode: 'if-needed',
      })
  }, [selectedCountry])

  return (
    <Box flex={1} width="95%">
      <Paper
        data-testid="search-section"
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
        sx={{
          borderRadius: '24px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleResultsActions={handleResultsActions}
        />
        {showResults && (
          <Results
            filteredCountries={filteredCountries}
            selectedCountry={selectedCountry}
            searchTerm={searchTerm}
            goToDetail={goToDetail}
          />
        )}
      </Paper>
    </Box>
  )
}

export default SearchSection

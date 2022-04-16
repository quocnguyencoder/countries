import { Box } from '@mui/material'
import React from 'react'
import Country from 'interfaces/country'
import ResultNotice from './ResultNotice'
import ResultsList from './ResultsList'
interface Props {
  filteredCountries: Country[]
  selectedCountry: number
  searchTerm: string
  goToDetail: (index: number) => void
}

const Results = ({
  filteredCountries,
  selectedCountry,
  searchTerm,
  goToDetail,
}: Props) => {
  const haveNoResults = filteredCountries.length === 0

  return (
    <Box data-testid="results-section">
      {!haveNoResults ? (
        <ResultsList
          filteredCountries={filteredCountries}
          selectedCountry={selectedCountry}
          searchTerm={searchTerm}
          goToDetail={goToDetail}
        />
      ) : (
        <ResultNotice />
      )}
    </Box>
  )
}

export default Results

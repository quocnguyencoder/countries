import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { useEffect } from 'react'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import Country from 'interfaces/country'

interface Props {
  filteredCountries: Country[]
  selectedCountry: number
  searchTerm: string
  goToDetail: (index: number) => void
}

const ResultsList = ({
  filteredCountries,
  selectedCountry,
  searchTerm,
  goToDetail,
}: Props) => {
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
    <List
      data-testid="results-list"
      sx={{ overflow: 'auto', maxHeight: '40vh' }}
    >
      {filteredCountries.map((country, index) => {
        const matches = match(country.name.common, searchTerm, {
          insideWords: true,
          findAllOccurrences: true,
        })
        const parts = parse(country.name.common, matches)
        return (
          <ListItem
            button
            role="results-listitem"
            data-testid={`results-listitem-${index}`}
            selected={index === selectedCountry}
            onMouseDown={() => goToDetail(index)}
            id={`country-${index}`}
            key={`${index}${country.name.common}`}
          >
            <ListItemAvatar>
              <Avatar src={country.flags.svg} />
            </ListItemAvatar>
            <ListItemText
              sx={{ fontSize: 'large' }}
              primary={
                <>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                        backgroundColor: part.highlight
                          ? 'yellow'
                          : 'transparent',
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                </>
              }
            />
          </ListItem>
        )
      })}
    </List>
  )
}

export default ResultsList

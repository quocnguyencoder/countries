import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import Country from 'interfaces/country'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
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
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="20vh"
          data-testid="results-notice"
        >
          <SentimentVeryDissatisfiedIcon
            sx={{ fontSize: '4em', fontWeight: 'bold' }}
          />
          <Typography variant="caption">No results found</Typography>
        </Box>
      )}
    </Box>
  )
}

export default React.memo(Results)

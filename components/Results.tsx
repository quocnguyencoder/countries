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

interface Props {
  filteredCountries: Country[]
  selectedCountry: number
  goToDetail: (index: number) => void
}

const Results = ({ filteredCountries, selectedCountry, goToDetail }: Props) => {
  const haveNoResults = filteredCountries.length === 0
  // highlight matches

  return (
    <Box data-testid="results-section">
      {!haveNoResults ? (
        <List
          data-testid="results-list"
          sx={{ overflow: 'auto', maxHeight: '40vh' }}
        >
          {filteredCountries.map((country, index) => (
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
                primary={country.name.common}
              />
            </ListItem>
          ))}
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

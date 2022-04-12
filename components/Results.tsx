import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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
      {!haveNoResults && (
        <List
          data-testid="results-list"
          sx={{ overflow: 'auto', maxHeight: '40vh' }}
        >
          {filteredCountries.map((country, index) => (
            <ListItem
              button
              role="listitem"
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
      )}
    </Box>
  )
}

export default React.memo(Results)

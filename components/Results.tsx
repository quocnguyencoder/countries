import {
  Avatar,
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
  return (
    <List sx={{ overflow: 'auto', maxHeight: '40vh' }}>
      {filteredCountries.map((country, index) => (
        <ListItem
          button
          selected={index === selectedCountry}
          onMouseDown={() => goToDetail(index)}
          id={`country-${index}`}
          key={`${index}${country.name.common}`}
        >
          <ListItemAvatar>
            <Avatar src={country.flags.svg} />
          </ListItemAvatar>
          <ListItemText primary={country.name.common} />
        </ListItem>
      ))}
    </List>
  )
}

export default React.memo(Results)

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Country from 'interfaces/country'
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

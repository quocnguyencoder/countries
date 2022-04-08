import SearchIcon from '@mui/icons-material/Search'
import { Box, InputBase, Paper } from '@mui/material'
import { useState } from 'react'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Box flex={1} width="90%">
      <Paper
        variant="outlined"
        sx={{
          borderRadius: '24px',
          padding: '0.5%',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <InputBase
          placeholder="Search"
          sx={{ width: '100%', borderRadius: '24px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputProps={{
            'data-testid': 'search-bar',
            'aria-label': 'search bar',
            'aria-live': 'polite',
          }}
          startAdornment={
            <SearchIcon sx={{ marginLeft: '1%', marginRight: '2%' }} />
          }
        />
      </Paper>
    </Box>
  )
}

export default SearchBar

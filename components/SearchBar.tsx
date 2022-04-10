import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase } from '@mui/material'

interface Props {
  searchTerm: string
  setSearchTerm: (value: string) => void
  handleResultsActions: (key: string) => void
}

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  handleResultsActions,
}: Props) => {
  const clearSearch = () => {
    setSearchTerm('')
  }
  return (
    <InputBase
      placeholder="Search"
      sx={{ width: '100%', borderRadius: '24px' }}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyUp={(e) => handleResultsActions(e.key)}
      inputProps={{
        'data-testid': 'search-bar',
        'aria-label': 'search bar',
        'aria-live': 'polite',
      }}
      startAdornment={
        <SearchIcon sx={{ marginLeft: '1%', marginRight: '2%' }} />
      }
      endAdornment={
        searchTerm !== '' && (
          <IconButton
            data-testid="clear-search-btn"
            onClick={clearSearch}
            sx={{
              padding: 0,
              marginRight: '0.4em',
            }}
          >
            <CloseOutlinedIcon fontSize="small" />
          </IconButton>
        )
      }
    />
  )
}

export default SearchBar

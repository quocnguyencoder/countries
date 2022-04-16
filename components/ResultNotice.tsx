import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import { Box, Typography } from '@mui/material'

const ResultNotice = () => {
  return (
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
  )
}

export default ResultNotice

import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

const Logo = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm')) ? '10%' : '30%'

  return (
    <Box display="flex" maxWidth="60%" paddingTop={matches}>
      <Image src="/logo.svg" alt="Logo" width={'500px'} height={'100px'} />
    </Box>
  )
}

export default Logo

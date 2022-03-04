import { Box } from '@mui/material'
import Image from 'next/image'

const Logo = () => {
  return (
    <Box display="flex">
      <Image src="/logo.svg" alt="Logo" width={'600px'} height={'400px'} />
    </Box>
  )
}

export default Logo

import { Box } from '@mui/material'
import Image from 'next/image'

const Logo = () => {
  return (
    <Box display="flex" paddingTop="10%" maxWidth="40%">
      <Image src="/logo.svg" alt="Logo" width={'400px'} height={'100px'} />
    </Box>
  )
}

export default Logo

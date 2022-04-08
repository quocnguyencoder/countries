import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) => ({
  logoWrapper: {
    paddingTop: '35%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '15%',
    },
  },
}))

const Logo = () => {
  const classes = useStyles()
  return (
    <Box display="flex" maxWidth="60%" className={classes.logoWrapper}>
      <Image src="/logo.svg" alt="Logo" width={'500px'} height={'100px'} />
    </Box>
  )
}

export default Logo

import Container from '@mui/material/Container'
import type { NextPage } from 'next'
import Logo from '@/components/Logo'
import SearchBar from '@/components/SearchBar'
import Copyright from '../src/Copyright'

const Home: NextPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Logo />
      <SearchBar />
      <Copyright />
    </Container>
  )
}

export default Home

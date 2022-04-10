import Container from '@mui/material/Container'
import Logo from '@/components/Logo'
import SearchSection from '@/components/SearchSection'
import Country from 'interfaces/country'
import Copyright from '../src/Copyright'

interface Props {
  countries: Country[]
}

const Home = ({ countries }: Props) => {
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
      <SearchSection countries={countries} />
      <Copyright />
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = (await res.json()) as Country[]

  return {
    props: {
      countries,
    },
  }
}

export default Home

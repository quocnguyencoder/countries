export default interface Country {
  name: CountryName
  tld: string //top-level domain (e.g., .vn, .uk)
  independent: boolean 
  status: string
  unMember: boolean
  currencies: Currency[]
  idd: IDD // international direct dialling
  capital: string
  region: string
  subregion: string
  languages: Languages
  landlocked: boolean
  area: number
  flag: string
  maps: Maps
  population: number
  fifa: string // FIFA code to
  timezones: string[]
  continents: string[]
  flags: Imgs
  coatOfArms: Imgs
}

interface CountryName {
  common: string
  official: string
}

interface Currency {
  [code: string]: {
    name: string
    symbol: string
  }
}

interface IDD {
  root: string
  suffixes: string[]
}

interface Languages {
  [code: string]: string
}

interface Maps {
  googleMap: string
  openStreetMap: string
}

interface Imgs{
  png: string
  svg: string
}
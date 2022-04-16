const config = {
  defaultTitle: 'Countries',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_COUNTRIES_URL
      : 'http://localhost:3000',
  defaultDescription: 'Search for countries information!',
}

export default config

const nextConfig = {
  title: 'Countries',
  description: 'Search for countries information!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://countries-steel.vercel.app/',
    site_name: 'Countries',
    images: [
      {
        url: 'https://countries-steel.vercel.app/thumbnail.png',
        width: 1200,
        height: 600,
        alt: 'Search for countries information!',
      },
    ],
  },
  twitter: {
    handle: '@quocnguyencoder',
    site: '@quocnguyencoder',
    cardType: 'summary_large_image',
  },
}

export default nextConfig

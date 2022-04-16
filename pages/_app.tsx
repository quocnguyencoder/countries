import { CacheProvider, EmotionCache } from '@emotion/react'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import nextConfig from 'data/next-seo.config'
import createEmotionCache from '../src/createEmotionCache'
import theme from '../src/theme'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <DefaultSeo
          {...nextConfig}
          additionalMetaTags={[
            {
              property: 'twitter:image',
              content: `${
                process.env.NODE_ENV !== 'development'
                  ? process.env.NEXT_PUBLIC_COUNTRIES_URL
                  : ''
              }/twitter-cover.png`,
            },
            {
              property: 'og:type',
              content: 'website',
            },
          ]}
        />
        <CssBaseline />
        <Box
          height="100vh"
          width="100vw"
          sx={{
            background: 'url("./background 4284x2923.jpeg") no-repeat center',
            backgroundSize: 'cover',
          }}
        >
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

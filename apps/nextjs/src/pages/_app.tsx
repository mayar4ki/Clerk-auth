import type { EmotionCache } from '@emotion/react'
import type { NextPage } from "next"
import { Layout } from '~/components/Layout'
import { DefaultSEOProviderWrapper, LanguageProviderWrapper, SnackbarProviderWrapper, ThemeProviderWrapper } from '~/components/providers'
import '~/styles/globals.css'
import createEmotionCache from "~/utils/createEmotionCache"

import { ClerkProvider } from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { api } from '~/utils/api'


interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
  Component: NextPage;
}

function App(props: MyAppProps) {
  const { locale: lang } = useRouter()

  const {
    Component,
    emotionCache = createEmotionCache(lang ?? 'en'),
    pageProps,
  } = props;

  return (
    <ClerkProvider {...pageProps}>
      <LanguageProviderWrapper {...{ emotionCache, messages: pageProps.messages }}>
        <DefaultSEOProviderWrapper>
          <SnackbarProviderWrapper>
            <ThemeProviderWrapper>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProviderWrapper>
          </SnackbarProviderWrapper>
        </DefaultSEOProviderWrapper>
      </LanguageProviderWrapper>
    </ClerkProvider>
  )
}

export default api.withTRPC(App);

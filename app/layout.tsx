/* eslint-disable import/no-extraneous-dependencies */
import '@coldsurfers/hotsurf/global-light-only.css'
import type { Metadata } from 'next'
import { Noto_Sans as notoSans } from 'next/font/google'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import LayoutWrapper from '../components/LayoutWrapper'
import StyledComponentsRegistry from '../registry/StyledComponentsRegistry'
import StyleSheetRegistry from '../registry/StyleSheetRegistry'
import { AuthStoreProvider } from '../registry/AuthStoreRegistry/AuthStoreRegistry'
import RegistryProvider from '../registry/RegistryProvider'
import { COOKIES } from '../libs/constants'

const notoSansFont = notoSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '예정된 많은 공연을 놓치지 마세요 🎉 | COLDSURF',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const accessToken = cookies().get(COOKIES.ACCESS_TOKEN)?.value
  const refreshToken = cookies().get(COOKIES.REFRESH_TOKEN)?.value

  return (
    <html lang="en">
      <head></head>
      <body className={[notoSansFont.className].join(' ')}>
        <RegistryProvider
          registries={[StyledComponentsRegistry, StyleSheetRegistry]}
        >
          <AuthStoreProvider
            accessToken={accessToken}
            refreshToken={refreshToken}
          >
            <LayoutWrapper>{children}</LayoutWrapper>
          </AuthStoreProvider>
        </RegistryProvider>
      </body>
    </html>
  )
}

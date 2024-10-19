'use client'

import { Button } from '@coldsurfers/hotsurf'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { BILLETS_APP_URL } from '../features/billets/billets.constants'

const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: 900;
  white-space: pre-line; /* This allows newline support */
`

export default function Home() {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <MainTitle>Billets</MainTitle>
          <MainTitle>{'예정된\n많은 공연을\n놓치지 마세요 🎉'}</MainTitle>
          <Link href={BILLETS_APP_URL}>
            <Button
              text="Get Billets app"
              color="pink"
              style={{ width: 'fit-content' }}
            />
          </Link>
        </div>
        <div style={{ flex: 1, borderRadius: 8 }}>
          <Image
            src="/live-party.webp"
            alt="live-party"
            width={500}
            height={500}
            style={{
              borderRadius: 8,
            }}
          />
        </div>
      </div>
    </div>
  )
}

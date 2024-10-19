import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '@coldsurfers/hotsurf'
import { HEADER_HEIGHT } from './Header.constants'
import { BILLETS_APP_URL } from '../billets/billets.constants'

const HeaderContainer = styled.div<{ $animation: 'show' | 'hide' }>`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT};
  padding: 0 40px;

  background-color: rgba(255, 255, 255, 0.75);
  z-index: 99;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  transition: all 0.3s ease-in-out;
  transform: translateY(
    ${({ $animation }) => ($animation === 'show' ? '0' : '-100%')}
  );
`

const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
`

const HeaderLogo = styled(Image)`
  border-radius: 50%;
  margin-right: 10px;
`

const HeaderMenuContainer = styled(Link)`
  background-color: transparent;
  border: none;
  cursor: pointer;

  padding: 10px;
`

const HeaderMenuText = styled.p``

export default function Header() {
  const [animation, setAnimation] = useState<'show' | 'hide'>('show')

  useEffect(() => {
    let lastScrollTop = 0
    const onScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScroll > lastScrollTop) {
        console.log('scrolling down')
        setAnimation('hide')
      } else {
        console.log('scrolling up')
        setAnimation('show')
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll // For Mobile or negative scrolling
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <HeaderContainer $animation={animation}>
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <Link href="/">
          <HeaderLogo
            src="/coldsurf.webp"
            alt="coldsurf"
            width={48}
            height={48}
          />
        </Link>
        <Link href="/">
          <HeaderTitle>COLDSURF</HeaderTitle>
        </Link>
      </div>
      <HeaderMenuContainer href="/about">
        <HeaderMenuText>About</HeaderMenuText>
      </HeaderMenuContainer>
      <HeaderMenuContainer href="/blog">
        <HeaderMenuText>Blog</HeaderMenuText>
      </HeaderMenuContainer>
      <Link href={BILLETS_APP_URL}>
        <Button text="Get Billets app" color="pink" />
      </Link>
    </HeaderContainer>
  )
}

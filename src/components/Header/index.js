import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import FocusLock from 'react-focus-lock'

import { useTranslation } from 'react-i18next'
import Tracking from '../../utils/tracking'
import { useOnClickOutside } from '../../hooks'
import Sidebar from '../Sidebar'
import NavigationText from '../NavigationText'
import { Root, Overlay, MenuOpenBtn, StyledButton, CfhLogo } from './style'

const LogoContainer = styled.a`
  position: absolute;
  top: 24px;
  left: 24px;
  height: 48px;
`

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false)
  const node = useRef()

  useOnClickOutside(node, () => {
    // Only run if sidebar is open
    if (open) {
      // Tracking [#10]
      Tracking.trackEvent({
        event: 'about-menu.click.close'
      }) 
    }
    setOpen(false)
  })

  const openSidebar = () => {
    // Tracking [#9]
    Tracking.trackEvent({
      event: 'about-menu.click.open'
    })
    setOpen(true)
  }

  return (
    <Root>

      <LogoContainer href="/" title="Cards for Humanity logo" data-track-category="nav" data-track-description="logo" data-testid="cfh-logo">
        <CfhLogo />
      </LogoContainer>
      <Overlay open={open} />
      <div ref={node}>
        <MenuOpenBtn>
          <StyledButton
            onClick={openSidebar}
            aria-label={t('content.openAbout')}
          >
            <NavigationText>{t('content.about')}</NavigationText>
          </StyledButton>
        </MenuOpenBtn>
        <FocusLock disabled={!open} as="div">
          <Sidebar setOpen={setOpen} open={open} />
        </FocusLock>
      </div>
    </Root>
  )
}

export default Header

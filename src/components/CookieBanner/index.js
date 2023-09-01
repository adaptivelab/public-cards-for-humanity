import React from 'react'
import { useTransition } from 'react-spring';

import { useTranslation } from 'react-i18next'
import { ReactComponent as IconClose } from '../../assets/icons/close.svg'

import Link from '../Link'
import {
  Root,
  Container,
  LinkContainer,
  CloseButton,
} from './style'

const CookieBanner = ({ onClose, show, animationDisabled }) => {
  const { t } = useTranslation();
  const expand = useTransition(show ? [1] : [], null, {
    from: {
      height: '58px',
      transform: 'translateY(0px)'
    },
    enter: {
      height: '58px',
      transform: 'translateY(0px)'
    },
    leave: {
      height: '0',
      transform: 'translateY(58px)'
    },
    config: { duration: animationDisabled ? 0 : undefined },

  });
  return expand.map(({ item, props, key }) => item &&
    <Root
      key={key}
      style={props}
    >
      <Container data-testid="cookie-consent-banner">
        <LinkContainer>
          <Link
            newTab textLink href="https://www.capgemini.com/privacy-policy/" data-testid="privacy-policy-link">
            {t('content.cookieBanner')}
          </Link>
        </LinkContainer>
        <CloseButton onClick={onClose} aria-label="close cookie notice" data-testid="dismiss-cookie-banner-button">
          <IconClose />
        </CloseButton>
      </Container>
    </Root>
  )
}

export default CookieBanner

import React from 'react'

import { HeadingExtraLarge, HeadingExtraSmall } from '../Heading'
import { ContentLarge } from '../Content'
import {
  HeroContentWrapper,
  HeroArtwork,
  DealButton,
  customHeadingExtraLarge,
  customHeadingExtraSmall,
  customContentLarge,
  MobileHeroImage,
} from './style'
import MobileImage from '../../assets/images/mobile-hero.svg'
import { useTranslation } from 'react-i18next'

const HeroContent = ({ onClick }) => {
  const { t } = useTranslation();
  const DesktopImage = require(`../../assets/images/${ t('content.heroImage') }`)
  return (
    <>
      <HeroContentWrapper>
        <div>
          <HeadingExtraLarge
            customStyle={customHeadingExtraLarge}
            data-testid="landing-page-heading"
          >
            { t('content.title') }
          </HeadingExtraLarge>
          <HeadingExtraSmall
            as="h2"
            customStyle={customHeadingExtraSmall}
            data-testid="landing-page-subheading"
          >
            { t('content.subtitle') }
          </HeadingExtraSmall>
          <ContentLarge
            customStyle={customContentLarge}
            data-testid="landing-page-instructions"
          >
            { t('content.text')}
          </ContentLarge>
        </div>
      </HeroContentWrapper>
      <HeroArtwork>
        <img
          src={DesktopImage.default}
          className="desktop"
          alt="an example of a 'person' card and a 'trait' card"
          data-testid="example-person-trait-card"
        />
        <MobileHeroImage
          src={MobileImage}
          alt="an image of two cards"
          className="mobile"
        />
      </HeroArtwork>
      <DealButton
        text={ t('content.dealCards') }
        onClick={onClick}
        data-testid="deal-cards-button"
        dataTestId="deal-cards-button-text"
      />
    </>
  )
}

export { HeroContent }

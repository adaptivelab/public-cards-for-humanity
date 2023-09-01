import styled, { css } from 'styled-components'
import { breakpoints } from '../../style/theme'
import { customPrimaryButton } from '../../style'
import ButtonPrimary from '../ButtonPrimary'

const HERO_CONTENT_MAX_WIDTH = 352
const SPACING_OUTWARD = 88

const HeroContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  text-align: center;
  ${breakpoints.desktop} {
    flex: 1 1 50%;
    text-align: left;
    order: 1;
    padding-right: ${SPACING_OUTWARD}px;
    > div {
      max-width: ${HERO_CONTENT_MAX_WIDTH}px;
    }
  }
  ${breakpoints.desktopLarge} {
    padding-right: 0;
  }
`

const HeroArtwork = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
  order: 1;
  .desktop {
    display: none;
  }
  ${breakpoints.desktop} {
    margin-top: 0;
    flex: 1 1 50%;
    order: 2;
    min-height: 500px;
    padding-left: ${SPACING_OUTWARD}px;
    .mobile {
      display: none;
    }
    .desktop {
      display: inherit;
    }
    svg {
      transform: scale(0.7);
    }
  }
  ${breakpoints.desktopLarge} {
    min-height: 664px;
    svg {
      transform: scale(1);
      padding-left: 0;
    }
  }
`

const MobileHeroImage = styled.img`
  width: 100%;
`

const DealButton = styled(ButtonPrimary)`
  order: 3;
  ${customPrimaryButton};
`

const customHeadingExtraLarge = css`
  margin-bottom: 24px;
  ${breakpoints.desktop} {
    margin-bottom: 32px;
  }
`

const customHeadingExtraSmall = css`
  margin-bottom: 32px;
  ${breakpoints.desktop} {
    margin-bottom: 40px;
  }
`

const customContentLarge = css`
  display: none;
  ${breakpoints.desktop} {
    display: block;
  }
`

export {
  HeroContentWrapper,
  HeroArtwork,
  DealButton,
  customHeadingExtraLarge,
  customHeadingExtraSmall,
  customContentLarge,
  MobileHeroImage,
}

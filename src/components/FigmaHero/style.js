import styled from 'styled-components'
import { breakpoints } from '../../style/theme'
import { HeadingExtraLarge, HeadingExtraSmall } from '../Heading'
import ButtonPrimary from '../ButtonPrimary'
import { customPrimaryButton } from '../../style'

const HERO_CONTENT_MAX_WIDTH = 420
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

const DealButton = styled(ButtonPrimary)`
  order: 3;
  ${customPrimaryButton};
`

const MainHeading = styled(HeadingExtraLarge)`
  margin-top: 60px;
  margin-bottom: 32px;
`

const SubHeading = styled(HeadingExtraSmall)`
  margin-bottom: 24px;
  ${breakpoints.desktop} {
    margin-bottom: 40px;
  }
`

const ContentContainer = styled.div`
  max-width: ${HERO_CONTENT_MAX_WIDTH}px;
  margin: 0 auto 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoints.desktop} {
    display: block;
  }
`

export {
  HeroContentWrapper,
  DealButton,
  MainHeading,
  SubHeading,
  ContentContainer,
}

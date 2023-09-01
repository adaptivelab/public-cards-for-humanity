import styled, { css } from 'styled-components'
import { colors, breakpoints } from './style/theme'
import { CONTENT_MAX_WIDTH, CARD_MAX_WIDTH } from './style/theme'

import { CARD_HEIGHT } from './components/Cards/style'
import { CARD_HEIGHT as FIGMA_CARD_HEIGHT } from './components/FigmaCards/style'
import { ReactComponent as FigmaLuciaImage } from './assets/images/lucia-figma.svg'
import { ReactComponent as FigmaBlindImage } from './assets/images/blind-figma.svg'

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ isFigma }) => (isFigma ? 0 : '20px')};
  position: relative;
  width: 100%;
  justify-content: center;
`

const Main = styled.main`
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: ${({ isFigma }) => (isFigma ? 0 : '104px')};;
  ${breakpoints.desktop} {
    flex: 1 0 auto;
    justify-content: center;
    padding-bottom: 0;
  }
`

const Footer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 20px 20px;
  display: flex;
  justify-content: space-between;

  ${breakpoints.desktop} {
    margin-top: 0;
  }
`

const FiftyFifty = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: ${CARD_MAX_WIDTH}px;
  width: 100%;
  margin: 0 auto;
  ${breakpoints.desktop} {
    flex-direction: row;
    max-width: ${CONTENT_MAX_WIDTH}px;
  }
  ${({ customStyle }) => customStyle && customStyle};
`

const Half = styled.div`
  flex: none;
  position: relative;
  height: ${({ isFigma }) => (isFigma ? FIGMA_CARD_HEIGHT : CARD_HEIGHT)};
  margin-bottom: 24px;
  ${breakpoints.tablet} {
    margin-bottom: 16px;
  }
  ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
`

const customPrimaryButton = css`
  margin: 0;
  max-width: ${CARD_MAX_WIDTH}px;
  margin-left: auto;
  margin-right: auto;
  ${breakpoints.desktop} {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
  }
`

const customHeadingMedium = css`
  font-size: 32px;
  margin-top: 56px;
  margin-bottom: 40px;
  text-align: center;
  ${breakpoints.desktop} {
    margin-top: 0;
    margin-bottom: 48px;
  }
`
const customCtaCard = css`
  margin-left: 4px;
  color: ${colors.black};
`

const CardContainer = styled(FiftyFifty)`
  ${breakpoints.tablet} {
    flex-direction: row;
    max-width: ${CONTENT_MAX_WIDTH}px;
    justify-content: space-around;
  }
`

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 92%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 32px;
`

const figmaImageStyles = css`
  height: 360px;
  position: absolute;
  z-index: -1;
`

const FigmaLucia = styled(FigmaLuciaImage)`
  ${figmaImageStyles};
  bottom: -12%;
  right: -24%;
  transform: rotate(-12deg);
  transform-origin: bottom right;
`

const FigmaBlind = styled(FigmaBlindImage)`
  ${figmaImageStyles};
  left: -12%;
  top: -12%;
  transform: rotate(24deg);
  transform-origin: top left;
`

export {
  Root,
  Container,
  Main,
  FiftyFifty,
  Half,
  customPrimaryButton,
  customHeadingMedium,
  customCtaCard,
  Footer,
  CardContainer,
  ControlsContainer,
  FigmaLucia,
  FigmaBlind,
}

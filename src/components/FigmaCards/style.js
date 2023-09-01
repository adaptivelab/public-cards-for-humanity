import styled, { css } from 'styled-components'
import { colors, breakpoints, fonts } from '../../style/theme'
import { animated } from 'react-spring'
import { HeadingExtraSmall } from '../Heading'
import { ContentSmall } from '../Content'
import { ReactComponent as IconEye } from '../../assets/icons/eye-small.svg'
import { ReactComponent as IconEyeClosed } from '../../assets/icons/eye-close-small.svg'

const CARD_HEIGHT = '420px'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${breakpoints.tablet} {
    width: 317px;
    height: ${CARD_HEIGHT};
  }

  ${breakpoints.desktop} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 317px;
    height: ${CARD_HEIGHT};
  }
`

const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 14px;
  box-shadow: 2px 17px 18px rgba(196, 196, 196, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 420px;
  transition: all 200ms ease-in-out;
  transform-origin: 20% 20%;

  &:hover {
    transform: rotate3d(1, -1, 0, 6deg);
    box-shadow: 7px 23px 22px rgba(196, 196, 196, 0.35);
  }

  ${(props) =>
    props.type === 'consider' &&
    `
    justify-content: flex-start;
  `}

  ${breakpoints.tablet} {
    padding: 30px;
  }

  ${breakpoints.desktop} {
    margin-bottom: 24px;
    width: 317px;
  }
`

const CardImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  img {
    max-height: 290px;
    height: 100%;
    object-fit: contain; // not supported in IE11
  }
`

const CardHeading = styled(HeadingExtraSmall)`
  margin-bottom: 16px;
`

const CardContent = styled(ContentSmall)`
  :not(:last-child) {
    margin-bottom: 16px;
  }
`

const CardControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
`

const AnimatedCard = styled(animated.div)`
  position: absolute;
  top: 0;
  width: 100%;
  cursor: pointer;
`

const CardFooter = styled.aside`
  margin-top: auto;
  justify-self: flex-end;
  font-size: 12px;
  line-height: 22px;
`

const CardTitleBack = styled.h2`
  margin-bottom: 8px;
`

const CardFlairText = styled(HeadingExtraSmall)`
  font-family: ${fonts.primary};
  font-size: 24px;
  font-weight: 600;
`

const iconsShared = css`
  position: absolute;
  top: 12px;
  right: 12px;
`
const EyeIcon = styled(IconEye)`
  ${iconsShared};
`

const EyeIconClosed = styled(IconEyeClosed)`
  ${iconsShared};
`

export {
  CardWrapper,
  Card,
  CardImageWrapper,
  CardHeading,
  CardControls,
  CardFooter,
  AnimatedCard,
  CARD_HEIGHT,
  CardTitleBack,
  CardContent,
  CardFlairText,
  EyeIcon,
  EyeIconClosed,
}

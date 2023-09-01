import styled from 'styled-components'
import { colors, breakpoints, fonts } from '../../style/theme'
import { animated } from 'react-spring'

const CARD_HEIGHT = '550px'

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
  margin-bottom: 40px;
  width: 100%;
  height: 480px;
  transition: all 200ms ease-in-out;
  transform-origin: 20% 20%;
  inline-size: 300px;
  overflow-wrap: break-word;

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
    max-height: 250px;
    height: 100%;
    object-fit: contain; // not supported in IE11
  }
`

const CardTitle = styled.p`
  font-size: 20px;
`

const CardPerson = styled(CardTitle)`
  margin-bottom: 24px;
`

const CardTrait = styled(CardTitle)`
  margin-top: 24px;
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

  > span {
    font-size: 20px;
    font-weight: 500;
  }
`

const CardTitleBack = styled.h2`
  font-family: ${fonts.primary};
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 8px;
`

const CardFlairText = styled.p`
  font-family: ${fonts.flair};
  font-size: 36px;
  font-weight: 500;
`

export {
  CardWrapper,
  Card,
  CardImageWrapper,
  CardTitle,
  CardPerson,
  CardTrait,
  CardControls,
  CardFooter,
  AnimatedCard,
  CARD_HEIGHT,
  CardTitleBack,
  CardFlairText,
}

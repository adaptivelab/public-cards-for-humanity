import React from 'react'
import styled from 'styled-components'
import { colors, breakpoints } from '../../style/theme'
import Cta from '../Cta'

const WIDTH_ROUND = 176
const WIDTH_HORIZONTAL = 217

const Root = styled.button`
  padding: 16px;
  cursor: pointer;
  border: 0;
  border-radius: 48px;
  background: ${colors.black};
  margin: 0 auto;
  margin-bottom: 64px;
  width: 100%;

  ${breakpoints.tablet} {
    width: ${WIDTH_HORIZONTAL}px;
  }

  ${breakpoints.desktop} {
    width: ${WIDTH_ROUND}px;
  }

  ${({ horizontal }) =>
    horizontal
      ? null
      : `
    ${breakpoints.desktop} {
      width: ${WIDTH_ROUND}px;
      height: ${WIDTH_ROUND}px;
      border-radius: 50%;
      padding: 24px;
      margin-bottom: 0;
    }`}
  ${({ customStyle }) => customStyle};
`

const ButtonPrimary = ({
  text,
  onClick,
  customStyle,
  dataTestId='primary-button',
  ...props
}) => {
  return (
    <Root onClick={onClick} customStyle={customStyle} {...props}>
      <Cta text={text} dataTestId={dataTestId}/>
    </Root>
  )
}

export default ButtonPrimary

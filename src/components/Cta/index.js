import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../style/theme'

const Root = styled.span`
  font-family: ${fonts.secondary};
  color: ${colors.white};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  ${({ customStyle }) => customStyle};
`

const Cta = ({ text, customStyle, dataTestId }) => {
  return <Root customStyle={customStyle} data-testid={dataTestId}>{text}</Root>
}

export default Cta

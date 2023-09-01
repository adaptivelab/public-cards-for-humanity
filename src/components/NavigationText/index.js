import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../style/theme'

const Root = styled.p`
  font-family: ${fonts.secondary};
  color: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  ${({ customStyle }) => customStyle};
  pointer-events: none;
`

const NavigationText = ({ children, customStyle, dataTestId }) => {
  return <Root customStyle={customStyle} data-testid={dataTestId}>{children}</Root>
}

export default NavigationText

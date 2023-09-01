import React from 'react'
import styled from 'styled-components'

const Root = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;
  ${({ customStyle }) => customStyle};
`

const Button = ({ children, onClick, customStyle, ...props }) => {
  return (
    <Root onClick={onClick} customStyle={customStyle} {...props}>
      {children}
    </Root>
  )
}

export default Button

import React from 'react'
import styled from 'styled-components'

const Root = styled.a`
  text-decoration: ${({ textLink }) => textLink && 'underline'};
  color: inherit;
  ${({ customStyle }) => customStyle};

  &:hover,
  &:focus {
    text-decoration: ${({ textLink }) => !textLink ? 'underline' : 'none'};
  }
`

const Link = ({ children, href, textLink, newTab, customStyle, ...props }) => {
  return (
    <Root
      href={href}
      target={newTab && '_blank'}
      rel={newTab && 'noopener noreferrer'}
      customStyle={customStyle}
      textLink={textLink}
      {...props}
    >
      {children}
    </Root>
  )
}

export default Link

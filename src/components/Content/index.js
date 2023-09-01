import styled, { css } from 'styled-components'
import { fonts, space } from '../../style/theme'

const shared = css`
  font-family: ${fonts.tertiary};
  font-weight: 400;
  line-height: 180%;
`

const ContentLarge = styled.p`
  ${shared};
  font-size: 18px;
  font-style: ${({ emphasis }) => emphasis && `italic`};
  ${({ customStyle }) => customStyle};
`

const ContentMedium = styled.p`
  ${shared};
  font-size: 16px;
  margin: ${space.sm} 0;
  ${({ customStyle }) => customStyle};
`

const ContentSmall = styled.p`
  ${shared};
  font-size: 14px;
  ${({ customStyle }) => customStyle};
`

const ContentExtraSmall = styled.p`
  ${shared};
  font-size: 12px;
  ${({ customStyle }) => customStyle};
`

export { ContentLarge, ContentMedium, ContentSmall, ContentExtraSmall }

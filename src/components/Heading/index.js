import styled, { css } from 'styled-components'
import { fonts, breakpoints } from '../../style/theme'

const shared = css`
  font-family: ${fonts.primary};
  font-weight: 300;
`

const HeadingExtraLarge = styled.h1`
  ${shared};
  font-size: 64px;
  line-height: 64px;
  //letter-spacing: -1px;

  ${breakpoints.tablet} {
    font-size: 76px;
    line-height: 76px;
  }

  ${({ customStyle }) => customStyle};
`

const HeadingLarge = styled.h2`
  ${shared};
  /* font-family: ${fonts.secondary}; */
  font-size: 40px;
  line-height: 44px;
  //letter-spacing: -1.5px;
  ${({ customStyle }) => customStyle};
`

const HeadingMedium = styled.h3`
  ${shared};
  font-size: 24px;
  line-height: 32px;
  //letter-spacing: -1.5px;

  ${breakpoints.tablet} {
    font-size: 32px;
    line-height: 44px;
  }

  ${({ customStyle }) => customStyle};
`

const HeadingSmall = styled.h4`
  ${shared};
  font-size: 24px;
  line-height: 32px;
  //letter-spacing: -0.4px;
  ${({ customStyle }) => customStyle};
`

const HeadingExtraSmall = styled.h5`
  font-family: ${fonts.secondary};
  font-size: 20px;
  line-height: 24px;
  //letter-spacing: -0.4px;
  font-weight: ${(props) => props.light && 400};
  ${({ customStyle }) => customStyle};
`

export {
  HeadingExtraLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingExtraSmall,
}

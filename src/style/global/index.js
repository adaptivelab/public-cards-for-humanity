import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import QuartoLight from '../fonts/Quarto-Light.woff2'
import QuartoLightItalic from '../fonts/Quarto-LightItalic.woff2'
import QuartoMedium from '../fonts/Quarto-Medium.woff2'
import GTAmericaRegular from '../fonts/GT-America-Standard-Regular.woff2'
import GTAmericaRegularBold from '../fonts/GT-America-Standard-Bold.woff2'

import { colors } from '../theme'

const fontFace = `
@font-face {
  font-family: 'QuartoLight';
  src: url(${QuartoLight}) format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'QuartoLightItalic';
  src: url(${QuartoLightItalic}) format("woff2");
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'QuartoMedium';
  src: url(${QuartoMedium}) format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'GTAmericaRegular';
  src: url(${GTAmericaRegular}) format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'GTAmericaRegularBold';
  src: url(${GTAmericaRegularBold}) format("woff2");
  font-style: normal;
  font-weight: 800;
  font-display: swap;
}

@font-face {
  font-family: 'GTAmericaRegular';
  src: url(${GTAmericaRegular}) format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'GTAmericaRegularBold';
  src: url(${GTAmericaRegularBold}) format("woff2");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}
`

const GlobalStyle = createGlobalStyle`
${normalize};
${fontFace};
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
body {
  background: ${colors.lightGray};
  font-size: 100%;
  min-height: 100%;
  position: relative;
  font-family: 'GT-America', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: ${colors.black};
  text-rendering: optimizeLegibility;
}
h1 {
  margin: 0;
}
p{
  margin-block-start: 0;
  margin-block-end: 0;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}
img[height],
img[width] {
  max-width: none;
}
svg {
  height: auto;
}

button, a {
  outline-offset: 4px;
  outline-width: 2px;
  outline-color: ${colors.black};
  cursor: pointer;
}

`

export default GlobalStyle

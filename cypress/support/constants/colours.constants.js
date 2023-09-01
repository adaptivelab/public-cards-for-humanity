// this file is a workaround for the issue that CSS color values are asserted on by Cypress in RGB format
import { colors as HEXCOLOURS } from '../../../src/style/theme/index.js'

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

const COLOURS = {
  black: hexToRgb(HEXCOLOURS.black),
  blue: hexToRgb(HEXCOLOURS.blue),
  lightGray: hexToRgb(HEXCOLOURS.lightGray),
  white: hexToRgb(HEXCOLOURS.white),
  white_alt: 'rgba(0, 0, 0, 0)'
}

export default COLOURS

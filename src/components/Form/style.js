import styled from 'styled-components'
import { colors, fonts, space } from '../../style/theme'

const InputContainer = styled.label`
  display: block;
  margin: ${space.md} 0;
  position: relative;
`

const InputLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: block;
`

const TextInput = styled.input`
  margin: 8px 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${colors.gray};
  color: ${colors.black};
  font-size: 18px;
  line-height: 180%;
  width: 100%;
`

const CheckboxLabel = styled.span`
  font-family: ${fonts.tertiary};
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
`

const CheckboxInput = styled.input`
  position: absolute;
  left: -9999px;

  + span {
    margin-left: 0;
  }

  + span:before {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-top: -3px;
    margin-right: 16px;
    margin-left: 0;
    vertical-align: middle;
    border: 2px solid ${colors.gray};
    content: '';
  }

  &:checked + span:after {
    background: ${colors.gray};
    position: absolute;
    display: inline-block;
    width: 14px;
    height: 14px;
    left: 5px;
    top: 7px;
    vertical-align: middle;
    border: 2px solid ${colors.gray};
    content: '';
  }

  &:focus + span {
    color: ${colors.black};
  }
`

export { InputContainer, InputLabel, TextInput, CheckboxLabel, CheckboxInput }
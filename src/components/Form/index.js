import React from 'react'

import {
  InputContainer,
  InputLabel,
  TextInput,
  CheckboxLabel,
  CheckboxInput,
} from './style'

const Input = ({ children, ...rest }) => {
  return (
    <InputContainer>
      <InputLabel>{children}</InputLabel>
      <TextInput {...rest} />
    </InputContainer>
  )
}

const Checkbox = ({ children, ...rest }) => {
  return (
    <InputContainer>
      <CheckboxInput type="checkbox" {...rest} />
      <CheckboxLabel>{children}</CheckboxLabel>
    </InputContainer>
  )
}



export { Input, Checkbox }
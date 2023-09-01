import styled from 'styled-components'
import { colors, fonts } from '../../style/theme'

const FormContainer = styled.div`
  margin-top: 16px;

  .hs-error-msgs {
    display: none !important;
  }

  .hs-form-field {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 0;
    margin: 0 0 40px;
    border: 0;
  }

  .hs-fieldtype-text,
  .hs-fieldtype-textarea {
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      display: block;
      margin-bottom: 8px;
    }

    textarea,
    input {
      width: 100%;
      padding: 10px 0;
      outline: none;
      border: 0;
      background: transparent;
      border-bottom: 2px solid ${colors.black};
      box-shadow: none;
      box-sizing: border-box;
      line-height: 16px;

      &.error {
        margin-top: 8px;
        border-color: ${colors.red};
      }
    }
  }

  .hs-richtext {
    margin: 16px 0;
  }

  .legal-consent-container {
    font-family: ${fonts.tertiary};
    font-weight: 400;
    line-height: 180%;
    font-size: 16px;

    .inputs-list {
      padding-left: 0;
      list-style-type: none;
    }

    input[type='checkbox'] {
      position: absolute;
      left: -9999px;

      + span {
        margin-left: 0;
      }

      + span:before {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-top: -3px;
        margin-right: 16px;
        margin-left: 3px;
        vertical-align: middle;
        border: 3px solid ${colors.lightGray};
        content: '';
        box-shadow: 0 0 0 3px ${colors.gray};
        box-sizing: content-box;
      }

      &:checked + span:before {
        background: ${colors.blue};
        content: '';
        box-shadow: 0 0 0 3px ${colors.blue};
      }

      &:focus + span:before {
        outline: 3px solid ${colors.black};
      }
    }

    .hs-error-msgs {
      display: block !important;
    }
  }

  input[type='submit'] {
    padding: 16px;
    color: ${colors.white};
    cursor: pointer;
    border: 0;
    border-radius: 48px;
    background: ${colors.black};
    margin: 0 auto;
    margin-bottom: 16px;
    width: 100%;
    font-weight: 600;
    margin-top: 16px;
  }

  .formHubSpotLink {
    display: inline-block;
    margin: 16px auto;
  }

  .submitted-message {
    font-family: ${fonts.tertiary};
    font-weight: 400;
    line-height: 180%;
    font-size: 18px;
  }
`

export { FormContainer }

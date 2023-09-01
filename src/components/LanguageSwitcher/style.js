import styled from 'styled-components'
import { fonts } from '../../style/theme'

const Dropdown = styled.select`
  appearance: none;
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  min-width: 140px;
  width: 100%;
  outline-color: black;
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEyIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02IDZMMCAwTDEyIDBMNiA2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=='),
    linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 12px top 55%, 0 0;
  background-size: 10px auto, 100%;
  .select-css::-ms-expand {
    display: none;
  }
`
export { Dropdown }

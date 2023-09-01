import styled from 'styled-components'
import {
  breakpoints,
  space,
} from '../../style/theme'
import Button from '../Button'
import { ReactComponent as Logo } from '../../assets/logos/cfh-frog.svg'

const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding-bottom: ${space.lg};
  ${breakpoints.desktop} {
    padding-bottom: 0;
  }
`

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.24);
  content: '';
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: all 200ms ease-in-out;
`

const MenuOpenBtn = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  margin-top: 5px;

  ${breakpoints.tablet} {
    margin-top: 10px;
  }
`

const StyledButton = styled(Button).attrs(() => ({
  'data-testid': 'about-section-button'
}))
`
  height: 100%;
  width: 100%;
`

const CfhLogo = styled(Logo)`
  width: 220px;
  pointer-events: none;

  ${breakpoints.tablet} {
    width: 275px;
  }
`


export { Root, Overlay, MenuOpenBtn, StyledButton, CfhLogo }

import styled from 'styled-components'
import { animated } from 'react-spring'
import { colors, space } from '../../style/theme'

export const Root = styled(animated.div)`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 58px;
`

export const Container = styled.div`
  position: absolute;
  padding: ${space.md};
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  color: ${colors.white};
  background: ${colors.blue};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinkContainer = styled.div`
  flex: 1 0;
  text-align: center;
`

export const CloseButton = styled.button`
  background: none;
	border: none;
  flex: 0 1;
`

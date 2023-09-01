import styled, { css } from 'styled-components'
import { colors, breakpoints } from '../../style/theme'

const Root = styled.aside`
  background: ${colors.lightGray};
  color: ${colors.black};
  height: 100%;
  max-width: 600px;
  overflow-y: auto;
  position: fixed;
  right: 0px;
  top: 0px;
  width: 100%;
  z-index: 2;
  transition: transform 0.5s;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  &[aria-hidden='true'] {
    * {
      display: none;
    }
  }
`

const ContentWrapper = styled.div`
  padding: 100px 20px 40px;
  min-height: 100%;
  position: relative;

  ${breakpoints.mobile} {
    padding: 88px 52px 52px;
  }
`

const Section = styled.section`
  :not(:last-child) {
    margin-bottom: 64px;
  }
`

const customButton = css`
  box-sizing: content-box;
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  height: 32px;
  width: 32px;
`

const customHeadingMedium = css`
  margin-bottom: 20px;
`

const customLink = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 10px 12px 0px;
  color: ${colors.black};

  img {
    pointer-events: none;
  }
`

const ListItem = styled.li`
  cursor: pointer;
  :not(:last-child) {
    border-bottom: 1px solid ${colors.black};
  }
`

const spaciousTop = css`
  margin-top: 8px;
`

const spaciousTopLarge = css`
  margin-top: 20px;
`

const LinkList = styled.ul`
  ${spaciousTop};
`

const spaciousRight = css`
  margin-right: 16px;
`

const SocialIcon = styled.a`
  background: ${colors.midGray};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`

const IdeanLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;

  ${breakpoints.mobile} {
    flex-wrap: no-wrap;
  }

  a:first-child {
    width: 100%;
    margin-bottom: 16px;

    ${breakpoints.mobile} {
      width: auto;
      margin-right: 46px;
    }
  }

  img {
    pointer-events: none;
  }
`

export {
  Root,
  ContentWrapper,
  Section,
  customButton,
  customHeadingMedium,
  customLink,
  ListItem,
  spaciousTop,
  spaciousTopLarge,
  LinkList,
  spaciousRight,
  SocialIcon,
  IdeanLinks,
}

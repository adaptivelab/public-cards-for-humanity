import React from 'react'

import Tracking from '../../utils/tracking'
import { HeadingMedium } from '../Heading'
import { ContentLarge, ContentExtraSmall } from '../Content'
import { useTranslation } from 'react-i18next'
import Link from '../Link'
import Button from '../Button'
import NavigationText from '../NavigationText'
import IconArrow from '../../assets/icons/arrow.svg'
import IconClose from '../../assets/icons/menu-close.svg'
import FrogLogo from '../../assets/logos/frog.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Instagram from '../../assets/icons/instagram.svg'
import {
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
} from './style'

const Sidebar = ({ open, setOpen, ...props }) => {
  const { t } = useTranslation();
  const isHidden = open ? false : true
  const tabIndex = open ? 0 : -1
  const reg = new RegExp(/\[(.*?)\]/, 'gi')

  const closeSidebar = () => {
    // Tracking [#10]
    Tracking.trackEvent({
      event: 'about-menu.click.close'
    })
    setOpen(false)
  }

  const replaceStringWithLink = (string) => (
    string.split(reg)
  )

  const getFigmaContent = () => {
    const splitCopy = replaceStringWithLink( t('content.figmaText') )
    return (
      <>
        {splitCopy[0]}
        <Link
          textLink
          href="https://www.figma.com/community/plugin/896347534161970744"
          tabIndex={tabIndex}
          target="_blank"
          rel="noopener noreferrer"
          data-track-category="about-menu" data-track-description="figma-plugin"
          data-testid="sidebar-figma-plugin-link"
        >
          {splitCopy[1]} {/* second element is always the link text */}
        </Link>
        {splitCopy[2]}
      </>
    )
  }

  const getFeedbackContent = () => {
    const splitCopy = replaceStringWithLink( t('content.feedbackText') )
    return (
      <>
        {splitCopy[0]}
        <Link
          textLink
          href="mailto:cardsforhumanity&#64;capgemini.com"
          tabIndex={tabIndex}
          data-track-category="about-menu" data-track-description="drop-us-a-note"
          data-testid="sidebar-feedback-link"
        >
          {splitCopy[1]} {/* second element is always the link text */}
        </Link>
        {splitCopy[2]}
      </>
    )
  }

  return (
    <Root open={open} aria-hidden={isHidden} data-testid="about-sidebar">
      <ContentWrapper>
        <Button
          customStyle={customButton}
          aria-label={t('content.closeAbout')}
          onClick={closeSidebar}
          tabIndex={tabIndex}
          data-testid="close-about-section-button"
        >
          <img src={IconClose} aria-hidden="true" alt="" />
        </Button>
        <Section>
          <HeadingMedium
            as="h2"
            customStyle={customHeadingMedium}
            data-testid="sidebar-what-is-cfh-title"
          >
            {t('content.whatTitle')}
          </HeadingMedium>
          <ContentLarge data-testid="sidebar-what-is-cfh-text">
            {t('content.whatText')}
          </ContentLarge>
          <ContentLarge
            data-testid="sidebar-figma-plugin-text"
            customStyle={spaciousTopLarge}
          >
            {getFigmaContent()}
          </ContentLarge>
        </Section>
        <Section>
          <HeadingMedium
            as="h2"
            customStyle={customHeadingMedium}
            data-testid="sidebar-how-to-play-title"
          >
            {t('content.howToTitle')}
          </HeadingMedium>
          <ContentLarge data-testid="sidebar-how-to-play-text">
            {t('content.howToText')}
          </ContentLarge>
        </Section>
        <Section>
          <HeadingMedium
            as="h2"
            customStyle={customHeadingMedium}
            data-testid="sidebar-idean-title"
          >
            {t('content.frogTitle')}
          </HeadingMedium>
          <ContentLarge data-testid="sidebar-idean-text">
            <strong>{t('content.frogTextStrong')}</strong>
          </ContentLarge>
          <br />
          <ContentLarge>
            {t('content.frogText1')}
          </ContentLarge>
          <br />
          <ContentLarge>
            {t('content.frogText2')}
          </ContentLarge>
          <br />
          <ContentLarge>
            {t('content.frogText3')}
          </ContentLarge>
          <LinkList>
            <ListItem>
              <Link
                href="mailto:cardsforhumanity&#64;capgemini.com?subject=Cards for Humanity workshop"
                customStyle={customLink}
                tabIndex={tabIndex}
                data-track-category="about-menu"
                data-track-description="cfh-workshop"
                data-testid="sidebar-idean-talk-to-us-link"
              >
                <ContentLarge
                  as="span"
                  customStyle={spaciousRight}
                  data-testid="sidebar-idean-talk-to-us-text"
                  data-track-category="about-menu"
                  data-track-description="cfh-workshop"
                >
                  {t('content.contactLinkText')}
                </ContentLarge>
                <img src={IconArrow} alt="" aria-hidden="true" />
              </Link>
            </ListItem>
          </LinkList>
        </Section>
        <Section>
          <HeadingMedium
            as="h2"
            customStyle={customHeadingMedium}
            data-testid="sidebar-feedback-title"
          >
            {t('content.feedbackTitle')}
          </HeadingMedium>
          <ContentLarge data-testid="sidebar-feedback-text">
            {getFeedbackContent()}
          </ContentLarge>
        </Section>

        <Section>
          <IdeanLinks>
            <a
              href="https://www.frog.co"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="sidebar-idean-logo-link"
              data-track-category="about-menu"
              data-track-description="idean-logo"
            >
              <img
                src={FrogLogo}
                alt="frog website"
                data-testid="sidebar-idean-logo"
              />
            </a>

            <SocialIcon
              href="https://www.facebook.com/frogdesigninc"
              target="_blank"
              rel="noopener noreferrer"
              data-track-category="about-menu"
              data-track-description="social-facebook"
              data-testid="sidebar-facebook-link"
            >
              <img
                src={Facebook}
                alt="frog Facebook"
                data-testid="sidebar-facebook-icon"
              />
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/frogdesign"
              target="_blank"
              rel="noopener noreferrer"
              data-track-category="about-menu"
              data-track-description="social-twitter"
              data-testid="sidebar-twitter-link"
            >
              <img
                src={Twitter}
                alt="frog Twitter"
                data-testid="sidebar-twitter-icon"
              />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/company/frogdesign"
              target="_blank"
              rel="noopener noreferrer"
              data-track-category="about-menu"
              data-track-description="social-linkedin"
              data-testid="sidebar-linkedin-link"
            >
              <img
                src={Linkedin}
                alt="frog LinkedIn"
                data-testid="sidebar-linkedin-icon"
              />
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com/frog_design"
              target="_blank"
              rel="noopener noreferrer"
              data-track-category="about-menu"
              data-track-description="social-instagram"
              data-testid="sidebar-insta-link"
            >
              <img
                src={Instagram}
                alt="frog Instagram"
                data-testid="sidebar-insta-icon"
              />
            </SocialIcon>
          </IdeanLinks>

          <ul>
            <li>
              <Link
                href="https://www.capgemini.com/privacy-policy/"
                newTab
                tabIndex={tabIndex}
                data-track-category="about-menu"
                data-track-description="footer-privacy"
                data-testid="sidebar-privacy-link"
              >
                <NavigationText as="span">{t('content.privacy')}</NavigationText>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.capgemini.com/terms-of-use/"
                newTab
                tabIndex={tabIndex}
                data-track-category="about-menu"
                data-track-description="footer-terms"
                data-testid="sidebar-terms-link"
              >
                <NavigationText as="span">{t('content.termsOfUse')}</NavigationText>
              </Link>
            </li>
            <li>
              <ContentExtraSmall
                customStyle={spaciousTop}
                data-testid="sidebar-copyright"
              >
                &copy; {new Date().getFullYear()} {t('content.footerLegal')}
              </ContentExtraSmall>
            </li>
          </ul>
        </Section>
      </ContentWrapper>
    </Root>
  )
}

export default Sidebar

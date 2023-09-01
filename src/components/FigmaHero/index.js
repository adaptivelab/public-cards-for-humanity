import React from 'react'
import { ContentMedium } from '../Content'
import NavigationText from '../NavigationText'
import Button from '../Button'
import {
  HeroContentWrapper,
  DealButton,
  ContentContainer,
  MainHeading,
  SubHeading,
} from './style'

const FigmaHero = ({ onClick, animationDisabled, setAnimation }) => (
  <>
    <HeroContentWrapper>
      <div>
        <MainHeading data-testid='figma-hero-heading'>Cards for Humanity</MainHeading>
        <SubHeading as="h2" data-testid='figma-hero-subheading'>A practical tool for inclusive design</SubHeading>
        <ContentContainer>
          <ContentMedium data-testid='figma-hero-instructions'>
            We’ll deal you two random cards, a person and a trait. Your
            challenge: work out how you can meet their needs.
          </ContentMedium>

          <Button onClick={() => setAnimation()} style={{ padding: '12px' }} data-testid='toggle-animation-button'>
            <NavigationText>
              Animation {animationDisabled ? 'off' : 'on'}{' '}
            </NavigationText>
          </Button>
        </ContentContainer>
      </div>
    </HeroContentWrapper>
    <DealButton text="Deal cards" onClick={onClick} data-testid='deal-cards-button' />
  </>
)

export { FigmaHero }

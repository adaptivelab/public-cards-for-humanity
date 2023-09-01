import React, { useState } from 'react'
import { useTransition } from 'react-spring'

import { useTranslation } from 'react-i18next'
import Tracking from '../../utils/tracking'
import Cta from '../Cta'
import Button from '../Button'
import { ContentMedium } from '../Content'

import IconRefresh from '../../assets/icons/refresh.svg'
import IconEye from '../../assets/icons/eye.svg'
import IconEyeClosed from '../../assets/icons/eye-close.svg'

import { customCtaCard } from '../../style'
import {
  CardWrapper,
  Card,
  CardImageWrapper,
  CardPerson,
  CardTrait,
  AnimatedCard,
  CardControls,
  CardFooter,
  CardTitleBack,
  CardFlairText,
} from './style'


const GenericCard = ({
  cardContent,
  cardType,
  onRefresh,
  key,
  style,
  children,
  animationDisabled
}) => {
  const { t } = useTranslation();
  const [flipped, setFlipped] = useState(false)
  const transitions = useTransition(flipped, null, {
    from: {
      position: 'absolute',
      opacity: 0,
      transform: `perspective(600px) rotateY(-180deg)`,
    },
    enter: { opacity: 1, transform: `perspective(600px) rotateY(0deg)` },
    leave: { opacity: 0, transform: `perspective(600px) rotateY(180deg)` },
    config: {
      mass: 5,
      tension: 500,
      friction: 80,
      duration: animationDisabled ? 0 : undefined,
    },
  })

  function trackViewNeeds(cardType, cardContent, state) {
    // Only run when viewing the needs
    if (state) return false

    // Tracking [#3, #4]
    Tracking.trackEvent({
      event: `game.click.view-${cardType}-needs`,
      [cardType]: Tracking.utils.formatCards(cardType, cardContent)
    })

  }

  return (
    cardContent && (
      <CardWrapper data-testid={`${cardType}-card`}>
        <AnimatedCard
          key={key}
          style={style}
          onClick={() => {
            setFlipped((state) => {
              trackViewNeeds(cardType, cardContent, state)
              return !state
            })
          }}
        >
          {transitions &&
            transitions.map(({ item, key, props }) =>
              item ? (
                <AnimatedCard key={key} style={props}>
                  <Card type="consider">
                    <CardTitleBack data-testid={`${cardType}-card-title-back`}>{t('content.consider')}</CardTitleBack>
                    {cardContent.considerations.map((consideration) => {
                      return (
                        <ContentMedium key={consideration} data-testid={`${cardType}-card-consideration`}>
                          {consideration}
                        </ContentMedium>
                      )
                    })}

                    {cardContent.stat && (
                      <CardFooter>
                        {cardContent.stat}
                      </CardFooter>
                    )}
                  </Card>
                </AnimatedCard>
              ) : (
                <AnimatedCard key={key} style={props}>
                  {children}
                </AnimatedCard>
              )
            )}
        </AnimatedCard>

        <CardControls>
          <Button
            onClick={() => {
              trackViewNeeds(cardType, cardContent)
              setFlipped((state) => !state)
            }}
            data-testid={`${cardType}-card-view-needs`}
          >
            <img src={flipped ? IconEyeClosed : IconEye} alt="" />
            <Cta
              text={t('content.viewNeeds')}
              customStyle={customCtaCard}
            />
          </Button>
          <Button
            onClick={() => {
              // Get new card
              var newCard = onRefresh();

              // Tracking [#5, #6]
              Tracking.trackEvent({
                event: `game.click.swap-${cardType}-card`,
                [cardType]: Tracking.utils.formatCards(cardType, newCard)
              })
            }}
            data-testid={`${cardType}-card-swap-card`}
          >
            <img src={IconRefresh} alt="" />
            <Cta text={t('content.swapCard')} customStyle={customCtaCard} />
          </Button>
        </CardControls>
      </CardWrapper>
    )
  )
}

export const PersonCard = (props) => {
  const { person } = props

  return (
    person && (
      <GenericCard {...props} cardType="person" cardContent={person}>
        <Card type="person">
          <CardPerson data-testid='person-name'>
            {person.name}, {person.age}
            <br />
            <CardFlairText data-testid="person-attribute">{person.personalityTraits}</CardFlairText>
          </CardPerson>
          <CardImageWrapper>
            <img src={person.image} alt="" style={{ width: '100%' }} data-testid="person-card-image" />
          </CardImageWrapper>
        </Card>
      </GenericCard>
    )
  )
}

export const TraitCard = (props) => {
  const { trait } = props

  return (
    trait && (
      <GenericCard {...props} cardType="trait" cardContent={trait}>
        <Card type="trait">
          <CardImageWrapper>
            <img src={trait.image} alt="" style={{ width: '100%' }} data-testid='trait-card-image' />
          </CardImageWrapper>
          <CardTrait>
            <CardFlairText data-testid='trait'>{trait.description}</CardFlairText>
          </CardTrait>
        </Card>
      </GenericCard>
    )
  )
}

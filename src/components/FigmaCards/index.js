import React, { useState } from 'react'
import { useTransition } from 'react-spring'
import {
  CardWrapper,
  Card,
  CardImageWrapper,
  CardHeading,
  AnimatedCard,
  CardFooter,
  CardContent,
  CardFlairText,
  EyeIcon,
  EyeIconClosed,
} from './style'

const GenericCard = ({
  cardContent,
  key,
  style,
  children,
  animationDisabled,
}) => {
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

  return (
    cardContent && (
      <CardWrapper>
        <AnimatedCard
          key={key}
          style={style}
          onClick={() => {
            setFlipped((state) => !state)
          }}
        >
          {transitions &&
            transitions.map(({ item, key, props }) =>
              item ? (
                <AnimatedCard key={key} style={props}>
                  <Card type="consider">
                    <EyeIconClosed alt="Hide needs" />
                    <CardFlairText
                      as="h2"
                      style={{ marginBottom: '16px', marginTop: '32px' }}
                    >
                      Consider
                    </CardFlairText>
                    {cardContent.considerations.map((consideration) => {
                      return (
                        <CardContent key={consideration}>
                          {consideration}
                        </CardContent>
                      )
                    })}

                    {cardContent.footer && (
                      <CardFooter>
                        {cardContent.footer.title}&#160;
                        {cardContent.footer.content}
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
      </CardWrapper>
    )
  )
}

export const PersonCard = (props) => {
  const { person } = props
  return (
    person && (
      <GenericCard {...props} cardContent={person}>
        <Card type="person" data-testid='person-card'>
          <EyeIcon alt="View needs" />
          <CardHeading as="h3" light style={{ lineHeight: '130%' }}>
            {person.name}, {person.age}
            <br />
            <CardFlairText as="span">{person.personalityTraits}</CardFlairText>
          </CardHeading>
          <CardImageWrapper>
            <img src={person.image} alt="" style={{ width: '100%' }} />
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
      <GenericCard {...props} cardContent={trait}>
        <Card type="trait" data-testid='trait-card'>
          <EyeIcon alt="View needs" />
          <CardImageWrapper>
            <img src={trait.image} alt="" style={{ width: '100%' }} />
          </CardImageWrapper>
          <CardFlairText as="h3" style={{ lineHeight: '130%' }}>
            {trait.description}
          </CardFlairText>
        </Card>
      </GenericCard>
    )
  )
}

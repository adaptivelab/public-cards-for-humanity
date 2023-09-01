import React, { useState, useEffect, Suspense } from 'react'
import { useTransition } from 'react-spring'
import Cookies from 'js-cookie'

import personData from './data/personality-cards.json'
import traitData from './data/trait-cards.json'

import Tracking from './utils/tracking'
import CookieBanner from './components/CookieBanner'
import { HeadingLarge } from './components/Heading'
import ButtonPrimary from './components/ButtonPrimary'
import Button from './components/Button'
import NavigationText from './components/NavigationText'
import { HeroContent } from './components/Hero'
import { FigmaHero } from './components/FigmaHero'
import Header from './components/Header'
import Cta from './components/Cta'
import { PersonCard, TraitCard } from './components/Cards'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import IconRefresh from './assets/icons/refresh-small.svg'
import { locales, default_locale } from './context/locales'

import {
  PersonCard as FigmaPersonCard,
  TraitCard as FigmaTraitCard,
} from './components/FigmaCards'
import {
  Root,
  Container,
  Main,
  Footer,
  FiftyFifty,
  Half,
  CardContainer,
  customPrimaryButton,
  customHeadingMedium,
  customCtaCard,
  ControlsContainer,
  FigmaLucia,
  FigmaBlind,
} from './style'

// Run tracking
Tracking.start()

// Pageview
Tracking.trackEvent({
  event: 'pageview',
})

function getPrefersReducedMotion() {
  const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQueryList.matches
}

const App = ({ isFigma }) => {
  const [person, setPerson] = useState(null)
  const [trait, setTrait] = useState(null)
  const {t, i18n } = useTranslation();
  const locale = locales.map((locale) => locale.key).includes(i18n.language) ? i18n.language : default_locale;
  const [personPool, setPersonPool] = useState(personData[locale])
  const [traitPool, setTraitPool] = useState(traitData[locale])
  const [gameView, setGameView] = useState(false)
  const [showCookieBanner, setShowCookieBanner] = useState(
    !Cookies.get()['cookie-banner-dismissed']
  )
  const [animationDisabled, setAnimationDisabled] = useState(
    getPrefersReducedMotion()
  )

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && !isFigma) {
      const script = document.createElement('script')

      script.src = `https://js.hs-scripts.com/${process.env.REACT_APP_HUBSPOT_ID}.js`
      script.id = 'hs-script-loader'
      script.async = true

      document.body.appendChild(script)
    }
  }, [isFigma])

  useEffect(() => {
    if (!traitPool || !traitPool.length) {
      setTraitPool(traitData[locale])
    }
  }, [traitPool, locale])

  useEffect(() => {
    if (!personPool || !personPool.length) {
      setPersonPool(personData[locale])
    }
  }, [personPool, locale])

  useEffect(() => {
    preloadPersonImages()
    preloadTraitImages()
  }, [])

  const preloadPersonImages = () => {
    // We can just use the English data here because the assets are the same
    // If we ever want to have different images for different languages, this will need to be updated
    personData.en_GB.map((person) => {
      const src = person.image
      return (new Image().src = src)
    })
  }

  const preloadTraitImages = () => {
    // We can just use the English data here because the assets are the same
    // If we ever want to have different images for different languages, this will need to be updated
    traitData.en_GB.map((trait) => {
      const src = trait.image
      return (new Image().src = src)
    })
  }

  const generatePair = () => {
    regeneratePair('initial')
    setGameView(true)
  }

  const regeneratePair = (actionType) => {
    let genNewP = generateNewPerson()
    let genNewT = generateNewTrait()

    // Tracking [#1, #2]
    Tracking.trackEvent({
      event: `game.click.deal-${actionType}-cards`,
      person: Tracking.utils.formatCards('person', genNewP),
      trait: Tracking.utils.formatCards('trait', genNewT),
    })
  }

  /*
    Generate new cards will pick a card at random from the available pool of cards.
    It will then remove the specified card from the pool.
    Once the pool is empty, the hooks above will repopulate the pool with the full set of cards.
  */
  const generateNewPerson = () => {
    const newPerson = personPool[Math.floor(Math.random() * personPool.length)]
    setPersonPool(personPool.filter((item) => item.id !== newPerson.id))
    setPerson(newPerson)

    return newPerson
  }

  const generateNewTrait = () => {
    const newTrait = traitPool[Math.floor(Math.random() * traitPool.length)]
    setTraitPool(
      traitPool.filter((item) => item.description !== newTrait.description)
    )
    setTrait(newTrait)

    return newTrait
  }

  const personTransitions = useTransition(
    person,
    (person) => person && person.id,
    {
      from: { transform: 'rotate(45deg) translate(0px, 1000px)' },
      enter: { transform: 'rotate(0deg) translate(0px, 0px)' },
      leave: { transform: 'rotate(-45deg) translate(0px, -1000px)' },
      config: { duration: animationDisabled ? 0 : undefined },
    }
  )

  const traitTransitions = useTransition(
    trait,
    (trait) => trait && trait.description,
    {
      from: { transform: 'rotate(-45deg) translate(0px, 1000px)' },
      enter: { transform: 'rotate(0deg) translate(0px, 0px)' },
      leave: { transform: 'rotate(45deg) translate(0px, -1000px)' },
      config: {
        tension: 130,
        duration: animationDisabled ? 0 : undefined,
      },
    }
  )

  const dismissCookieBanner = () => {
    setShowCookieBanner(false)
    Cookies.set('cookie-banner-dismissed', true, {
      expires: 90, // 90 days from now
    })
  }

  const SwapButton = ({ onRefresh, dataTestId, text }) => (
    <Button
      onClick={() => {
        onRefresh()
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
      }}
      data-testid={dataTestId}
    >
      <img src={IconRefresh} alt="" />
      <Cta text={text} customStyle={customCtaCard} />
    </Button>
  )

  const renderHero = () => {
    if (isFigma) {
      return (
        <>
          <FigmaBlind />
          <FiftyFifty>
            <FigmaHero
              onClick={generatePair}
              animationDisabled={animationDisabled}
              setAnimation={() => setAnimationDisabled(!animationDisabled)}
            />
          </FiftyFifty>
          <FigmaLucia />
        </>
      )
    } else {
      return (
        <FiftyFifty>
          <HeroContent onClick={generatePair} />
        </FiftyFifty>
      )
    }
  }

  const toggleAnimation = () => {
    // Tracking [#7]
    Tracking.trackEvent({
      event: 'game.click.animation',
      animation: animationDisabled ? 'on' : 'off',
    })
    setAnimationDisabled(!animationDisabled)
  }

  const switchLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    document.documentElement.lang = t('content.languageCode')
    setPersonPool(personData[newLang])
    setTraitPool(traitData[newLang])
    setGameView(false)
  }

  return (
    <Root>
      <Suspense fallback='loading...'>
      <Container isFigma={isFigma}>
        {!isFigma && <Header />}
        <Main isFigma={isFigma}>
          {gameView ? (
            <>
              {!isFigma && (
                <HeadingLarge as="h1" customStyle={customHeadingMedium} data-testid="game-title">
                  { t('content.gameTitle') }
                </HeadingLarge>
              )}
              <CardContainer>
                <>
                  <Half isFigma={isFigma}>
                    {personTransitions.map(({ item, props, key }) => {
                      const PersonCardRendered = isFigma
                        ? FigmaPersonCard
                        : PersonCard
                      return (
                        <PersonCardRendered
                          animationDisabled={animationDisabled}
                          person={item}
                          key={key}
                          style={props}
                          onRefresh={generateNewPerson}
                          onViewConsiderations={() => {}}
                          isFigma={isFigma}
                        />
                      )
                    })}
                  </Half>
                  <Half isFigma={isFigma}>
                    {traitTransitions.map(({ item, props, key }) => {
                      const TraitCardRendered = isFigma
                        ? FigmaTraitCard
                        : TraitCard
                      return (
                        <TraitCardRendered
                          animationDisabled={animationDisabled}
                          trait={item}
                          key={key}
                          style={props}
                          onRefresh={generateNewTrait}
                          onViewConsiderations={() => {}}
                          isFigma={isFigma}
                        />
                      )
                    })}
                  </Half>
                </>
              </CardContainer>
              {isFigma ? (
                <ControlsContainer>
                  <SwapButton
                    onRefresh={generateNewPerson}
                    dataTestId="swap-person-card-button"
                    text={t('content.swapCard')}
                  />
                  <ButtonPrimary
                    text={`Deal new pair`}
                    customStyle={customPrimaryButton}
                    onClick={() => {
                      regeneratePair('new')
                    }}
                    data-testid="deal-new-pair-button"
                  />
                  <SwapButton
                    onRefresh={generateNewTrait}
                    dataTestId="swap-trait-card-button"
                    text={t('content.swapCard')}
                  />
                </ControlsContainer>
              ) : (
                <ButtonPrimary
                  text={t('content.dealNewPair')}
                  customStyle={customPrimaryButton}
                  onClick={() => {
                    regeneratePair('new')
                  }}
                  data-testid='deal-new-pair-button'
                />
              )}
            </>
          ) : (
            <>{renderHero()}</>
          )}
        </Main>
        {!isFigma && (
          <Footer>
            <Button onClick={toggleAnimation} data-testid="animation-toggle">
              <NavigationText dataTestId="animation-toggle-text">
                {animationDisabled ? t('content.animationOff') : t('content.animationOn')}
              </NavigationText>
            </Button>
            <div>
              <LanguageSwitcher onChange={switchLanguage} />
            </div>
          </Footer>
        )}
      </Container>
      {!isFigma && (
        <CookieBanner
          animationDisabled={animationDisabled}
          show={showCookieBanner}
          onClose={dismissCookieBanner}
        />
      )}
      </Suspense>
    </Root>
  )
}

export default App
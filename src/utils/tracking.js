import TagManager from 'react-gtm-module'

// disable tracking
const noTrack = window.location.search.indexOf('notrack') !== -1

const Tracking = {

  excludeFromReactSnap: navigator.userAgent !== 'ReactSnap',

  utils: {
    // Format card data so it's suitable for analytics
    formatCards: (cardType, cardContent) => {
      switch(cardType) {
        case 'person':
          return `${cardContent.id} (${cardContent.personalityTraits})`
        case 'trait':
          return `${cardContent.id} (${cardContent.description})`
        default:
          return ''
      }
    },
  },

    
  // Initialise datalayer
  start: (dataLayer) => {
    if (noTrack) return false

    let configGTM = {
      gtmId: process.env.REACT_APP_GTM_TRACKING_ID
    };

    // GTM development env
    if (process.env.NODE_ENV !== 'production') {
      configGTM.auth = process.env.REACT_APP_GTM_ENV_AUTH
      configGTM.preview = process.env.REACT_APP_GTM_ENV
    }

    if (Tracking.excludeFromReactSnap) {
      // Google Tag Manager init
      TagManager.initialize(configGTM)
    }
  },

  // push data to the data layer
  trackEvent: (event) => {
    if (noTrack) return false

    if (Tracking.excludeFromReactSnap) {
      TagManager.dataLayer({
        dataLayer: event
      });
    }

  },

}
export default Tracking

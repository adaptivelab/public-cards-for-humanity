import COLOURS from '../../support/constants/colours.constants'
import * as URLS from '../../support/constants/urls.constants'


describe('landing page', () => {
  before(() => {
    cy.visit('/')
  });

  describe('general page tests', () => {
    it('has the correct page metadata', () => {
      cy.location('pathname').should('eq', '/')
      cy.title().should('eq', 'Cards for Humanity')
    });

    it('has the cookie consent banner', () => {
      cy.test_visibility('cookie-consent-banner')
      cy.test_css('cookie-consent-banner', {
        'background-color': COLOURS.blue,
        'height': '58px'
      })

      cy.test_text('privacy-policy-link', 'See our privacy and cookie policy', '16px', COLOURS.white)
      cy.test_attr('privacy-policy-link', 'href', URLS.privacy_policy)

      cy.test_visibility('dismiss-cookie-banner-button')
      cy.click_element('dismiss-cookie-banner-button')
      cy.getCookie('cookie-banner-dismissed')
        .its('value')
        .should('eq', 'true')
      cy.test_visibility('cookie-consent-banner', false)
    })
  })

  describe('page structure tests', () => {
    describe('header', () => {
      it('has the frog x CFH logo', () => {
        cy.test_visibility('cfh-logo')
        cy.test_attr('cfh-logo', 'href', '/')
      })

      it('has the About section button', () => {
        cy.test_visibility('about-section-button')
        cy.test_attr('about-section-button', 'aria-label', 'Open the About section')
      })
    })

    describe('About section sidebar', () => {
      before(() => {
        cy.click_element('about-section-button')
        cy.test_visibility('about-sidebar')
      })
      after(() => {
        cy.click_element('close-about-section-button')
      })

      it('is the right colour and size', () => {
        cy.test_css('about-sidebar', {
          'width': '600px',
          'background-color': COLOURS.lightGray
        })
      })

      it('has the What is CFH section', () => {
        cy.test_text('sidebar-what-is-cfh-title', 'What is Cards for Humanity?', '32px')
        cy.test_text(
          'sidebar-what-is-cfh-text',
          'It’s a practical tool to help you design more inclusively. Inclusive design allows everyone to access, use and enjoy a service experience. No matter what their situation or context.',
          '18px'
        )
      })

      it('has the How to play section', () => {
        cy.test_text('sidebar-how-to-play-title', 'How to play', '32px')

        cy.test_text(
          'sidebar-how-to-play-text',
          'Deal two cards: a person and a trait. Together they make a random user scenario. Use this scenario to test your product, service or concept from a different perspective. Swap out individual cards or deal again to get a new random scenario.',
          '18px'
        )
      })

      it('has the We\'re frog section', () => {
        cy.get("[data-testid='sidebar-idean-title']").scrollIntoView();

        cy.test_text('sidebar-idean-title', 'We’re frog', '32px');
        cy.test_text(
          'sidebar-idean-text',
          'frog is a leading global creative consultancy, part of Capgemini Invent',
          '18px',
        );
        cy.test_attr('sidebar-idean-talk-to-us-link', 'href', URLS.mailing_link_workshop);
        cy.test_text('sidebar-idean-talk-to-us-text', 'Talk to us about a Cards for Humanity workshop', '18px')
      });

      it('has the Feedback section', () => {
        cy.get("[data-testid='sidebar-feedback-title']").scrollIntoView()

        cy.test_text('sidebar-feedback-title', 'Tell us your feedback', '32px')
        cy.test_text('sidebar-feedback-text', 'How are you using Cards for Humanity? We want this site to be useful for everyone. Please drop us a note', '18px')
        cy.test_attr('sidebar-feedback-link', 'href', URLS.mailing_link)
      });

      it('has the logo and social icons', () => {
        cy.test_visibility('sidebar-idean-logo');
        cy.test_attr('sidebar-idean-logo', 'alt', 'frog website')
        cy.test_attr('sidebar-idean-logo-link', 'href', URLS.idean_uk)
        cy.test_attr('sidebar-idean-logo-link', 'target', "_blank")

        cy.test_visibility('sidebar-facebook-icon');
        cy.test_attr('sidebar-facebook-icon', 'alt', 'frog Facebook')
        cy.test_attr('sidebar-facebook-link', 'href', URLS.facebook)
        cy.test_attr('sidebar-facebook-link', 'target', "_blank")

        cy.test_visibility('sidebar-twitter-icon');
        cy.test_attr('sidebar-twitter-icon', 'alt', 'frog Twitter')
        cy.test_attr('sidebar-twitter-link', 'href', URLS.twitter)
        cy.test_attr('sidebar-twitter-link', 'target', "_blank")

        cy.test_visibility('sidebar-linkedin-icon');
        cy.test_attr('sidebar-linkedin-icon', 'alt', 'frog LinkedIn')
        cy.test_attr('sidebar-linkedin-link', 'href', URLS.linkedin)
        cy.test_attr('sidebar-linkedin-link', 'target', "_blank")

        cy.test_visibility('sidebar-insta-icon');
        cy.test_attr('sidebar-insta-icon', 'alt', 'frog Instagram')
        cy.test_attr('sidebar-insta-link', 'href', URLS.instagram)
        cy.test_attr('sidebar-insta-link', 'target', "_blank")
      });

      it('has the copyright section', () => {
        cy.get("[data-testid='sidebar-privacy-link']").scrollIntoView()

        cy.test_visibility('sidebar-privacy-link')
        cy.test_attr('sidebar-privacy-link', 'href', URLS.privacy_policy)
        cy.test_attr('sidebar-privacy-link', 'target', "_blank")

        cy.test_visibility('sidebar-terms-link')
        cy.test_attr('sidebar-terms-link', 'href', URLS.terms)
        cy.test_attr('sidebar-terms-link', 'target', "_blank")

        cy.test_content('sidebar-copyright', `© ${new Date().getFullYear()} frog, a Capgemini company. All rights reserved.`)
      });
    });

    describe('main content', () => {
      it('has the correct text', () => {
        cy.test_text('landing-page-heading', 'Cards for Humanity', '76px')
        cy.test_text('landing-page-subheading', 'A practical tool for inclusive design', '20px')
        cy.test_text(
          'landing-page-instructions',
          'We’ll deal you two random cards, a person and a trait. Your challenge: work out how you can meet their needs.',
          '18px'
        )
      })

      it('has the Deal cards button', () => {
        cy.test_css('deal-cards-button', {'background-color': COLOURS.black})
        cy.test_text('deal-cards-button-text', 'Deal cards', '18px', COLOURS.white)
      })

      it('has the landing page example cards', () => {
        cy.test_visibility('example-person-trait-card');
        cy.test_attr('example-person-trait-card', 'alt', 'an example of a \'person\' card and a \'trait\' card')
      });
    });

    describe('footer', () => {
      it('has the animation on toggle', () => {
        cy.test_visibility('animation-toggle')
        cy.test_text('animation-toggle-text', 'Animation on')
      })
    })
  })
})

import COLOURS from '../../support/constants/colours.constants'
import '../../support/commands/game.commands'

describe('game page', () => {
  before(() => {
    cy.visit('/')
    cy.click_element('dismiss-cookie-banner-button')
    cy.click_element('deal-cards-button')
  })

  describe('page structure tests', () => {
    it('has the correct title', () => {
      cy.test_text('game-title', 'How can you meet their needs?',
        '32px')
    })

    it('has a person card', () => {
      cy.test_visibility('person-card')
      cy.test_css('person-card', {
        'background-color': COLOURS.white_alt
      })

      cy.test_visibility(
        'person-name') // not using test_text as content is random
      cy.test_css('person-name', {
        'color': COLOURS.black,
        'font-size': '20px',
        'font-weight': '400'
      })

      cy.test_visibility(
        'person-attribute') // not using test_text as content is random
      cy.test_css('person-attribute', {
        'color': COLOURS.black,
        'font-size': '36px',
        'font-weight': '500'
      })

      cy.test_visibility('person-card-image')
      cy.test_attr('person-card-image', 'alt', '')

      cy.test_visibility('person-card-view-needs')
      cy.test_text('person-card-view-needs', 'View needs')

      cy.test_visibility('person-card-swap-card')
      cy.test_text('person-card-swap-card', 'Swap card')
    });

    it('has a trait card', () => {
      cy.test_visibility('trait-card')
      cy.test_css('trait-card', {
        'background-color': COLOURS.white_alt
      })

      cy.test_visibility(
        'trait') // not using test_text as content is random
      cy.test_css('trait', {
        'color': COLOURS.black,
        'font-size': '36px',
        'font-weight': '500'
      })

      cy.test_visibility('trait-card-image')
      cy.test_attr('trait-card-image', 'alt', '')

      cy.test_visibility('trait-card-view-needs')
      cy.test_text('trait-card-view-needs', 'View needs')

      cy.test_visibility('trait-card-swap-card')
      cy.test_text('trait-card-swap-card', 'Swap card')
    })

    it('has the deal new cards button', () => {
      cy.test_visibility('deal-new-pair-button')
      cy.test_css('deal-new-pair-button', {
        'background-color': COLOURS.black
      })
      cy.test_text('deal-new-pair-button', 'Deal new pair')
    })

    it('has the animation on toggle', () => {
      cy.test_visibility('animation-toggle')
      cy.test_text('animation-toggle-text', 'Animation on')
    })
  });

  describe('test scenarios', () => {
    describe('dealing and swapping cards', () => {
      it('swaps just the person card', () => {
        cy.get_element('person-name').invoke('text').then(
          originalPerson => {
            cy.get_element('trait').invoke('text').then(
              originalTrait => {
                cy.click_element('person-card-swap-card')
                cy.get_element('person-name').should(
                  'not.contain', originalPerson)
                cy.get_element('trait').should('contain',
                  originalTrait)
              })
          })
      })

      it('swaps just the trait card', () => {
        cy.get_element('person-name').invoke('text').then(
          originalPerson => {
            cy.get_element('trait').invoke('text').then(
              originalTrait => {
                cy.click_element('trait-card-swap-card')
                cy.get_element('person-name').should(
                  'contain', originalPerson)
                cy.get_element('trait').should(
                  'not.contain', originalTrait)
              })
          })
      })

      it('deals a new pair of cards', () => {
        cy.get_element('person-name').invoke('text').then(
          originalPerson => {
            cy.get_element('trait').invoke('text').then(
              originalTrait => {
                cy.click_element('deal-new-pair-button')
                cy.get_element('person-name').should(
                  'not.contain', originalPerson)
                cy.get_element('trait').should(
                  'not.contain', originalTrait)
              })
          })
      })
    })

    describe('view needs', () => {
      it('shows/hides the person considerations', () => {
        // clicking the View needs button
        cy.test_view_needs('person', 'button')
        // clicking the person card
        cy.test_view_needs('person', 'card')
      })

      it('shows/hides the trait considerations', () => {
        // clicking the View needs button
        cy.test_view_needs('trait', 'button')
        // clicking the trait card
        cy.test_view_needs('trait', 'card')
      })
    })
  })
})

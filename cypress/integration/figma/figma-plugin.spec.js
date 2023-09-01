import '../../support/commands/game.commands'

// set the viewport to match figma/code.js
Cypress.config({
    'viewportHeight': 568,
    'viewportWidth': 761
})

describe('figma plugin tests', () => {
    describe('Figma hero', () => {
        before(() => {
            cy.visit('/figma')
            cy.test_visibility('dismiss-cookie-banner-button', false)
        })

        it('has the correct titles and copy', () => {
            cy.test_text('figma-hero-heading', 'Cards for Humanity', '76px')
            cy.test_text('figma-hero-subheading', 'A practical tool for inclusive design', '20px')
            cy.test_text('figma-hero-instructions', 'We’ll deal you two random cards, a person and a trait. Your challenge: work out how you can meet their needs.')
        })

        it('has the animation toggle', () => {
            cy.test_text('toggle-animation-button', 'Animation on')
        })
        
        it('has the deal cards button', () => {
            cy.test_text('deal-cards-button', 'Deal cards')
        })
    })

    describe('Figma game page', () => {
        before(() => {
            cy.visit('/figma')
            cy.test_visibility('dismiss-cookie-banner-button', false)
            cy.click_element('deal-cards-button')
        })

        it('has the person card', () => {
           cy.test_visibility('person-card')
        })

        it('has the trait card', () => {
            cy.test_visibility('trait-card')
        })

        it('has the swap and deal new pair buttons', () => {
            cy.test_visibility('swap-person-card-button')
            cy.test_visibility('swap-person-card-button')
            cy.click_element('deal-new-pair-button')
        })
    })
})
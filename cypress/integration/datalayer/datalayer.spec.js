import '../../support/commands/tracking.commands'


describe.skip('custom event #1 - deal initial cards', () => {
    before(() => {
        cy.visit('/')
        cy.click_element('dismiss-cookie-banner-button')
    })

    it('pushes deal-cards-initial to the datalayer', () => {  
        //verifying the intial dataLayer load
        cy.window().its('dataLayer').then(dataLayer => {
            cy.verify_dataLayer_length(dataLayer, 2)
            cy.verify_gtm_start(dataLayer[0])
            cy.verify_pageview(dataLayer[1])
        })

        // trigger the event 
        cy.click_element('deal-cards-button')

        cy.window().its('dataLayer').then(dataLayer => {
            cy.verify_dataLayer_length(dataLayer, 3)

            // testing event #1
            // this could be abstracted into a custom function
            cy.wrap(dataLayer[2].event)
              .should('exist')
              .and('eq', 'game.click.deal-initial-cards')

            cy.wrap(dataLayer[2].person)
              .should('exist')

            cy.wrap(dataLayer[2].trait)
              .should('exist')
        })
    })
})

describe.skip('custom event #7 - animation on', () => {
    before(() => {
        cy.visit('/')
        cy.click_element('dismiss-cookie-banner-button')
    })

    it('pushes animation-on to the datalayer', () => {  
        //verifying the intial dataLayer load
        cy.window().its('dataLayer').then(dataLayer => {
            cy.verify_dataLayer_length(dataLayer, 2)
            cy.verify_gtm_start(dataLayer[0])
            cy.verify_pageview(dataLayer[1])
        })

        // trigger the event 
        cy.click_element('animation-toggle')

        cy.window().its('dataLayer').then(dataLayer => {
            cy.verify_dataLayer_length(dataLayer, 3)

            // testing event #1
            // this could be abstracted into a custom function
            cy.wrap(dataLayer[2].event)
              .should('exist')
              .and('eq', 'game.click.animation')

            cy.wrap(dataLayer[2].animation)
              .should('exist')
              .and('eq', 'off')
        })
    })
})
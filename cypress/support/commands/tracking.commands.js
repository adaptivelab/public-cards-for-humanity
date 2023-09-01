Cypress.Commands.add('verify_dataLayer_length', (object, length) => {
    cy.wrap(object)
      .should('exist')
      .and('have.length', length)

})

Cypress.Commands.add('verify_gtm_start', object => {
    cy.wrap(object)
      .should('exist')

    cy.wrap(object)
      .its('event')
      .should('exist')
      .and('eq', 'gtm.js')
})

Cypress.Commands.add('verify_pageview', object => {
    cy.wrap(object)
      .should('exist')
      .its('event')
      .should('eq', 'pageview')
})
import 'cypress-axe'

//custom logging
function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )
  
    cy.task('table', violationData)
}

// custom command to check accessibility on each page
// note: each file must import cypress-axe for this command to work

// if skipFailures is true, 
const skipFailures = true

Cypress.Commands.add('test_accessibility', (viewport='macbook-13') => {
    cy.viewport(viewport);
    cy.injectAxe();
    cy.checkA11y(
        {
            exclude: [],
        },
        {
            includedImpacts: ['critical', 'serious', 'moderate', 'minor'],
        },
        terminalLog,
        skipFailures
    );
});
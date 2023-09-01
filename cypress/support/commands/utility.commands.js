import COLOURS from '../../support/constants/colours.constants.js';

// custom command to get an element by dataTestId and click it
Cypress.Commands.add('click_element', dataTestId => {
  cy.get_element(dataTestId).click();
});

// custom command to get an element by dataTestId and click it
Cypress.Commands.add('get_element', dataTestId => {
  cy.get(`[data-testid="${dataTestId}"]`);
});

// custom command to test that a DOM element exists and has an attribute with a specified value
Cypress.Commands.add('test_attr', (dataTestId, attr, value) => {
  cy.get_element(dataTestId)
    .should('have.attr', attr)
    .should('eq', value);
});

// custom command to test that a DOM element exists and contains a string
Cypress.Commands.add('test_content', (dataTestId, content) => {
  cy.get_element(dataTestId)
    .should('be.visible')
    .should('contain', content);
});

// custom command to test that a DOM element exists and has css properties
Cypress.Commands.add('test_css', (dataTestId, tests) => {
  for (const [key, value] of Object.entries(tests)) {
    cy.get_element(dataTestId)
      .should('have.css', key)
      .should('eq', value);
  }
});

// custom command to test that a DOM element exists and has css properties
Cypress.Commands.add('test_text', (dataTestId, text, size='16px', colour=COLOURS.black) => {
  cy.test_content(dataTestId, text);
  cy.test_css(dataTestId, {'font-size': size, 'color': colour});
});

// custom command to test that a DOM element is visible
Cypress.Commands.add('test_visibility', (dataTestId, visible) => {
  if (visible == false) {
    cy.get_element(dataTestId).should('not.exist');
  } else {
    cy.get_element(dataTestId).should('be.visible');
  }
});

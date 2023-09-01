// custom command to test the view needs buttons
Cypress.Commands.add('test_view_needs', (card_type, action) => {
  var other_card_type = 'person'
  if (card_type == 'person') {
    other_card_type = 'trait'
  }

  // show the considerations
  if (action === 'button') {
    cy.click_element(`${card_type}-card-view-needs`)
  } else {
    cy.click_element(`${card_type}-card`)
  }
  // a wait to allow for card animations
  cy.wait(500)


  // test that the considerations are visible
  cy.test_visibility(`${card_type}-card-title-back`)
  cy.test_text(`${card_type}-card-title-back`, 'Consider', '22px')
  cy.test_visibility(`${card_type}-card-consideration`)

  // test that the front of the card is not visible
  cy.test_visibility(`${card_type}-name`, false)
  cy.test_visibility(`${card_type}-attribute`, false)
  cy.test_visibility(`${card_type}-card-image`, false)

  //test that the other card has not been flipped
  cy.test_visibility(`${other_card_type}-card-image`)

  // reset the card to the original state
  if (action === 'button') {
    cy.click_element(`${card_type}-card-view-needs`)
  } else {
    cy.click_element(`${card_type}-card`)
  }
  // a wait to allow for card animations
  cy.wait(500)
  cy.test_visibility(`${card_type}-card-image`)
})

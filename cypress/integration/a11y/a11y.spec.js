import '../../support/commands/a11y.commands'

describe('a11y tests', () => {
  describe('landing page', () => {
    before(() => {
      cy.visit('/')
      cy.get("[data-testid='landing-page-heading']").should('be.visible')
    });

    it('has no a11y violations in desktop view', () => {
      cy.test_accessibility()
      cy.click_element('about-section-button')
      cy.test_visibility('about-sidebar')
      cy.wait(500)
      cy.test_accessibility()
      cy.click_element('close-about-section-button')
    });

    it('has no a11y violations on mobile', () => {
      cy.test_accessibility('samsung-s10')
      cy.click_element('about-section-button')
      cy.test_visibility('about-sidebar')
      cy.wait(500)
      cy.test_accessibility('samsung-s10')
      cy.click_element('close-about-section-button')
    });

    it('has no a11y violations on small mobiles', () => {
      cy.test_accessibility('iphone-5')
      cy.click_element('about-section-button')
      cy.test_visibility('about-sidebar')
      cy.wait(500)
      cy.test_accessibility('iphone-5')
      cy.click_element('close-about-section-button')
    });
  });

  describe('game page', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.click_element('deal-cards-button')
    });

    it('has no a11y violations in desktop view', () => {
      cy.test_accessibility()
    });

    it('has no a11y violations on mobile', () => {
      cy.test_accessibility('samsung-s10')
    });

    it('has no a11y violations on small mobiles', () => {
      cy.test_accessibility('iphone-5')
    });
  });
});

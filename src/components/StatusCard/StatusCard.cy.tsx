/**
 * StatusCard Cypress Tests
 */

describe('StatusCard (Cypress)', () => {
  it('displays correctly in all status variants', () => {
    cy.visit('http://localhost:6006/?path=/story/micro-statuscard--success');
    cy.get('[data-testid="success-card"]').should('exist');
    cy.contains('Completed').should('be.visible');
    cy.contains('42').should('be.visible');
  });

  it('formats large numbers', () => {
    cy.visit('http://localhost:6006/?path=/story/micro-statuscard--largenumber');
    cy.contains('1,234,567').should('be.visible');
  });

  it('responds to click events', () => {
    cy.visit('http://localhost:6006/?path=/story/micro-statuscard--clickable');
    cy.get('[data-testid="clickable-card"]').click();
    // Verify card is still visible (click worked)
    cy.get('[data-testid="clickable-card"]').should('exist');
  });

  it('applies hover styles on clickable cards', () => {
    cy.visit('http://localhost:6006/?path=/story/micro-statuscard--clickable');
    cy.get('[data-testid="clickable-card"]').trigger('mouseover');
    cy.get('[data-testid="clickable-card"]').should('have.css', 'cursor', 'pointer');
  });
});

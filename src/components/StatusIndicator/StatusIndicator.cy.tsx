describe('StatusIndicator (Cypress)', () => {
  it('displays status indicator', () => {
    cy.visit('http://localhost:6006/?path=/story/micro-statusindicator--online');
    cy.get('[data-testid="status-indicator"]').should('exist');
  });
});

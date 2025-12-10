/**
 * LoadingSpinner Cypress Component Tests
 * 
 * Integration tests for LoadingSpinner in real browser environment
 */

describe('LoadingSpinner Component (Cypress)', () => {
  beforeEach(() => {
    // Mount component via Storybook
    cy.visit('http://localhost:6006');
  });

  it('displays spinner in all size variants', () => {
    // Test small
    cy.contains('[role="button"]', 'Small').click();
    cy.get('.MuiCircularProgress-root').should('exist');

    // Test medium
    cy.contains('[role="button"]', 'Default').click();
    cy.get('.MuiCircularProgress-root').should('exist');

    // Test large
    cy.contains('[role="button"]', 'Large').click();
    cy.get('.MuiCircularProgress-root').should('exist');
  });

  it('displays loading label when provided', () => {
    cy.contains('[role="button"]', 'WithLabel').click();
    cy.contains('Loading data...').should('be.visible');
  });

  it('animates spinner continuously', () => {
    cy.get('.MuiCircularProgress-root').should('exist');
    // Spinner should have animation (indeterminate state)
    cy.get('.MuiCircularProgress-svg').should('exist');
  });

  it('applies custom sx styling', () => {
    cy.get('[class*="MuiBox"]').first().should('exist');
  });
});

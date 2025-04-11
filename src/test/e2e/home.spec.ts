describe('template spec', () => {
  it('passes', () => {
    cy.visit('');
    cy.get('[role="main"]').contains('Title 1');
  });
});

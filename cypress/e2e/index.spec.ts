describe('Index', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the correct message', () => {
    cy.findByText(/Hello/).should('contain', 'Gatsby');
  });
});

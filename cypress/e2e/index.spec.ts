describe('Index', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the correct message', () => {
    cy.findByText(/Hello/).should('contain', 'Gatsby');
  });
});

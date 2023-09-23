/// <reference types="cypress" />

context('Users', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it('should get the users list from the server and display', () => {
    cy.get('app-user-card').should((domList) => {
      expect(domList.length).equal(10);
    });
  });

  it('should get the users list on searching', () => {
    cy.intercept('https://api.randomuser.me/*').as('searchUsers');
    cy.get('#searchInput').type('leo');
    cy.wait('@searchUsers').its("response.statusCode").should("eq", 200);
    cy.get('app-user-card').should((domList) => {
      expect(domList.length).equal(1);
    });
  });
});

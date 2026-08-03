beforeEach(() => {  
  cy.setCookie('ebacstoreversion', 'v2');
  cy.visit('http://lojaebac.ebaconline.art.br/');
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('[href="/Tab/Account"] > .r-g6644c').click();  
  cy.get('[data-testid="email"]').type(email);  
  cy.get('[data-testid="password"]').type(password);  
  cy.get('[data-testid="btnLogin"]').click(); 
});

Cypress.Commands.add('addItemToCart', () => {
  cy.get('[data-testid="productDetails"]', { timeout: 30000 })
    .first()
    .click({ force: true });
  
  cy.get('[data-testid="addToCart"] > .css-146c3p1', { timeout: 15000 })
    .should('be.visible')
    .click();

  cy.get('[href="/Tab/Home"] > .r-g6644c').click();

  cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click();
});

Cypress.Commands.add('completeCheckout', () => {
  // Seleciona o endereço primeiro
  cy.get('[data-testid="selectAddress"]', { timeout: 15000 })
    .first()
    .click({ force: true });

  // Aguarda o botão ficar habilitado e clica
  cy.get('[data-testid="selectAddressOrContinueToPayment"]', { timeout: 15000 })
    .should('not.have.css', 'pointer-events', 'none')
    .click({ force: true });

  cy.get('[data-testid="completeCheckout"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });
});

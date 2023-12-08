describe('navigation testing', () => {
  it('navbar page visit passed', () => {
    cy.visit('http://localhost:5173/');
    cy.getDataTest('nav-aboutUs')
      .should('be.visible')
      .then(($a) => {
        expect($a).to.have.attr('target', '_blank');
        $a.attr('target', '_self');
      })
      .click();
    cy.url().then((url) => {
      cy.url().should('eq', url);
    });

    cy.wait(3000);

    cy.visit('http://localhost:5173/');
    cy.getDataTest('nav-contact')
      .should('be.visible')
      .then(($a) => {
        expect($a).to.have.attr('target', '_blank');
        $a.attr('target', '_self');
      })
      .click();
    cy.url().then((url) => {
      cy.url().should('eq', url);
    });
  });
});

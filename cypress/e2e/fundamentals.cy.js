describe('fundamental testing', () => {
  it('input DO number passed', () => {
    cy.visit('http://localhost:5173/');
    cy.getDataTest('input-numberDO').type('test');
    cy.getDataTest('enter-button').click();
    cy.getDataTest('notification-info')
      .contains(/data delivery tidak ditemukan/i)
      .should('exist');
    cy.getDataTest('notFound-comp').should('exist');

    cy.wait(2000);

    cy.getDataTest('input-numberDO').clear().type('test1234567890987654321');
    cy.getDataTest('notification-info')
      .contains(/Nomor DO tidak boleh lebih dari 16 karakter/i)
      .should('exist');

    cy.wait(2000);

    cy.reload();

    cy.getDataTest('input-numberDO').type('test');
    cy.getDataTest('enter-button').click();
    cy.getDataTest('notification-info')
      .contains(/data delivery tidak ditemukan/i)
      .should('exist');
    cy.getDataTest('notFound-comp').should('exist');

    cy.getDataTest('input-numberDO').clear().type('gwdbgg2023030033');
    cy.getDataTest('enter-button').click();
    cy.getDataTest('data-delivery-details')
      .should('exist')
      .within(() => {
        cy.getDataTest('order-info');
      });
  });
});

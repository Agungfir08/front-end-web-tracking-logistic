describe('fundamental testing', () => {
  it('input DO number passed', () => {
    cy.visit('http://localhost:5173/');
    cy.getDataTest('input-numberDO').type('test');
    cy.getDataTest('enter-button').click();
    cy.getDataTest('notification-info')
      .should('exist')
      .contains(/data delivery tidak ditemukan/i);
    cy.wait(4500);
    cy.getDataTest('notification-info').should('not.exist');

    //input long DO number more than 16 characters
    cy.getDataTest('input-numberDO').clear().type('test1234567890987654321');
    cy.getDataTest('notification-info')
      .should('exist')
      .contains(/Nomor DO tidak boleh lebih dari 16 karakter/i);
    cy.wait(4500);
    cy.getDataTest('notification-info').should('not.exist');

    //input wrong DO number
    cy.getDataTest('input-numberDO').type('test');
    cy.getDataTest('enter-button').click();
    cy.getDataTest('notification-info')
      .should('exist')
      .contains(/data delivery tidak ditemukan/i);
    cy.wait(4500);
    cy.getDataTest('notification-info').should('not.exist');
    cy.getDataTest('notFound-comp').should('exist');

    //input right DO number
    cy.getDataTest('input-numberDO').clear().type('gwdbgg2023030033');
    cy.getDataTest('enter-button').click();
    cy.getDataTest('notFound-comp').should('not.exist');
    cy.getDataTest('data-delivery-details')
      .should('exist')
      .within(() => {
        cy.getDataTest('order-info');
        cy.getDataTest('tracking-info').within(() => {
          cy.getDataTest('tracking-info-stepper0').should('not.exist');
        });
        cy.getDataTest('shipment-info').within(() => {
          cy.getDataTest('shipment-info-child0').should('not.have.value');
        });
      });

    //input wrong access code
    cy.getDataTest('input-button-accessCode').click();
    cy.getDataTest('dialog-input-access-code')
      .should('exist')
      .contains(/Masukkan Kode Akses/i);
    const otpWrong = ['1', '2', '3', '4'];
    otpWrong.forEach((num, index) => {
      cy.getDataTest(`input-otp${index}`).type(num);
    });
    cy.getDataTest('enter-button-accessCode').click();
    cy.getDataTest('notification-info')
      .should('exist')
      .contains(/Kode Akses Anda Salah/i);
    cy.wait(4500);
    cy.getDataTest('notification-info').should('not.exist');
    cy.getDataTest('dialog-input-access-code').should('exist');

    //send forget code via whatsapp
    cy.getDataTest('input-forget-code').click();
    cy.getDataTest('dialog-forget-code').should('exist');
    cy.getDataTest('forget-code-0').click();
    cy.getDataTest('notification-info')
      .should('exist')
      .contains(/Kode akses terkirim/i);
    cy.wait(4500);
    cy.getDataTest('notification-info').should('not.exist');
    cy.getDataTest('dialog-forget-code').should('not.exist');

    //input right access code
    cy.getDataTest('input-button-accessCode').click();
    const otpRight = ['9', '0', '4', '5'];
    otpRight.forEach((num, index) => {
      cy.getDataTest(`input-otp${index}`).type(num);
    });
    cy.getDataTest('enter-button-accessCode').click();
    cy.getDataTest('notification-info')
      .should('exist')
      .contains(/Data Order Detail Ditemukan/i);
    cy.wait(4500);
    cy.getDataTest('notification-info').should('not.exist');
    cy.getDataTest('dialog-input-access-code').should('not.exist');
    cy.getDataTest('data-delivery-details')
      .should('exist')
      .within(() => {
        cy.getDataTest('order-info');
        cy.getDataTest('tracking-info').within(() => {
          cy.getDataTest('tracking-info-stepper0').should('exist');
        });
        cy.getDataTest('shipment-info').within(() => {
          cy.getDataTest('shipment-info-child0').contains(/Normal/i);
        });
      });
  });
});

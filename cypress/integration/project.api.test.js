/// <reference types="cypress" />

describe('API - Project', () => {
  it('Can create project', function () {
    const user = {
      firstName: 'Charles',
      lastName: 'Brady',
      email: 'chazzrb@gmail.com',
      password: 'Password1!',
      passwordConfirmation: 'Password1!',
    };

    cy.registerNewUser(user);
    cy.login(user);

    cy.request('POST', `${Cypress.config('apiUrl')}/api/project`, {
      name: 'Stabilyzr',
      UserId: 1,
    }).then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('name', 'Stabilyzr'); // true
    });
  });
});

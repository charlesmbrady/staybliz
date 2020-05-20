/// <reference types="cypress" />

import Nav from '../elements/nav';

describe('Project operations', () => {
  it('Can create project', function () {
    const user = {
      firstName: 'Charlesz',
      lastName: 'Bradyz',
      email: 'chazzrrb@gmail.com',
      password: 'Password1!',
      passwordConfirmation: 'Password1!',
    };

    cy.registerNewUser(user);
    cy.login(user);
    cy.get();
  });
});

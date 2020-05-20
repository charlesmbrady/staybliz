/// <reference types="cypress" />

import Nav from '../elements/nav';
import Toolbar from '../elements/toolbar';
import NewProject from '../elements/newProject';

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
    cy.get(Toolbar.NEW_PROJECT_BUTTON).click();
    cy.get(NewProject.NAME).type('my project').click();
    cy.get(NewProject.SUBMIT).click();
  });
});

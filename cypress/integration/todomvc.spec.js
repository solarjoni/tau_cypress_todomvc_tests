/// <reference types="cypress" />

it('should be able to add a new todo to the list', () => {
    //cy.visit('https://todomvc-app-for-testing.surge.sh?delay-new-todo=5000');
    cy.visit('https://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}");
});
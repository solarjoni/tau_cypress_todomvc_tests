/// <reference types="cypress" />
var TodoPage  = require('../page-objects/todo-page');

describe('todo actions', () => {
    const todoPage = new TodoPage();

    beforeEach(() => {
        //cy.visit('https://todomvc-app-for-testing.surge.sh?delay-new-todo=5000');
        todoPage.navigate();
        //cy.visit('https://todomvc-app-for-testing.surge.sh');
        todoPage.addTodo('Clean room')
        //cy.get('.new-todo', { timeout: 6000 }).type("Clean room{enter}");
    });

    it('should add a new todo to the list', () => {
        todoPage.validateTodoText(0, 'Clean room');
        //cy.get('label').should('have.text', 'Clean room');
        todoPage.validateToggleState(0, false);
        //cy.get('.toggle').should('not.be.checked');
    });

    it('should mark a todo as completed', () => {
        todoPage.toggleTodo(0);
        todoPage.validateTodoCompletedState(0, true);
        //cy.get('.toggle').click();
        //cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    });

    it('should clear completed todo', () => {
        todoPage.toggleTodo(0);
        todoPage.clearCompleted(0);
        todoPage.validateNumberOfTodosShown(0);
        //cy.get('.toggle').click();
        //cy.contains('Clear').click();
        //cy.get('.todo-list').should('not.have.descendants', 'li');
    });

})
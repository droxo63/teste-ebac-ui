// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
        cy.get('#username').type(email)
        cy.get('#password').type(password)
        cy.get('.woocommerce-form > .button').click()
 })

 Cypress.Commands.add('detalhesConta', (firstName, lastName, displayName) => { 
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('#account_display_name').type(displayName)
    cy.get('.woocommerce-Button').click()
})
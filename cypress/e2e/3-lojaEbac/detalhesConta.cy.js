/// <reference types="cypress" />
const perfil = require ("../../fixtures/perfil.json") 

describe('Funcionalidade de Produtos', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.login(perfil.email, perfil.password)
        cy.get('.woocommerce-MyAccount-content').should("exist")
        //cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    });

    it('Deve alterar cadastro com sucesso usando comando customizado', () => {
        cy.detalhesConta(perfil.firstname, perfil.lastname, perfil.displayname)
        cy.get('.woocommerce-message').should("contain", "Detalhes da conta modificados com sucesso.")
    });
    

        


})

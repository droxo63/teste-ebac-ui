/// <reference types="cypress" />
const perfil = require ("../../fixtures/perfil.json") 
describe('Funcionalidade de login', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
    });


    it("Deve fazer login com sucesso", () => {
        
        cy.get("body").should("contain", "Login")
        cy.get('#username').type(perfil.email)
        cy.get('#password').type(perfil.password)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content').should("be.visible")
       // Verifica o texto específico dentro do elemento .woocommerce-MyAccount-content
       // cy.get('.woocommerce-MyAccount-content').should("contain.text", "Olá, diego@teste12.com.br (não é diego@teste12.com.br? Sair)")
    })

    it('Deve dar erro com usuário inválido', () => {
        
        cy.get("body").should("contain", "Login")
        cy.get('#username').type(perfil.wrongemail)
        cy.get('#password').type(perfil.password)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should("exist")
        //cy.get('.woocommerce-error').should('contain', "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.")

    })
    it('Deve dar erro com senha inválida', () => {
       
        cy.get("body").should("contain", "Login")
        cy.get('#username').type(perfil.email)
        cy.get('#password').type(perfil.wrongpassword)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should("exist")
       // cy.get(".woocommerce-error > li").should("contain","Erro: A senha fornecida para o e-mail diego@teste12.com.br está incorreta. Perdeu a senha?")

    })

    it("Deve fazer login com sucesso usando Fixtures", () => {
        cy.fixture('perfil').then((dados) => {
            cy.get('#username').type(dados.email)
            cy.get('#password').type(dados.password)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content').should("be.visible")
        })
    })
})

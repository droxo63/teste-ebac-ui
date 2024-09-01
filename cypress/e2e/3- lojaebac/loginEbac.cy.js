/// <reference types="cypress" />

describe('Funcionalidade de login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });


    it("Deve fazer login com sucesso", () => {
        
        cy.get("body").should("contain", "Login")
        cy.get('#username').type("fabio.teste@teste.com.br")
        cy.get('#password').type("teste@123")
        cy.get('.woocommerce-form > .button').click()
       //Aguarda até que o elemento específico que contém o texto esteja visível
        cy.get('.woocommerce-MyAccount-content').should("be.visible")
       // Verifica o texto específico dentro do elemento .woocommerce-MyAccount-content
        cy.get('.woocommerce-MyAccount-content').should("contain.text", "Olá, fabio.teste (não é fabio.teste? Sair)")
    })

    it('Deve dar erro com usuário inválido', () => {
        
        cy.get("body").should("contain", "Login")
        cy.get('#username').type("fabio.teste@teste.com")
        cy.get('#password').type("teste@123")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.")

    })
    it('Deve dar erro com senha inválida', () => {
       
        cy.get("body").should("contain", "Login")
        cy.get('#username').type("fabio.teste@teste.com.br")
        cy.get('#password').type("teste0000")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should("exist")
        cy.get(".woocommerce-error > li").should("contain","Erro: A senha fornecida para o e-mail fabio.teste@teste.com.br está incorreta. Perdeu a senha?")

    })
})

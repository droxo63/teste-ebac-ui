/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
const perfil = require ("../../fixtures/perfil.json")  
describe('Funcionalidade de cadastro de usuário', () => {
    

    beforeEach(() => {
        cy.visit("minha-conta/")
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve registrar dados de acesso de usuario com sucesso', () => {
        var email = faker.internet.email()
        var password = faker.internet.password()
        cy.get('#tbay-mainmenu > .container').should('exist')
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should("be.visible")
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
    });

    it('Deve tentar registrar dados de acesso de usuario com e-mail repetido', () => {
        var password = faker.internet.password()
        cy.get('#tbay-mainmenu > .container').should('exist')
        cy.get('#reg_email').type(perfil.email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should('contain', "Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.")
    });

    it('Deve apresentar mensagem de erro com e-mail em formato inválido', () => {
        cy.get('#tbay-mainmenu > .container').should('exist')
        cy.get('#reg_email').type(perfil.wrongemail)
        cy.get('#reg_password').type(perfil.password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should("contain", 'Erro: Informe um endereço de e-mail válido')
    });

    it('Deve apresentar mensagem de erro com campo senha em branco', () => {
        var email = faker.internet.email()
        cy.get('#tbay-mainmenu > .container').should('exist')
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').clear()
        cy.get(':nth-child(4) > .button').click({force: true})
        cy.get('.woocommerce-error').should("contain", "Erro: Digite a senha da conta.")     
    });
    it('Deve completar o registro de dados do usuario com sucesso', () => {
        
        var password = faker.internet.password()
        var firstname = faker.person.firstName()
        var lastname = faker.person.lastName()
        var displayname = faker.person.prefix()
        var email = faker.internet.email(firstname)
            
        cy.get('#tbay-mainmenu > .container').should('exist')
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should("be.visible")
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('.woocommerce-EditAccountForm').should("exist")
        cy.get('#account_first_name').type(firstname)
        cy.get('#account_last_name').type(lastname)
        cy.get('#account_display_name').type(displayname)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', "Detalhes da conta modificados com sucesso.")


    });
    it('Funcionalidade de cadastro com email repetido usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.get('#reg_email').type(dados.email)
            cy.get('#reg_password').type(dados.password)
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-error > li').should('contain', "Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.")
        })

    });
});
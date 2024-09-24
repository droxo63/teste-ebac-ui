/// <reference types="cypress" />

import produtosPage from "../../support/pageObjects/produtosPage"


describe('Funcionalidade de Produtos', () => {
beforeEach(() => {
    produtosPage.visitarUrl()
});

    it('Deve visitar a pagina do produto', () => {
        cy.visit("aether-gym-pant/")
        cy.get('.product_title').contains("Aether Gym Pant")
        
    });
    it('Deve selecionar o produto com sucesso', () => {
       
        produtosPage.selecionarProduto("Abominable Hoodie")
        cy.get('.product_title').contains("Abominable Hoodie")

    });
    it("Deve buscar o produto com sucesso", ()=>{
       
        produtosPage.buscarProduto("Aero Daily Fitness Tee")
        cy.get('.product_title').contains("Aero Daily Fitness Tee")
    })

    it('Deve adicionar produto no carrinho', () => {
        produtosPage.buscarProduto("Aether Gym Pant")
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').contains("2 × “Aether Gym Pant” foram adicionados no seu carrinho.")



        
    });
})
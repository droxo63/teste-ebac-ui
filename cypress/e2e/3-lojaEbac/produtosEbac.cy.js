/// <reference types="cypress" />
//import { produtosPage } from "../../support/pageObjects/produtosPage";
describe('Funcionalidade de Produtos', () => {

    beforeEach(() => {
      // produtosPage.visitarUrl()
      cy.visit('produtos/')
    });

    //afterEach(() => {
     //   cy.screenshot()
    //});

it('Deve selecionar um produto da lista', () => {
    cy.get('.products > .row')
    //.eq(2)
    .contains("Aero Daily Fitness Tee")
    .click()
    cy.get('.product_title').should("contain", "Aero Daily Fitness Tee")
    

});

it('Deve fazer busca de produto (campo de busca)', () => {
    //produtosPage.buscarProduto("")
    cy.get("[type='text']").eq(1).type("Aero Daily Fitness Tee")
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.product_title').should("contain", 'Aero Daily Fitness Tee')
});
it('Deve visitar a pagina do produto', () => {
   // produtosPage.visitarProduto("")
   cy.visit(`produtos/${"Aero-Daily-Fitness-Tee"}`)
   cy.get('.product_title').should("contain", 'Aero Daily Fitness Tee')
});

it.only('Deve adicionar produto no carrinho', () => {
   //produtosPage.adicionarCarrinho("")
   let qtd = 7
   let tamanho = "M"
   let cor = "Blue" 
    let produto = "Atlas Fitness Tank"
   cy.get("[type='text']").eq(1).type(produto)
   cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
   cy.get('.product_title').should("contain", produto)
   cy.get(`.button-variable-item-${tamanho}`).click()
   cy.get(`.button-variable-item-${cor}`).click()
   cy.get('.input-text').clear().type(qtd)
   cy.get('.single_add_to_cart_button').click()
   cy.get('.woocommerce-message').should("contain", `${qtd} × “Atlas Fitness Tank” foram adicionados no seu carrinho.`)
});

})
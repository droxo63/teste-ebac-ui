/// <reference types="cypress" />

import produtosPage from "../../support/pageObjects/produtosPage"


describe('Funcionalidade de Produtos', () => {
beforeEach(() => {
    produtosPage.visitarUrl()
});

    it.only('Deve visitar a pagina do produto', () => {
        let produtoUrl = "aether-gym-pant"
        let produto = "Aether Gym Pant"
        produtosPage.visitarProduto(produto)
        cy.get('.product_title').contains(produto)
        
    });
    it('Deve selecionar o produto com sucesso', () => {
       let produto = "Abominable Hoodie"
        produtosPage.selecionarProduto(produto)
        cy.get('.product_title').contains(produto)

    });
    it("Deve buscar o produto com sucesso", ()=>{
       let produto = "Aero Daily Fitness Tee"
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').contains(produto)
    })

    it('Deve adicionar produto no carrinho', () => {
        let tamanho = "36"
        let cor = "Green"
        let qtd = 2
        let nomeProduto = "Aether Gym Pant"
        produtosPage.buscarProduto("Aether Gym Pant")
        produtosPage.adicionarCarrinho(tamanho, cor, qtd )
        cy.get('.woocommerce-message').contains(`${qtd} × “Aether Gym Pant” foram adicionados no seu carrinho.`)
    })
        it('Deve adicionar produto no carrinho buscando da massa de dados', () => {
            cy.fixture("dadosProdutos").then(dados =>{
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.adicionarCarrinho(dados[1].tamanho, dados[1].cor, dados[1].qtd )
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
            })
            

        
   
})
})
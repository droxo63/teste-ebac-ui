class Produtos {
    visitarUrl() {
    cy.visit('produtos/')
    }

    selecionarProduto() {

    }

    buscarProduto(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()    
    }

    visitarProduto() {

    }
    adicionarCarrinho() {

    }
}

export default new Produtos()
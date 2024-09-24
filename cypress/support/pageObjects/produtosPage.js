class ProdutosPage {
    visitarUrl() {
    cy.visit('produtos')
    }

    selecionarProduto(nomeProduto) {
        cy.get('.products > .row').should("exist")
       // cy.get("[title='Abominable Hoodie']")
       cy.get(".block-inner").first()
       
        .click()
    }

    buscarProduto(nomeProduto) {
        cy.get('.page-title').contains("Produtos")
        cy.get("[type='text']").eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
        

    }
    
    visitarProduto(nomeProduto) {
        cy.visit(`produtos/${nomeProduto}`)
    }
    adicionarCarrinho() {
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    }

    buscarProduto2(nomeProduto) {
        cy.get('.page-title').contains("Produtos")
        cy.get("[type='text']").eq(2).type(nomeProduto)
        cy.get('.button-search').eq(2).click()
    }
}

export default new ProdutosPage()
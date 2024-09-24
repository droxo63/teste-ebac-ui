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
       // cy.visit(`produtos/${nomeProduto}`)
       const urlFormatada = nomeProduto.replace(/ /g, "-")
       cy.visit(`produtos/${urlFormatada}`)
    }
    adicionarCarrinho(tamanho, cor, qtd) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }

    
}

export default new ProdutosPage()
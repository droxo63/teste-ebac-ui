/// <reference types="cypress" />

describe('Funcionalidade de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

it('Deve selecionar um produto da lista', () => {
    
   // cy.get('.block-inner')
    //.first()
    //.last()
    //.eq(3)

    cy.get('.post-2622 > .product-block > .caption > .meta > .infor > .name > a')
    .contains("Ajax Full-Zip Sweatshirt")
    .click()
});
})
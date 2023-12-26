///<reference types="cypress"/>


describe('Deve colocar um produto no carrinho', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block ')
           //.first()
           //.last()
           // .eq(2)
            .contains('Ajax Full-Zip Sweatshirt').click()
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.single_add_to_cart_button').click()
            cy.get('#tab-title-description > a').should('contain' , 'Descrição')


    });

    it.only('Deve adicinar produtos ao carrinho - Usando Comando customizados ', () => {
        cy.addprodutos('Abominable Hoodie', 3)
        
    });

});
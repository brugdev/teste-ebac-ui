///<reference types="cypress"/>

describe('Funcionalidade: login',() => {

    it('Deve fazer login com sucesso', ()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('bruno.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Oláxx, bruno.teste (não é bruno.teste? Sair)')
    })

})
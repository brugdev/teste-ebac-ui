///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')///chamando o arquivo de dados da pasta fixture 

describe('Funcionalidade: login',() => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()   
    });
    it('Deve fazer login com sucesso', ()=> {
        
        cy.get('#username').type('bruno.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, bruno.teste (não é bruno.teste? Sair)')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => { ///arqivo de dados criado na pasta fixture
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
       
        
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false}) /// log: false esconde a senha no teste
            cy.get('.woocommerce-form > .button').click()

        })

    });

    it('Deve exibir uma mensagen de erro qunado inserir um usuario invalido', () => {
        cy.get('#username').type('erro.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
        
    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('bruno.teste@teste.com.br')
        cy.get('#password').type('0000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail bruno.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
        
        
    });

})
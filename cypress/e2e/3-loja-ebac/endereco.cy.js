///<reference types="cypress"/>

beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
    //login
    cy.login(dados.usuario,dados.senha)
    })
});

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        

        
    });
    
});
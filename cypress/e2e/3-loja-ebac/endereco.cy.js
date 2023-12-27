///<reference types="cypress"/>
import enderecoPage from "../../support/page-objects/endereco.page";
const dadosEndereco = require('../../fixtures/endereco.json')

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
    //login
    cy.login(dados.usuario,dados.senha)
    })
});


    it('Deve fazer cadastro de faturamento com sucesso', () => {
       enderecoPage.editarEnderecoFaturamento('Maria','Marina', 'EBAC', 'Brasil', 'Rua Candido mendes', '45', 'Sao Benedito', 'Ceará', '29232-292', '21 49494933', 'marinateste@gmail.com') 

        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome,dadosEndereco[1].sobrenome,dadosEndereco[1].empresa,dadosEndereco[1].pais,dadosEndereco[1].endereco,dadosEndereco[1].numero,dadosEndereco[1].cidade,dadosEndereco[1].estado,dadosEndereco[1].cep,dadosEndereco[1].telefone,dadosEndereco[1].email) 
 
         
     });
    
});
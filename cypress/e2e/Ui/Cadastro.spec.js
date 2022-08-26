/// <reference types="cypress" />
const faker = require('faker-br')

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.cadastrar('Catherine', faker.internet.email(), 'QA1234')
    });


    it('Deve acessar a tela de criar perfil', () =>{
        const perfil = {
            empresa: 'Koiketec', 
            website: 'https://conexaoqa.herokuapp.com/', 
            localizacao: 'Araraquara', 
            conhecimentos: 'Testes Manuais', 
            gitHub: 'https://github.com/catherinefalvo', 
            biografia: 'Arquitetura, Psicologia e QA'
        };
        cy.criarPerfil(perfil)
    })
});
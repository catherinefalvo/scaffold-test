/// <reference types="cypress" />

describe('US001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('catherine.falvo@koiketec.com', 'C@t1012')
     })

     it('validar mensagem de erro quando inserir usuario invalido', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('cattmartins@hotmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click() 
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
     })
 })

/*
    Funcionalidade: Login
    Eu como usuário das Conexao QA
    Quero Fazer o login
    Para editar meu perfil

    Cenário: login com sucesso  
    Arrange - Dado - Pre-requisito -> Dado que eu esteja na tela de login
    Action - Quando - Ação do usuario 0 Quando eu inseri usuario e senha
    Assert - Então - Resultado esperado - Então deve me direcionar para o Dashboard

*/
/// <reference types="cypress" />

describe('US001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve fazer login com sucesso', () => {
         cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('catherine.falvo@koiketec.com')
         cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('C@t1012')
         cy.get('[data-test="login-submit"]').click()
         cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')

     })

     it('Criar Perfil', () => {
        cy.get('[data-test="dashboard-createProfile"]').click()
        cy.visit('https://conexaoqa.herokuapp.com/criar-perfil')
     })
 })
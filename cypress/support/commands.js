// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 60000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, password) => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password)
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
})

Cypress.Commands.add("cadastrar", (nome, email, senha) => {
    cy.visit('cadastrar')
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(senha)
    cy.get('[data-test="register-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', `Bem-vindo ${nome}`)

})

Cypress.Commands.add("criarPerfil", (perfil) => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    //Seleção de status random
    cy.get('.MuiMenu-list li').then(($li) => {
        const items = $li.toArray()
        return Cypress._.sample(items)
    }).click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(perfil.empresa)
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(perfil.website)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(perfil.localizacao)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(perfil.conhecimentos)
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').clear().type(perfil.gitHub)
    cy.get('[data-test="profile-bio"] > .MuiInputBase-root').clear().type(perfil.biografia)
    cy.get('[data-test="profile-submit"]').click()

})
/*
Parametros - Massa de dados
*/
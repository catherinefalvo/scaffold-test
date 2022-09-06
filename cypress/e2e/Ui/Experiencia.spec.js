/// <reference types="cypress" />

const experienciaPage = require('../../support/Experiencia/ExperienciaPage')

describe('Funcionalidade: Adicionar Experiencia',  () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((usuarios) => {
            const usuarioPrincipal = usuarios[1];
            cy.login(usuarioPrincipal.email, usuarioPrincipal.senha)
        })
    });

    it('Adicionar Experiencia', () => {
        experienciaPage.adicionarExperiencia('QA', 'Koiketec', 'Araraquara', '02/09/2022', '05/09/2022', 'Teste')
        cy.wait(3000)
    })

    it('Excluir Experiencia', () => {
        experienciaPage.excluirExperiencia()
        
    })
})
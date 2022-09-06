/// <reference types="cypress" />

const academicoPage = require('../../support/Academico/AcademicoPage')

describe('Funcionalidade: Adicionar Academico',  () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((usuarios) => {
            const usuarioPrincipal = usuarios[1];
            cy.login(usuarioPrincipal.email, usuarioPrincipal.senha)
        })
    });

    it('Adicionar Academico', () => {
        academicoPage.adicionarAcademico('Uniara', '4', 'Psicologia', '02/09/2022', '05/09/2022', 'Teste')
        cy.wait(3000)
    })

    it('Excluir Academico', () => {
        academicoPage.excluirAcademico()
        
    })
    
})
/// <reference types="cypress"/>

describe('Test for the home', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  })

  it('Should render 3 contacts', () => {    
    cy.get('.contato').should('have.length', 3);
  })

  it('Should include contact', () => {    
    cy.get('input[type="text"]').first().type('jose');
    cy.get('input[type="email"]').type('jose@ebac.com.br');
    cy.get('input[type="tel"]').type('11000000000');
    cy.get('.adicionar').click();
    cy.screenshot('test include');
  })

  it('Should change the contact', () => {   
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
    cy.get('input[type="text"]').clear().first().type('alterado');
    cy.get('input[type="email"]').clear().type('alterado@gmail.com');
    cy.get('input[type="tel"]').clear().type('00000000001');
    cy.get('.alterar').click();
    cy.screenshot('test change');
  })

  it('Must remove a contact', () => {
    cy.get(':nth-child(4) > .sc-gueYoa > .delete').click(); 
    cy.screenshot('test remove');
  })
})
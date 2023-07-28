import {registration} from"./Helpers.cy";

/// <reference types ='Cypress' />

it('Delete Account', ()=>{

    registration();

    cy.get('[href="/delete_account"]').click()
    cy.get('#form > .container > .row > .col-sm-9 > .title  > b')
       .should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a')
       .should('be.visible')
    
    })
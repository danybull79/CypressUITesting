import { LoginPage } from"./LoginPage/Login_Page.cy"
import {login} from"./Helpers.cy";

/// <reference types ='Cypress' />

it('Verofy Contact Us and Upload File', function(){

    login()

    cy.get(':nth-child(9) > a').click()
    cy.get('[data-qa="name"]').type('Dani')
    cy.get('[data-qa="email"]').type('dani@abv.bg')
    cy.get('[data-qa="subject"]').type('My Product')
    cy.get('[data-qa="message"]').type('I have problem with my product, can you help me pleas')
    cy.get(':nth-child(6) > .form-control').attachFile('example.json')
    cy.get('[data-qa="submit-button"]').click()
    cy.get('.status')
})
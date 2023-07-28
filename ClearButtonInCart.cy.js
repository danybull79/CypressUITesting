import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

it('Clear Button in Cart', function(){

    navigateToProductsPage()

    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.product-information > h2')
           .should('be.visible')
        cy.get('.product-information > :nth-child(3)')
           .should('be.visible')
        cy.get(':nth-child(5) > span')
           .should('be.visible')
        cy.get('label')
           .should('be.visible')
        cy.get(':nth-child(6) > b')
           .should('be.visible')
        cy.get(':nth-child(7) > b')
           .should('be.visible')
        cy.get(':nth-child(8) > b')
           .should('be.visible')
        cy.get('#quantity').clear()
        cy.get('#quantity').type('4')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get('#product-1 > .cart_quantity > .disabled')
           .should('be.visible')
        cy.get('#product-1 .cart_quantity_delete').click()
        cy.get('.text-center > b')
           .should('be.visible')
        cy.get('[href="/products"] > u')
            .should('be.clickable')  

})
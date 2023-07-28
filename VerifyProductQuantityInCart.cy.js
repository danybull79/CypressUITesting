import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

it('Verify Product quantity in Cart', function(){

    navigateToProductsPage()

        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.product-information > h2')
        cy.get('.product-information > :nth-child(3)')
        cy.get(':nth-child(5) > span')
        cy.get('label')
        cy.get(':nth-child(6) > b')
        cy.get(':nth-child(7) > b')
        cy.get(':nth-child(8) > b')
        cy.get('#quantity').clear()
        cy.get('#quantity').type('4')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get('#product-1 > .cart_quantity > .disabled')

})
import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

it('Subscription', function() {

    navigateToProductsPage()

    cy.get('#susbscribe_email').type('daniel@abv.bg')
    cy.get('#subscribe > .fa').click()
    //how i get succsess masage?
    cy.get('#footer').contains('You have been successfully subscribed!')

})
import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

it('Verify Search Button', function(){

    navigateToProductsPage();

    cy.get('#search_product').type('Madame Top For Women')
    cy.get('#submit_search > .fa').click()
    cy.get('.productinfo > p')

})
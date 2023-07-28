import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

it('Verify Men Categoty Page', function(){

    navigateToProductsPage()

    cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click()
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a')
    cy.get('#Men > .panel-body > ul > :nth-child(2)')
    
})
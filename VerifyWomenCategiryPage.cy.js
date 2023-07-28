import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

it('Verify Women Categoty Page', function(){

    navigateToProductsPage()

    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a')
    cy.get('#Women > .panel-body > ul > :nth-child(2) > a')
    cy.get('.panel-body > ul > :nth-child(3) > a')
})
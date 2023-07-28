import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

const loginPage = new LoginPage()

    it('Verify Products And Product Detail Page', ()=>{

        navigateToProductsPage();
 
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.product-information > h2')
        cy.get('.product-information > :nth-child(3)')
        cy.get(':nth-child(5) > span')
        cy.get('label')
        cy.get(':nth-child(6) > b')
        cy.get(':nth-child(7) > b')
        cy.get(':nth-child(8) > b')
     
     })
 
 
import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

const loginPage = new LoginPage()
 
    it('Add To Cart Button', ()=>{

        navigateToProductsPage();
 
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get(':nth-child(5) > .btn').click()
        cy.get('.modal-title')
     
     })
 

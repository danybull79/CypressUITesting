import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";

/// <reference types ='Cypress' />

const loginPage = new LoginPage()

describe('Verify Product page is a visible ', function () {


   beforeEach(function(){

    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    loginPage.enterUsermane('dani@abv.bg')
    loginPage.enterPassword('1234')
    loginPage.clickLogin()

    cy.get('.nav > :nth-child(10)')
   })

   it('Product Page', ()=>{

    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('.title')
    })

})
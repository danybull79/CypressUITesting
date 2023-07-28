import { LoginPage } from"./LoginPage/Login_Page.cy"

/// <reference types ='Cypress' />

const loginPage = new LoginPage()

beforeEach(function(){

    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

})

describe('Logout', function () {

    it('Login With Valid Credentials', ()=>{

        loginPage.enterUsermane('dani@abv.bg')
        loginPage.enterPassword('1234')
        loginPage.clickLogin()
    
        cy.get('.nav > :nth-child(10)')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2')
           .should('be.visible')

        })
        
    })        
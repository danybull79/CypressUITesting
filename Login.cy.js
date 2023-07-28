import { LoginPage } from"./LoginPage/Login_Page.cy"

/// <reference types ='Cypress' />

const loginPage = new LoginPage()

beforeEach(function(){

    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

})

describe('All Login Tests', function () {

    it('Login With Valid Credentials', ()=>{

        // loginPage.enterUsermane('dani@abv.bg')
        // loginPage.enterPassword('1234')
        loginPage.login('dani@abv.bg','1234')
    
        cy.get('.nav > :nth-child(10)').contains('')
        })

     it('Login With Invalid Email', ()=>{

        loginPage.enterUsermane('daniel@abv.bg')
        loginPage.enterPassword('1234')
        loginPage.clickLogin()
    
        cy.get('.login-form > form > p')
        })    
    
    it('Login With Invalid Password', ()=>{
        
        loginPage.enterUsermane('dani@abv.bg')
        loginPage.enterPassword('12345')
        loginPage.clickLogin()
    
        cy.get('.login-form > form > p')
        })    
})
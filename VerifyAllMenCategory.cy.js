import { LoginPage } from"./LoginPage/Login_Page.cy"
import {menCategory} from"./Helpers.cy";

/// <reference types ='Cypress' />

beforeEach(function(){

    menCategory()

})

describe('All Men Category', function (){

    it('Men Category Tshirts', function(){

        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.title')
        
    })
    
    it('Men Category Jeans', function(){
    
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
        cy.get('.title')

    })
    
})
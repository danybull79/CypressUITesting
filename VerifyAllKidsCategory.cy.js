import { LoginPage } from"./LoginPage/Login_Page.cy"
import {kidsCategory} from"./Helpers.cy";

/// <reference types ='Cypress' />

beforeEach(function(){

    kidsCategory()

})

describe('All Kids Category', function (){

    it('Kids Category Dress', function(){

        cy.get('#Kids > .panel-body > ul > :nth-child(1)').click()
        cy.get('.title')
        
    })
    
    it('Kids Category Tops and Shirts', function(){
    
        cy.get('#Kids > .panel-body > ul > :nth-child(2) > a').click()
        cy.get('.title')

    })
    
})
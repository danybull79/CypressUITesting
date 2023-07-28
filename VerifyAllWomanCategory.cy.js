import { LoginPage } from"./LoginPage/Login_Page.cy"
import {womenCatecory} from"./Helpers.cy";

/// <reference types ='Cypress' />

beforeEach(function(){

    womenCatecory()

})

describe('All Woman Category', function (){

    it('Women Category Dresess', function(){

        cy.get('#Women > .panel-body > ul > :nth-child(1)').click()
        cy.get('.title')
        
    })
    
    it('Women Category Tops', function(){
    
        cy.get('#Women > .panel-body > ul > :nth-child(2)').click()
        cy.get('.title')

    })
    
    it('Women Category Saree', function(){
    
        cy.get('.panel-body > ul > :nth-child(3) > a').click()
        cy.get('.title')
    })

})
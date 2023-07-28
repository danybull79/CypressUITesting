import { faker } from '@faker-js/faker';

/// <reference types ='Cypress' />

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhone = faker.phone.number('+48 91 ### ## ##')

/// <reference types="cypress" />

describe('All Registration Scenarios', function (){

    it('Registration New User', function() {

        //const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com" //random mail generator

        cy.visit('https://www.automationexercise.com/')
    
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type(randomName)
        cy.get('[data-qa="signup-email"]').type(randomEmail)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type('1234')
        cy.get('[data-qa="days"]').select('24')
        cy.get('[data-qa="months"]').select('September')
        cy.get('[data-qa="years"]').select('1979')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('[data-qa="first_name"]').type('Daniel')
        cy.get('[data-qa="last_name"]').type('Dimitrov')
        cy.get('[data-qa="company"]').type('Concord')
        cy.get('[data-qa="address"]').type('3366  Victoria Park Ave')  
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('Ontario')
        cy.get('[data-qa="city"]').type('Toronto')
        cy.get('[data-qa="zipcode"]').type('L4K')
        cy.get('[data-qa="mobile_number"]').type(randomPhone)
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b')
    
    })

    it('Registration With Exsistin Email', function() {

        cy.visit('https://www.automationexercise.com/')
    
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type('Dany')
        cy.get('[data-qa="signup-email"]').type('dani@abv.bg')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p')
    })


})
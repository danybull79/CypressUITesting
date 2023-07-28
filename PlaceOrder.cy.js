import { LoginPage } from"./LoginPage/Login_Page.cy"
import {navigateToProductsPage} from"./Helpers.cy";
import { faker } from '@faker-js/faker';

/// <reference types ='Cypress' />

const randomName = faker.person.fullName();
const randomCardNumber = faker.finance.account()

it('Place Oreder', function() {

    navigateToProductsPage()

        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.product-information > h2')
        cy.get('.product-information > :nth-child(3)')
        cy.get(':nth-child(5) > span')
        cy.get('label')
        cy.get(':nth-child(6) > b')
        cy.get(':nth-child(7) > b')
        cy.get(':nth-child(8) > b')
        cy.get('#quantity').clear()
        cy.get('#quantity').type('4')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get('#product-1 > .cart_quantity > .disabled')
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(2) > .heading')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type(randomName)
        cy.get('[data-qa="card-number"]').type(randomCardNumber)
        cy.get('[data-qa="cvc"]').type('311')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('25')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"] > b')
    
})
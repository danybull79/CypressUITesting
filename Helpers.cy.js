import { LoginPage } from"./LoginPage/Login_Page.cy"
import { faker } from '@faker-js/faker';

/// <reference types ='Cypress' />

export class Helpers {
    
    static generateRandomString(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  }

  export function login() {

    const loginPage = new LoginPage()

    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    loginPage.enterUsermane('dani@abv.bg');
    loginPage.enterPassword('1234');
    loginPage.clickLogin();
    cy.get('.nav > :nth-child(10)');
    
  }

  export function navigateToProductsPage() {

    const loginPage = new LoginPage()

    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    loginPage.enterUsermane('dani@abv.bg');
    loginPage.enterPassword('1234');
    loginPage.clickLogin();
    cy.get('.nav > :nth-child(10)');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('.title')
  }

  export function registration() {

    const randomName = faker.person.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    const randomPhone = faker.phone.number('+48 91 ### ## ##')

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

  }

  export function womenCatecory() {

    const loginPage = new LoginPage()

    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    loginPage.enterUsermane('dani@abv.bg');
    loginPage.enterPassword('1234');
    loginPage.clickLogin();
    cy.get('.nav > :nth-child(10)');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('.title')
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a')
    cy.get('#Women > .panel-body > ul > :nth-child(2) > a')
    cy.get('.panel-body > ul > :nth-child(3) > a')

  }

  export function menCategory() {

    const loginPage = new LoginPage()

    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    loginPage.enterUsermane('dani@abv.bg');
    loginPage.enterPassword('1234');
    loginPage.clickLogin();
    cy.get('.nav > :nth-child(10)');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('.title')
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click()
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a')
    cy.get('#Men > .panel-body > ul > :nth-child(2)')

  }

  export function kidsCategory() {

    const loginPage = new LoginPage()

    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    loginPage.enterUsermane('dani@abv.bg');
    loginPage.enterPassword('1234');
    loginPage.clickLogin();
    cy.get('.nav > :nth-child(10)');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('.title')
    cy.get(':nth-child(3) > .panel-heading > .panel-title > a > .badge > .fa').click()
    cy.get('#Kids > .panel-body > ul > :nth-child(1) > a')
    cy.get('#Kids > .panel-body > ul > :nth-child(2) > a')

  }
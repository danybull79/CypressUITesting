export class LoginPage{

    username_texbox = '[data-qa="login-email"]'
    password_texbox = '[data-qa="login-password"]'
    login_button = '[data-qa="login-button"]'
    

    enterUsermane(username){
        cy.get(this.username_texbox).type(username)    
    }

    enterPassword(password){
        cy.get(this.password_texbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button    ).click()
    }

    login(username, password){

        cy.get(this.username_texbox).type(username)
        cy.get(this.password_texbox).type(password)
        cy.get(this.login_button).click()
    }
}


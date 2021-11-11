import { username, password, userFullName } from '../fixtures';

class LoginPage {

    get emailField () {return $('#email')}
    get passwordField () {return $('#password')}
    get loginButton () {return $('.btn-primary')}
    get uzivatelJmeno () {return $('.navbar-right').$('[data-toggle="dropdown"]')}
    get logOutButton () {return $('#logout-link')}
    

    open () {
        
        return browser.url('/prihlaseni')
    }

    isEnabled () {
        return this.emailField.isEnabled() && this.passwordField.isEnabled() 
    }

    login (username, password) {
        this.emailField.setValue(username)
        this.passwordField.setValue(password)
        this.loginButton.click()
    }

    logOut () {
        return this.logOutButton.click()
    }


}

module.exports = new LoginPage();
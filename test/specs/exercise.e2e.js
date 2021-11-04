import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni');

        const emailField = $('#email');
        console.log( 'Pole email je editovatelné: ' + emailField.isEnabled());
        console.log( 'Pole email je viditelné: ' + emailField.isDisplayed());

        const passwordField = $('#password');
        console.log( 'Pole heslo je editovatelné: ' + passwordField.isEnabled());
        console.log( 'Pole heslo je viditelné: ' + passwordField.isDisplayed());

        const loginButton = $('.btn-primary');
        console.log('Tlačítko má text: ' + loginButton.getText());

        const forgetButton = $('.btn-link');
        console.log('Tlačítko má text: ' + forgetButton.getAttribute('href'));

        
        emailField.setValue('Mat_Team_admin@gmail.com');
        passwordField.setValue('Mat1234');
        loginButton.click();

        

        
        



        //const windowSize = browser.getWindowSize();
        //console.log(windowSize);

        //browser.saveScreenshot('Screenshot/login_pokus2.png');

        browser.pause(5000);
        
    });
    
});
import {username, password} from '../fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni');   //otevře stránku na přihlášení

        const windowSize = browser.getWidowSize();
        console.log(windowSize);   //vypíše velikost okna

        //udělá screenshot stránky a uloží ho do složky Screenshot a pojmenuje ho login_page.png
        browser.saveScreenshot('Screenshot/login_page.png'); 
        //čeká na stránce 5 sekund, je dobré pro hledání bugu 
        browser.pause(5000);
        
    });
    
});
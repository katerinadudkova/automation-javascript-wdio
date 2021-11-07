import { username, password } from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {

        browser.reloadSession();

        browser.url('/prihlaseni');   //otevře stránku na přihlášení

        
        const emailField = $('#email')
        console.log('Pole email je editovatelné: ' + emailField.isEnabled())
        console.log('Pole email je viditelné: ' + emailField.isDisplayed())

        const passwordField = $('#password')
        console.log('Pole heslo je editovatelné: ' + passwordField.isEnabled())
        console.log('Pole heslo je viditelné: ' + passwordField.isDisplayed())

        const loginButton = $('.btn-primary')
        console.log('Text tlačítka je: ' + loginButton.getText())

        const forgetButton = $('.btn-link')
        console.log('Hodnota atributu href je: ' + forgetButton.getAttribute('href'))

        emailField.setValue('Lenka123@gmail.com')
        passwordField.setValue('Lenka123')
        loginButton.click()

        $('=Přihlášky').click();

        // const radkyTabulky = $('tbody').$$('tr');
        // for (let i = 0; i < radkyTabulky.length; i++) {
        //     const text = radkyTabulky[i].getText();
        //     console.log(text);
        // }

        const rows = $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + rows.length + ' rows in the table');
        rows.forEach(row => {
            console.log(row.getText());
        })

        $('input[type="search"]').setValue('Čarkov');
        const filteredRows = $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + filteredRows.length + ' filtered rows in the table');
        rows.forEach(row => {
            console.log(row.getText());
        });


        

    });

});
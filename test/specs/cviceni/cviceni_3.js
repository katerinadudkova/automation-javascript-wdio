import { username, password } from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {

        browser.reloadSession();

        browser.url('/prihlaseni');   //otevře stránku na přihlášení

        const emailField = $('#email')
        expect(emailField).toBeDisplayed()

        const passwordField = $('#password')
        expect(passwordField).toBeDisplayed()

        const loginButton = $('.btn-primary')
        expect(loginButton).toHaveText('Přihlášit')


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
        expect(rows).toBeElementsArrayOfSize(3);
        rows.forEach(row => {
            const cols = row.$$('td');
            expect(cols[0].getText()).toMatch(/[a-zA-Z]{3,}/);
            expect(cols[1].getText()).toMatch(/(Python|JavaScript|PUB_TEAM_Testovaní_test)/);
            expect(cols[2].getText()).toMatch(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. - \d{2}.\d{2}.\d{4})/);
            expect(cols[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
        });

    });

});
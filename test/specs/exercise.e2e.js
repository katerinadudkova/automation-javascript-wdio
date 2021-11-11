import { username, password, userFullName } from '../specs/fixtures'
import LoginPage from './pages/my.page'

describe('login / logout', () => {

    beforeEach(() => {
        browser.reloadSession()
        LoginPage.open()
    });

    it('přihlašovací stránka', () => {
        expect(LoginPage.isEnabled()).toEqual(true);
        expect(LoginPage.loginButton.getText()).toEqual('Přihlášit');
    });

    it('přihlášení uživatele', () => {

        LoginPage.login(username, password)
        expect(LoginPage.uzivatelJmeno.getText()).toEqual(userFullName)
    });

    it('odhlášení uzivatele', () => {
        LoginPage.login(username, password)
        expect(LoginPage.uzivatelJmeno.getText()).toEqual(userFullName)
        LoginPage.uzivatelJmeno.click()
        LoginPage.logOut()

    })
});

// describe('Přihlášky na kurzy', () => {
//     beforeEach(() => {
//         browser.reloadSession();
//         browser.url('/prihlaseni');
//         $('#email').setValue('Lenka123@gmail.com');
//         $('#password').setValue('Lenka123');
//         $('.btn-primary').click();
//         $('=Přihlášky').click();
//     });
//     it('ověření správných přihlášek', () => {
//         const rows = $('.dataTable').$('tbody').$$('tr')
//         //expect(rows).toBeElementsArrayOfSize(30);
//         expect(rows).toBeElementsArrayOfSize(3);
//         rows.forEach(row => {
//             const cols = row.$$('td');
//             expect(cols[0].getText()).toMatch(/[a-zA-Z]{3,}/);
//             expect(cols[1].getText()).toMatch(/(Python|JavaScript|PUB_TEAM_Testovaní_test)/);
//             expect(cols[2].getText()).toMatch(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. - \d{2}.\d{2}.\d{4})/);
//             expect(cols[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
//             // expect(cols[0].getText()).toMatch(/[a-zA-Z]{3,}/);
//             // expect(cols[1].getText()).toMatch(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. -\d{ 2}.\d{ 2}.\d{ 4}) /);
//             // expect(cols[2].getText()).toMatch(/(Bankovní převod|FKSP|Hotově|Složenka) /);
//             // expect(cols[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
//         });

//     });


// });
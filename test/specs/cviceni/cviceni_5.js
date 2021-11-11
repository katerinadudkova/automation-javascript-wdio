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
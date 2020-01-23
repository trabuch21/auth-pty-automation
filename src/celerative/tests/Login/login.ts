import { loginPage } from '../../page-objects/login-page';
import { browser } from 'protractor';


describe('Login test cases', () =>{
	it('Succesfully logged into', async () =>{
		
		await browser.sleep(5000);
		
		await browser.switchTo().frame(0);
		
		await loginPage.login("lucas", "trabuchi") ;
		
	})
})
import { loginPage } from '../../page-objects/login-page';
import { browser } from 'protractor';


describe('Suite 1', () =>{
	it('Test 1', async () =>{
		await browser.sleep(5000);
		
		await browser.switchTo().frame(0);
		
		await loginPage.inputText(loginPage.username, "lucas");
		
		await browser.sleep(2000);
	})
})
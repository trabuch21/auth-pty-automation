import { browser, protractor } from 'protractor';
import { contactPage } from '../page-objects/contact-page';
import { homePage } from '../page-objects/home-page';
const EC = protractor.ExpectedConditions;
describe('Psh site validations - Visual Test Demo', () => {
	it('Image-comparison with element and screen', async () => {
		/***
      Check an element
      some options https://github.com/wswebcreation/webdriver-image-comparison/blob/master/docs/OPTIONS.md#checkelement
    ***/
		await browser.wait(EC.visibilityOf(homePage.topbar), 5000, 'Topbar is not visible in the page');
		expect(
			await browser.imageComparison.checkElement(homePage.topbar, 'topbar', {
				/* some options */
			}),
		).toEqual(0);

		await homePage.click(homePage.contactUs);

		// Check a screen
		await browser.wait(EC.visibilityOf(contactPage.nameField), 5000, 'Name field is not visible in the page');
		expect(
			await browser.imageComparison.checkScreen('contactUsFillExample', {
				/* some options*/
			}),
		).toEqual(0);

		/***
      All compare options can also be used for checkElement,checkScreen and checkFullPageScreens:
      https://github.com/wswebcreation/webdriver-image-comparison/blob/master/docs/OPTIONS.md#compare-options
    ***/
	});
});

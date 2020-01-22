import assert from 'assert';
import { contactPage } from '../page-objects/contact-page';
import { homePage } from '../page-objects/home-page';

describe('Psh site validations', () => {
	it('Logo should be displayed', async () => {
		const isLogoDisplayed = await homePage.isDisplayed(homePage.logo);
		const isLogoPresent = await homePage.isPresent(homePage.logo);
		assert.equal(
			isLogoDisplayed && isLogoPresent,
			true,
			'Presence Assertion ERROR:\n\tPSh logo is neither present nor displayed',
		);
	});

	it('Play video button should be displayed', async () => {
		const isPlayVideoButtonDisplayed = await homePage.isDisplayed(homePage.playVideoButton);
		const isPlayVideoButtonPresent = await homePage.isPresent(homePage.playVideoButton);
		assert.equal(
			isPlayVideoButtonDisplayed && isPlayVideoButtonPresent,
			true,
			'Presence Assertion ERROR:\n\tPlay video button is neither present nor displayed',
		);
	});

	it('Site title should match', async () => {
		const title = await homePage.getSiteTitle();
		await expect(title).toEqual('Providing Digital Transformation');
	});

	it('Contact Us fill', async () => {
		await homePage.click(homePage.contactUs);
		await contactPage.fillForm('Testing', 'TestingPSH@gmail.com', 'This is an automated Test', 'PSH');
	});
});

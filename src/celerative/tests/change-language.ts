import { homePage } from '../page-objects/home-page';

describe('Psh site validations', () => {
	it('Site language should change', async () => {
		let homeTabEnglishText = await homePage.getText(homePage.homeTab);
		let expectedText = 'HOME';
		await homePage.assertText(homeTabEnglishText, expectedText);

		await homePage.switchToSpanishLanguage();

		const homeTabSpanishText = await homePage.getText(homePage.homeTab);
		expectedText = 'INICIO';
		homePage.assertText(homeTabSpanishText, expectedText);

		await homePage.switchToEnglishLanguage();

		homeTabEnglishText = await homePage.getText(homePage.homeTab);
		expectedText = 'HOME';
		homePage.assertText(homeTabEnglishText, expectedText);
	});
});

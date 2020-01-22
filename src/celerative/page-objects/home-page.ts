/* eslint-disable-next-line */
import { by, element, ElementFinder } from 'protractor';
import { BasePage } from './common/base-page';

class HomePage extends BasePage {
	readonly logo: ElementFinder;
	readonly dropDownLanguage: ElementFinder;
	readonly spanishOption: ElementFinder;
	readonly englishOption: ElementFinder;
	readonly contactUs: ElementFinder;
	readonly homeTab: ElementFinder;
	readonly playVideoButton: ElementFinder;
	readonly topbar: ElementFinder;

	constructor() {
		super();
		this.logo = element(by.css('a [class="logo"]'));
		this.dropDownLanguage = element(by.css('a[class="language--link"]'));
		const languageDropdownSelector = 'ul[class="language--tooltip"]';
		this.spanishOption = element(by.css(`${languageDropdownSelector} a[data-language='es']`));
		this.englishOption = element(by.css(`${languageDropdownSelector} a[data-language='en']`));
		this.contactUs = element(by.css('a[href*="contact"]'));
		this.homeTab = element(
			by.css('div[class="navbar-left-1"] ul[class$="navbar-left"] li:first-child a[href^="/e"]'),
		);
		this.playVideoButton = element(by.id('play-video'));
		this.topbar = element(by.css('div[class="navbar-collapse collapse scrolly"]'));
	}

	switchToSpanishLanguage = async () => {
		await homePage.click(this.dropDownLanguage);
		await homePage.click(this.spanishOption);
	};

	switchToEnglishLanguage = async () => {
		await homePage.click(this.dropDownLanguage);
		await homePage.click(this.englishOption);
	};
}
export const homePage = new HomePage();

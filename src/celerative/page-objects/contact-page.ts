/* eslint-disable-next-line */
import { element, by, ElementFinder } from 'protractor';
import { BasePage } from './common/base-page';

class ContactPage extends BasePage {
	readonly nameField: ElementFinder;
	readonly emailField: ElementFinder;
	readonly companyField: ElementFinder;
	readonly messageField: ElementFinder;

	constructor() {
		super();
		this.nameField = element(by.css('input[name="name"]'));
		this.emailField = element(by.css('input[name="email"]'));
		this.companyField = element(by.css('input[name="company"]'));
		this.messageField = element(by.css('textarea[name="description"]'));
	}

	fillForm = async (name: string, email: string, messages: string, company?: string) => {
		await this.inputText(this.nameField, name);
		await this.inputText(this.emailField, email);
		await this.inputText(this.companyField, company);
		await this.inputText(this.messageField, messages);
	};
}
export const contactPage = new ContactPage();

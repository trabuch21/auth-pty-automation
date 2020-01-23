/* eslint-disable-next-line */
import { element, by, ElementFinder } from 'protractor';
import { BasePage } from './common/base-page';

class LoginPage extends BasePage {
	readonly username: ElementFinder;
	readonly password: ElementFinder;
	readonly loginBtn: ElementFinder;
	readonly iframe:ElementFinder;
	

	constructor() {
		super();
		this.username = element(by.css('input[name="username"]'));
		this.password = element(by.css('input[name="password"]'));
		this.loginBtn = element(by.css('button[class*="login"]'));
		this.iframe = element(by.css('iframe[frameborder="0"]'));
	}

	fillForm = async (username: string, password: string) => {
		await this.inputText(this.username, username);
		await this.inputText(this.password, password);
	};
	
	login = async (username: string, password: string) =>{
		await this.inputText(this.username, username);
		await this.inputText(this.password, password);
		await this.click(this.loginBtn);
	}
}
export const loginPage = new LoginPage();

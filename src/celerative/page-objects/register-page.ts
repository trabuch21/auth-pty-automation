import { BasePage } from "./common/base-page";
import { ElementFinder, element, by } from "protractor";

class RegisterPage extends BasePage{
	readonly firstName:	 ElementFinder;
	readonly lastName:	 ElementFinder;
	readonly userName:	 ElementFinder;
	readonly email: 	 ElementFinder;
	readonly password: 	 ElementFinder;
	readonly confPassword: ElementFinder;
	readonly registerBtn: ElementFinder;
	readonly backToLoginBtn: ElementFinder;
	
	constructor(){
		super();
		this.firstName = element(by.css("input[id='firstName']"));
		this.lastName = element(by.css("input[name='lastName']"));
		this.userName = element(by.css("input[name='username']"));
		this.email	= element(by.css("input[id='email']"));
		this.password = element(by.css("input[id='password']"));
		this.confPassword = element(by.css("input[id='password-confirm']"));
		this.registerBtn = element(by.css("input[value='Register']"));
		this.backToLoginBtn = element(by.xpath("//a[contains(text(),'« Back to Login')]"));
	}
	
	
	fillForm = async (firstName: string, lastName: string, email: string, username: string, 
		password: string, confPassword:string) => {
			await this.inputText(this.firstName, firstName);
			await this.inputText(this.lastName, lastName);
			await this.inputText(this.email, email);
			await this.inputText(this.userName, username);
			await this.inputText(this.password, password);
			await this.inputText(this.confPassword, confPassword);
	};
}
export const registerPage = new RegisterPage();
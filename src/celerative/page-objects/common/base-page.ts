import assert from 'assert';
/* eslint-disable-next-line */
import { browser, ElementFinder } from 'protractor';
import { customLogger } from '../../support/custom-logger';
import { Helpers } from '../../support/helper';
import { LocatorManager } from '../../support/locator-manager';

export abstract class BasePage {
	click = async (element: ElementFinder): Promise<void> => {
		await Helpers.isClickableOrVisible(element);
		await Helpers.highlightElement(element);
		await element.click();

		const locator = await LocatorManager.showLocator(element);
		customLogger.logger.info(`The element: ${locator} was clicked`);
	};

	hoverOver = async (element: ElementFinder): Promise<void> => {
		await Helpers.highlightElement(element);
		await browser
			.actions()
			.mouseMove(element)
			.perform();

		const locator = await LocatorManager.showLocator(element);
		customLogger.logger.info(`This element was hovered: ${locator}`);
	};

	inputText = async (element: ElementFinder, text: string): Promise<void> => {
		await Helpers.isClickableOrVisible(element);
		await Helpers.highlightElement(element);
		await element.clear();
		await element.sendKeys(text);

		const locator = await LocatorManager.showLocator(element);
		customLogger.logger.info(`This text: '${text}' was sended to ${locator}`);
	};

	getText = async (element: ElementFinder): Promise<string> => {
		await Helpers.highlightElement(element);
		const tagName = await element.getTagName();
		let text: string;
		const locator = await LocatorManager.showLocator(element);
		if (tagName === 'input') {
			text = await element.getAttribute('value');
			customLogger.logger.info(`This text: '${text}' was obtained from locator: ${locator}`);
		} else {
			text = await element.getText();
			customLogger.logger.info(`This text: '${text}' was obtained from locator: ${locator}`);
		}
		return text;
	};

	assertText = async (actualText: string, expectedText: string): Promise<void> => {
		const errorMessage = `Text Assertion ERROR\n\tActual text: ${actualText}\n\tExpected text: ${expectedText}`;
		assert.equal(actualText, expectedText, errorMessage);
	};

	isDisplayed = async (element: ElementFinder): Promise<boolean> => {
		const locator = await LocatorManager.showLocator(element);
		const isElementDisplayed = await Helpers.isElementInTheView(element).catch(e => {
			if (e) {
				return false;
			}
		});

		if (isElementDisplayed === false) {
			customLogger.logger.info(`The element: ${locator} is not displayed`);
		} else {
			customLogger.logger.info(`The element: ${locator} is displayed`);
			await Helpers.highlightElement(element);
			return element.isDisplayed();
		}
	};

	isPresent = async (element: ElementFinder): Promise<boolean> => {
		const locator = await LocatorManager.showLocator(element);
		const isElementPresent = await Helpers.isElementInDOM(element).catch(e => {
			if (e) {
				return false;
			}
		});

		if (isElementPresent === false) {
			customLogger.logger.info(`The element: ${locator} is not present`);
		} else {
			customLogger.logger.info(`The element: ${locator} is present`);
			await Helpers.highlightElement(element);
			return element.isPresent();
		}
	};

	refreshPage = async (): Promise<void> => {
		await browser.refresh();
	};

	getSiteTitle = async (): Promise<string> => browser.getTitle();

	goToUrl = async (url: string): Promise<void> => browser.get(url);

	getCurrentUrl = async (): Promise<string> => browser.getCurrentUrl();
}

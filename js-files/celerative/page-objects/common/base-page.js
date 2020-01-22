"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const protractor_1 = require("protractor");
const custom_logger_1 = require("../../support/custom-logger");
const helper_1 = require("../../support/helper");
const locator_manager_1 = require("../../support/locator-manager");
class BasePage {
    constructor() {
        this.click = (element) => __awaiter(this, void 0, void 0, function* () {
            yield helper_1.Helpers.isClickableOrVisible(element);
            yield helper_1.Helpers.highlightElement(element);
            yield element.click();
            const locator = yield locator_manager_1.LocatorManager.showLocator(element);
            custom_logger_1.customLogger.logger.info(`The element: ${locator} was clicked`);
        });
        this.hoverOver = (element) => __awaiter(this, void 0, void 0, function* () {
            yield helper_1.Helpers.highlightElement(element);
            yield protractor_1.browser
                .actions()
                .mouseMove(element)
                .perform();
            const locator = yield locator_manager_1.LocatorManager.showLocator(element);
            custom_logger_1.customLogger.logger.info(`This element was hovered: ${locator}`);
        });
        this.inputText = (element, text) => __awaiter(this, void 0, void 0, function* () {
            yield helper_1.Helpers.isClickableOrVisible(element);
            yield helper_1.Helpers.highlightElement(element);
            yield element.clear();
            yield element.sendKeys(text);
            const locator = yield locator_manager_1.LocatorManager.showLocator(element);
            custom_logger_1.customLogger.logger.info(`This text: '${text}' was sended to ${locator}`);
        });
        this.getText = (element) => __awaiter(this, void 0, void 0, function* () {
            yield helper_1.Helpers.highlightElement(element);
            const tagName = yield element.getTagName();
            let text;
            const locator = yield locator_manager_1.LocatorManager.showLocator(element);
            if (tagName === 'input') {
                text = yield element.getAttribute('value');
                custom_logger_1.customLogger.logger.info(`This text: '${text}' was obtained from locator: ${locator}`);
            }
            else {
                text = yield element.getText();
                custom_logger_1.customLogger.logger.info(`This text: '${text}' was obtained from locator: ${locator}`);
            }
            return text;
        });
        this.assertText = (actualText, expectedText) => __awaiter(this, void 0, void 0, function* () {
            const errorMessage = `Text Assertion ERROR\n\tActual text: ${actualText}\n\tExpected text: ${expectedText}`;
            assert_1.default.equal(actualText, expectedText, errorMessage);
        });
        this.isDisplayed = (element) => __awaiter(this, void 0, void 0, function* () {
            const locator = yield locator_manager_1.LocatorManager.showLocator(element);
            const isElementDisplayed = yield helper_1.Helpers.isElementInTheView(element).catch(e => {
                if (e) {
                    return false;
                }
            });
            if (isElementDisplayed === false) {
                custom_logger_1.customLogger.logger.info(`The element: ${locator} is not displayed`);
            }
            else {
                custom_logger_1.customLogger.logger.info(`The element: ${locator} is displayed`);
                yield helper_1.Helpers.highlightElement(element);
                return element.isDisplayed();
            }
        });
        this.isPresent = (element) => __awaiter(this, void 0, void 0, function* () {
            const locator = yield locator_manager_1.LocatorManager.showLocator(element);
            const isElementPresent = yield helper_1.Helpers.isElementInDOM(element).catch(e => {
                if (e) {
                    return false;
                }
            });
            if (isElementPresent === false) {
                custom_logger_1.customLogger.logger.info(`The element: ${locator} is not present`);
            }
            else {
                custom_logger_1.customLogger.logger.info(`The element: ${locator} is present`);
                yield helper_1.Helpers.highlightElement(element);
                return element.isPresent();
            }
        });
        this.refreshPage = () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.refresh();
        });
        this.getSiteTitle = () => __awaiter(this, void 0, void 0, function* () { return protractor_1.browser.getTitle(); });
        this.goToUrl = (url) => __awaiter(this, void 0, void 0, function* () { return protractor_1.browser.get(url); });
        this.getCurrentUrl = () => __awaiter(this, void 0, void 0, function* () { return protractor_1.browser.getCurrentUrl(); });
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NlbGVyYXRpdmUvcGFnZS1vYmplY3RzL2NvbW1vbi9iYXNlLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsMkNBQW9EO0FBQ3BELCtEQUEyRDtBQUMzRCxpREFBK0M7QUFDL0MsbUVBQStEO0FBRS9ELE1BQXNCLFFBQVE7SUFBOUI7UUFDQyxVQUFLLEdBQUcsQ0FBTyxPQUFzQixFQUFpQixFQUFFO1lBQ3ZELE1BQU0sZ0JBQU8sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxNQUFNLGdCQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFdEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQ0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCw0QkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLE9BQU8sY0FBYyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBLENBQUM7UUFFRixjQUFTLEdBQUcsQ0FBTyxPQUFzQixFQUFpQixFQUFFO1lBQzNELE1BQU0sZ0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxNQUFNLG9CQUFPO2lCQUNYLE9BQU8sRUFBRTtpQkFDVCxTQUFTLENBQUMsT0FBTyxDQUFDO2lCQUNsQixPQUFPLEVBQUUsQ0FBQztZQUVaLE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0NBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUQsNEJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQSxDQUFDO1FBRUYsY0FBUyxHQUFHLENBQU8s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
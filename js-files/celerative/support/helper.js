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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const locator_manager_1 = require("./locator-manager");
class Helpers {
}
exports.Helpers = Helpers;
Helpers.globalElementValues = {
    waitingTime: 15000,
    errorMessage: (locator) => `No element found using locator: ${locator}\n`,
};
Helpers.isClickableOrVisible = (element) => __awaiter(void 0, void 0, void 0, function* () {
    const locator = yield locator_manager_1.LocatorManager.showLocator(element);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(element) || protractor_1.ExpectedConditions.visibilityOf(element), Helpers.globalElementValues.waitingTime, Helpers.globalElementValues.errorMessage(locator));
});
Helpers.isElementInTheView = (element) => __awaiter(void 0, void 0, void 0, function* () {
    const locator = yield locator_manager_1.LocatorManager.showLocator(element);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(element), Helpers.globalElementValues.waitingTime, Helpers.globalElementValues.errorMessage(locator));
});
Helpers.isElementInDOM = (element) => __awaiter(void 0, void 0, void 0, function* () {
    const locator = yield locator_manager_1.LocatorManager.showLocator(element);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(element), Helpers.globalElementValues.waitingTime, Helpers.globalElementValues.errorMessage(locator));
});
Helpers.highlightElement = (element) => __awaiter(void 0, void 0, void 0, function* () {
    const locator = yield locator_manager_1.LocatorManager.showLocator(element);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(element), Helpers.globalElementValues.waitingTime, Helpers.globalElementValues.errorMessage(locator));
    const setStyle = (element, style) => {
        const previous = element.getAttribute('style');
        element.setAttribute('style', style);
        setTimeout(() => {
            element.setAttribute('style', previous);
        }, 200);
    };
    yield protractor_1.browser.executeScript(setStyle, element.getWebElement(), 'color: red; background-color: yellow;');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NlbGVyYXRpdmUvc3VwcG9ydC9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBOEU7QUFDOUUsdURBQW1EO0FBRW5ELE1BQXNCLE9BQU87O0FBQTdCLDBCQXVFQztBQWhFTywyQkFBbUIsR0FBRztJQUM1QixXQUFXLEVBQUUsS0FBSztJQUNsQixZQUFZLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLG1DQUFtQyxPQUFPLElBQUk7Q0FDakYsQ0FBQztBQU1LLDRCQUFvQixHQUFHLENBQU8sT0FBc0IsRUFBaUIsRUFBRTtJQUM3RSxNQUFNLE9BQU8sR0FBRyxNQUFNLGdDQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQ2pCLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksK0JBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQzVELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQ3ZDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQ2pELENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQU1LLDBCQUFrQixHQUFHLENBQU8sT0FBc0IsRUFBaUIsRUFBRTtJQUMzRSxNQUFNLE9BQU8sR0FBRyxNQUFNLGdDQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQ2pCLCtCQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUN4QixPQUFPLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUN2QyxPQUFPLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNqRCxDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFNSyxzQkFBYyxHQUFHLENBQU8sT0FBc0IsRUFBaUIsRUFBRTtJQUN2RSxNQUFNLE9BQU8sR0FBRyxNQUFNLGdDQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQ2pCLCtCQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUN0QixPQUFPLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUN2QyxPQUFPLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNqRCxDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFNSyx3QkFBZ0IsR0FBRyxDQUFPLE9BQXNCLEVBQWlCLEVBQUU7SUFDekUsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQ0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUNqQiwrQkFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFDdEIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFDdkMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDakQsQ0FBQztJQUNGLE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBc0IsRUFBRSxLQUFhLEVBQVEsRUFBRTtRQUNoRSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUM7SUFDRixNQUFNLG9CQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztBQUN6RyxDQUFDLENBQUEsQ0FBQyJ9
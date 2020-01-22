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
const contact_page_1 = require("../page-objects/contact-page");
const home_page_1 = require("../page-objects/home-page");
const EC = protractor_1.protractor.ExpectedConditions;
describe('Psh site validations - Visual Test Demo', () => {
    it('Image-comparison with element and screen', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.visibilityOf(home_page_1.homePage.topbar), 5000, 'Topbar is not visible in the page');
        expect(yield protractor_1.browser.imageComparison.checkElement(home_page_1.homePage.topbar, 'topbar', {})).toEqual(0);
        yield home_page_1.homePage.click(home_page_1.homePage.contactUs);
        yield protractor_1.browser.wait(EC.visibilityOf(contact_page_1.contactPage.nameField), 5000, 'Name field is not visible in the page');
        expect(yield protractor_1.browser.imageComparison.checkScreen('contactUsFillExample', {})).toEqual(0);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLWNvbXBhcmlzb24tZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jZWxlcmF0aXZlL3Rlc3RzL3NjcmVlbi1jb21wYXJpc29uLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUQ7QUFDakQsK0RBQTJEO0FBQzNELHlEQUFxRDtBQUNyRCxNQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQ3pDLFFBQVEsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLEVBQUU7SUFDeEQsRUFBRSxDQUFDLDBDQUEwQyxFQUFFLEdBQVMsRUFBRTtRQUt6RCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsb0JBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUNoRyxNQUFNLENBQ0wsTUFBTSxvQkFBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsb0JBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBRXJFLENBQUMsQ0FDRixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUViLE1BQU0sb0JBQVEsQ0FBQyxLQUFLLENBQUMsb0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUd6QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsMEJBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztRQUMxRyxNQUFNLENBQ0wsTUFBTSxvQkFBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsRUFFakUsQ0FBQyxDQUNGLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTWQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=
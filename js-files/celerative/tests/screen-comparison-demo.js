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
const home_page_1 = require("../page-objects/home-page");
const EC = protractor_1.protractor.ExpectedConditions;
describe('Psh site validations - Visual Test Demo', () => {
    it('Image-comparison with element and screen', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(EC.visibilityOf(home_page_1.homePage.topbar), 5000, 'Topbar is not visible in the page');
        expect(yield protractor_1.browser.imageComparison.checkElement(home_page_1.homePage.topbar, 'topbar', {})).toEqual(0);
        yield home_page_1.homePage.click(home_page_1.homePage.contactUs);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLWNvbXBhcmlzb24tZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jZWxlcmF0aXZlL3Rlc3RzL3NjcmVlbi1jb21wYXJpc29uLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUQ7QUFDakQseURBQXFEO0FBQ3JELE1BQU0sRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDekMsUUFBUSxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsRUFBRTtJQUN4RCxFQUFFLENBQUMsMENBQTBDLEVBQUUsR0FBUyxFQUFFO1FBS3pELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ2hHLE1BQU0sQ0FDTCxNQUFNLG9CQUFPLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxvQkFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFFckUsQ0FBQyxDQUNGLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWIsTUFBTSxvQkFBUSxDQUFDLEtBQUssQ0FBQyxvQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBTzFDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9
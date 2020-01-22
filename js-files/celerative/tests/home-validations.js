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
const contact_page_1 = require("../page-objects/contact-page");
const home_page_1 = require("../page-objects/home-page");
describe('Psh site validations', () => {
    it('Logo should be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        const isLogoDisplayed = yield home_page_1.homePage.isDisplayed(home_page_1.homePage.logo);
        const isLogoPresent = yield home_page_1.homePage.isPresent(home_page_1.homePage.logo);
        assert_1.default.equal(isLogoDisplayed && isLogoPresent, true, 'Presence Assertion ERROR:\n\tPSh logo is neither present nor displayed');
    }));
    it('Play video button should be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        const isPlayVideoButtonDisplayed = yield home_page_1.homePage.isDisplayed(home_page_1.homePage.playVideoButton);
        const isPlayVideoButtonPresent = yield home_page_1.homePage.isPresent(home_page_1.homePage.playVideoButton);
        assert_1.default.equal(isPlayVideoButtonDisplayed && isPlayVideoButtonPresent, true, 'Presence Assertion ERROR:\n\tPlay video button is neither present nor displayed');
    }));
    it('Site title should match', () => __awaiter(void 0, void 0, void 0, function* () {
        const title = yield home_page_1.homePage.getSiteTitle();
        yield expect(title).toEqual('Providing Digital Transformation');
    }));
    it('Contact Us fill', () => __awaiter(void 0, void 0, void 0, function* () {
        yield home_page_1.homePage.click(home_page_1.homePage.contactUs);
        yield contact_page_1.contactPage.fillForm('Testing', 'TestingPSH@gmail.com', 'This is an automated Test', 'PSH');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12YWxpZGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jZWxlcmF0aXZlL3Rlc3RzL2hvbWUtdmFsaWRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsK0RBQTJEO0FBQzNELHlEQUFxRDtBQUVyRCxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7UUFDekMsTUFBTSxlQUFlLEdBQUcsTUFBTSxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sYUFBYSxHQUFHLE1BQU0sb0JBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxnQkFBTSxDQUFDLEtBQUssQ0FDWCxlQUFlLElBQUksYUFBYSxFQUNoQyxJQUFJLEVBQ0osd0VBQXdFLENBQ3hFLENBQUM7SUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVDQUF1QyxFQUFFLEdBQVMsRUFBRTtRQUN0RCxNQUFNLDBCQUEwQixHQUFHLE1BQU0sb0JBQVEsQ0FBQyxXQUFXLENBQUMsb0JBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4RixNQUFNLHdCQUF3QixHQUFHLE1BQU0sb0JBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwRixnQkFBTSxDQUFDLEtBQUssQ0FDWCwwQkFBMEIsSUFBSSx3QkFBd0IsRUFDdEQsSUFBSSxFQUNKLGlGQUFpRixDQUNqRixDQUFDO0lBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7UUFDeEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxvQkFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVDLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBUyxFQUFFO1FBQ2hDLE1BQU0sb0JBQVEsQ0FBQyxLQUFLLENBQUMsb0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxNQUFNLDBCQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==
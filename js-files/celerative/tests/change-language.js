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
const home_page_1 = require("../page-objects/home-page");
describe('Psh site validations', () => {
    it('Site language should change', () => __awaiter(void 0, void 0, void 0, function* () {
        let homeTabEnglishText = yield home_page_1.homePage.getText(home_page_1.homePage.homeTab);
        let expectedText = 'HOME';
        yield home_page_1.homePage.assertText(homeTabEnglishText, expectedText);
        yield home_page_1.homePage.switchToSpanishLanguage();
        const homeTabSpanishText = yield home_page_1.homePage.getText(home_page_1.homePage.homeTab);
        expectedText = 'INICIO';
        home_page_1.homePage.assertText(homeTabSpanishText, expectedText);
        yield home_page_1.homePage.switchToEnglishLanguage();
        homeTabEnglishText = yield home_page_1.homePage.getText(home_page_1.homePage.homeTab);
        expectedText = 'HOME';
        home_page_1.homePage.assertText(homeTabEnglishText, expectedText);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLWxhbmd1YWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NlbGVyYXRpdmUvdGVzdHMvY2hhbmdlLWxhbmd1YWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseURBQXFEO0FBRXJELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVMsRUFBRTtRQUM1QyxJQUFJLGtCQUFrQixHQUFHLE1BQU0sb0JBQVEsQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDMUIsTUFBTSxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUU1RCxNQUFNLG9CQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV6QyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sb0JBQVEsQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRSxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLG9CQUFRLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXRELE1BQU0sb0JBQVEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRXpDLGtCQUFrQixHQUFHLE1BQU0sb0JBQVEsQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLG9CQUFRLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9
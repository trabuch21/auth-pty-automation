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
const base_page_1 = require("./common/base-page");
class HomePage extends base_page_1.BasePage {
    constructor() {
        super();
        this.switchToSpanishLanguage = () => __awaiter(this, void 0, void 0, function* () {
            yield exports.homePage.click(this.dropDownLanguage);
            yield exports.homePage.click(this.spanishOption);
        });
        this.switchToEnglishLanguage = () => __awaiter(this, void 0, void 0, function* () {
            yield exports.homePage.click(this.dropDownLanguage);
            yield exports.homePage.click(this.englishOption);
        });
        this.logo = protractor_1.element(protractor_1.by.css('a [class="logo"]'));
        this.dropDownLanguage = protractor_1.element(protractor_1.by.css('a[class="language--link"]'));
        const languageDropdownSelector = 'ul[class="language--tooltip"]';
        this.spanishOption = protractor_1.element(protractor_1.by.css(`${languageDropdownSelector} a[data-language='es']`));
        this.englishOption = protractor_1.element(protractor_1.by.css(`${languageDropdownSelector} a[data-language='en']`));
        this.contactUs = protractor_1.element(protractor_1.by.css('a[href*="contact"]'));
        this.homeTab = protractor_1.element(protractor_1.by.css('div[class="navbar-left-1"] ul[class$="navbar-left"] li:first-child a[href^="/e"]'));
        this.playVideoButton = protractor_1.element(protractor_1.by.id('play-video'));
        this.topbar = protractor_1.element(protractor_1.by.css('div[class="navbar-collapse collapse scrolly"]'));
    }
}
exports.homePage = new HomePage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NlbGVyYXRpdmUvcGFnZS1vYmplY3RzL2hvbWUtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDJDQUF3RDtBQUN4RCxrREFBOEM7QUFFOUMsTUFBTSxRQUFTLFNBQVEsb0JBQVE7SUFVOUI7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQWNULDRCQUF1QixHQUFHLEdBQVMsRUFBRTtZQUNwQyxNQUFNLGdCQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sZ0JBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQSxDQUFDO1FBRUYsNEJBQXVCLEdBQUcsR0FBUyxFQUFFO1lBQ3BDLE1BQU0sZ0JBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDNUMsTUFBTSxnQkFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFBLENBQUM7UUFyQkQsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sd0JBQXdCLEdBQUcsK0JBQStCLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyx3QkFBd0Isd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsd0JBQXdCLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUNyQixlQUFFLENBQUMsR0FBRyxDQUFDLGtGQUFrRixDQUFDLENBQzFGLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBV0Q7QUFDWSxRQUFBLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=
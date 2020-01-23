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
const login_page_1 = require("../../page-objects/login-page");
const protractor_1 = require("protractor");
describe('Suite 1', () => {
    it('Test 1', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.browser.switchTo().frame(0);
        yield login_page_1.loginPage.login("lucas", "trabuchi");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2VsZXJhdGl2ZS90ZXN0cy9Mb2dpbi9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhEQUEwRDtBQUMxRCwyQ0FBcUM7QUFHckMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDeEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFTLEVBQUU7UUFFdkIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sc0JBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFFO0lBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSJ9
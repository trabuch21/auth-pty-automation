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
class LoginPage extends base_page_1.BasePage {
    constructor() {
        super();
        this.fillForm = (username, password) => __awaiter(this, void 0, void 0, function* () {
            yield this.inputText(this.username, username);
            yield this.inputText(this.password, password);
        });
        this.username = protractor_1.element(protractor_1.by.css('input[name="username"]'));
        this.password = protractor_1.element(protractor_1.by.css('input[name="password"]'));
        this.iframe = protractor_1.element(protractor_1.by.css('iframe[frameborder="0"]'));
    }
}
exports.loginPage = new LoginPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jZWxlcmF0aXZlL3BhZ2Utb2JqZWN0cy9sb2dpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXdEO0FBQ3hELGtEQUE4QztBQUU5QyxNQUFNLFNBQVUsU0FBUSxvQkFBUTtJQUsvQjtRQUNDLEtBQUssRUFBRSxDQUFDO1FBTVQsYUFBUSxHQUFHLENBQU8sUUFBZ0IsRUFBRSxRQUFnQixFQUFFLEVBQUU7WUFDdkQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFBLENBQUM7UUFSRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBTUQ7QUFDWSxRQUFBLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDIn0=
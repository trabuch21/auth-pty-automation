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
class ContactPage extends base_page_1.BasePage {
    constructor() {
        super();
        this.fillForm = (name, email, messages, company) => __awaiter(this, void 0, void 0, function* () {
            yield this.inputText(this.nameField, name);
            yield this.inputText(this.emailField, email);
            yield this.inputText(this.companyField, company);
            yield this.inputText(this.messageField, messages);
        });
        this.nameField = protractor_1.element(protractor_1.by.css('input[name="name"]'));
        this.emailField = protractor_1.element(protractor_1.by.css('input[name="email"]'));
        this.companyField = protractor_1.element(protractor_1.by.css('input[name="company"]'));
        this.messageField = protractor_1.element(protractor_1.by.css('textarea[name="description"]'));
    }
}
exports.contactPage = new ContactPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NlbGVyYXRpdmUvcGFnZS1vYmplY3RzL2NvbnRhY3QtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDJDQUF3RDtBQUN4RCxrREFBOEM7QUFFOUMsTUFBTSxXQUFZLFNBQVEsb0JBQVE7SUFNakM7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQU9ULGFBQVEsR0FBRyxDQUFPLElBQVksRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxPQUFnQixFQUFFLEVBQUU7WUFDcEYsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFBLENBQUM7UUFYRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztDQVFEO0FBQ1ksUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9
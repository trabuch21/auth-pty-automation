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
const custom_logger_1 = require("./custom-logger");
class LocatorManager {
}
exports.LocatorManager = LocatorManager;
LocatorManager.showLocator = (element) => __awaiter(void 0, void 0, void 0, function* () {
    const locatorTypes = {
        css: 'By(css selector,',
        xpath: 'By(xpath,',
    };
    try {
        let locator;
        const entireLocator = yield element.locator().toString();
        if (entireLocator.includes(locatorTypes.css)) {
            const firstPartRemoved = entireLocator.replace(locatorTypes.css, '');
            locator = firstPartRemoved.substring(firstPartRemoved.length - 1, '');
        }
        else if (entireLocator.includes(locatorTypes.xpath)) {
            const firstPartRemoved = entireLocator.replace(locatorTypes.xpath, '');
            locator = firstPartRemoved.substring(firstPartRemoved.length - 1, '');
        }
        return locator;
    }
    catch (err) {
        custom_logger_1.customLogger.logger.error(`An error happened:\n\t ${err}`);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRvci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NlbGVyYXRpdmUvc3VwcG9ydC9sb2NhdG9yLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxtREFBK0M7QUFJL0MsTUFBc0IsY0FBYzs7QUFBcEMsd0NBMEJDO0FBcEJPLDBCQUFXLEdBQUcsQ0FBTyxPQUFzQixFQUFtQixFQUFFO0lBQ3RFLE1BQU0sWUFBWSxHQUFHO1FBQ3BCLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsS0FBSyxFQUFFLFdBQVc7S0FDbEIsQ0FBQztJQUNGLElBQUk7UUFDSCxJQUFJLE9BQWUsQ0FBQztRQUNwQixNQUFNLGFBQWEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6RCxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLE1BQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN0RTthQUFNLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEQsTUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsT0FBTyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxPQUFPLENBQUM7S0FDZjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ2IsNEJBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQzNEO0FBQ0YsQ0FBQyxDQUFBLENBQUMifQ==
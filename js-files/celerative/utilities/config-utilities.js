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
const protractor_1 = require("protractor");
const custom_logger_1 = require("../support/custom-logger");
const fs_extra_1 = __importDefault(require("fs-extra"));
const { join } = require('path');
class BrowserUtilities {
}
exports.BrowserUtilities = BrowserUtilities;
BrowserUtilities.chromeConfigs = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--window-size=1550,768', '--no-sandbox', '--disable-dev-shm-usage'],
    },
    shardTestFiles: false,
    maxInstances: 1,
};
BrowserUtilities.firefoxConfigs = {
    browserName: 'firefox',
    marionette: 'true',
    'moz:firefoxOptions': {
        args: ['--headless', '--window-size=1550,768'],
    },
};
BrowserUtilities.multiCapabilitiesConfigs = [
    {
        browserName: BrowserUtilities.chromeConfigs.browserName,
        chromeOptions: BrowserUtilities.chromeConfigs.chromeOptions,
    },
];
BrowserUtilities.setFullScreen = (browserName) => __awaiter(void 0, void 0, void 0, function* () {
    switch (browserName) {
        case 'chrome':
            protractor_1.browser.driver
                .executeScript(() => [window.screen.availWidth, window.screen.availHeight])
                .then((result) => {
                protractor_1.browser.driver
                    .manage()
                    .window()
                    .setSize(result[0], result[1]);
            });
            break;
        case 'firefox':
            protractor_1.browser.driver
                .executeScript(() => [window.screen.availWidth, window.screen.availHeight])
                .then((result) => {
                protractor_1.browser.driver
                    .manage()
                    .window()
                    .setSize(result[0], result[1]);
            });
            break;
    }
});
BrowserUtilities.startBrowser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    const browserCapabilities = yield protractor_1.browser.getCapabilities();
    const browserName = yield browserCapabilities.get('browserName');
    yield BrowserUtilities.setFullScreen(browserName);
    yield protractor_1.browser.get(protractor_1.browser.baseUrl);
});
BrowserUtilities.killBrowser = () => __awaiter(void 0, void 0, void 0, function* () {
    if (protractor_1.browser) {
        yield protractor_1.browser.driver.quit();
    }
});
BrowserUtilities.showBrowserLogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const browserLogs = yield protractor_1.browser
        .manage()
        .logs()
        .get('browser');
    browserLogs.forEach(function (log) {
        if (log.level.value >= 900) {
            custom_logger_1.customLogger.logger.error(`\nThe following error was found in the browser console: \n\t${log.message} \n`);
        }
    });
});
class ScreenshotsUtilities {
}
exports.ScreenshotsUtilities = ScreenshotsUtilities;
ScreenshotsUtilities.takeScrenshootInFailure = (result) => __awaiter(void 0, void 0, void 0, function* () {
    const caps = yield protractor_1.browser.getCapabilities();
    const browserName = yield caps.get('browserName');
    const takeScreenshot = yield protractor_1.browser.takeScreenshot();
    const stream = fs_extra_1.default.createWriteStream(`logger-bag/screenshots-for-failures/${browserName} - ${result.fullName}.png`);
    stream.write(new Buffer(takeScreenshot, 'base64'));
    stream.end();
});
class PluginUtilities {
}
exports.PluginUtilities = PluginUtilities;
PluginUtilities.pluginConfig = [
    {
        package: 'protractor-image-comparison',
        options: {
            baselineFolder: join(process.cwd(), `./image-comparison/baseline/${process.platform}`),
            formatImageName: '{tag}-{logName}-{width}x{height}',
            screenshotPath: join(process.cwd(), './image-comparison/actual_screenshots/'),
            savePerInstance: true,
            debug: false,
            disableCSSAnimation: true,
            clearRuntimeFolder: true,
            autoSaveBaseline: true,
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXV0aWxpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jZWxlcmF0aXZlL3V0aWxpdGllcy9jb25maWctdXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLDREQUF3RDtBQUN4RCx3REFBMkI7QUFHM0IsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVqQyxNQUFzQixnQkFBZ0I7O0FBQXRDLDRDQW1GQztBQWxGTyw4QkFBYSxHQUFHO0lBQ3RCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGFBQWEsRUFBRTtRQUNkLElBQUksRUFBRSxDQUFFLHdCQUF3QixFQUFFLGNBQWMsRUFBRSx5QkFBeUIsQ0FBQztLQUM1RTtJQUNELGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFlBQVksRUFBRSxDQUFDO0NBQ2YsQ0FBQztBQUVLLCtCQUFjLEdBQUc7SUFDdkIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsVUFBVSxFQUFFLE1BQU07SUFDbEIsb0JBQW9CLEVBQUU7UUFDckIsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLHdCQUF3QixDQUFDO0tBQzlDO0NBQ0QsQ0FBQztBQUVLLHlDQUF3QixHQUFHO0lBQ2pDO1FBQ0MsV0FBVyxFQUFFLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxXQUFXO1FBQ3ZELGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsYUFBYTtLQUMzRDtDQU1ELENBQUM7QUFFSyw4QkFBYSxHQUFHLENBQU8sV0FBVyxFQUFpQixFQUFFO0lBQzNELFFBQVEsV0FBVyxFQUFFO1FBQ3BCLEtBQUssUUFBUTtZQUNaLG9CQUFPLENBQUMsTUFBTTtpQkFDWixhQUFhLENBQW1CLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFX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
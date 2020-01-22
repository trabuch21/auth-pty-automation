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
const jasmine_failures_slack_reporter_1 = __importDefault(require("jasmine-failures-slack-reporter"));
const { join } = require('path');
class BrowserUtilities {
}
exports.BrowserUtilities = BrowserUtilities;
BrowserUtilities.chromeConfigs = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--headless', '--window-size=1550,768', '--no-sandbox', '--disable-dev-shm-usage'],
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
class ReporterUtilities {
}
exports.ReporterUtilities = ReporterUtilities;
ReporterUtilities.setSlackReporter = () => {
    protractor_1.browser.getProcessedConfig().then(function (config) {
        const browserName = config.capabilities.browserName;
        const url = config.baseUrl;
        jasmine.getEnv().addReporter(new jasmine_failures_slack_reporter_1.default.WebReporter({
            projectName: 'Bender - PSh end 2 end tests',
            environment: `\nBrowser: ${browserName}\nBase URL: ${url}`,
            slackUrl: 'https://hooks.slack.com/services/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',
            channel: '#psh-bender-failures',
        }));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXV0aWxpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jZWxlcmF0aXZlL3V0aWxpdGllcy9jb25maWctdXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLDREQUF3RDtBQUN4RCx3REFBMkI7QUFDM0Isc0dBQXFEO0FBRXJELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFakMsTUFBc0IsZ0JBQWdCOztBQUF0Qyw0Q0FtRkM7QUFsRk8sOEJBQWEsR0FBRztJQUN0QixXQUFXLEVBQUUsUUFBUTtJQUNyQixhQUFhLEVBQUU7UUFDZCxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixDQUFDO0tBQ3pGO0lBQ0QsY0FBYyxFQUFFLEtBQUs7SUFDckIsWUFBWSxFQUFFLENBQUM7Q0FDZixDQUFDO0FBRUssK0JBQWMsR0FBRztJQUN2QixXQUFXLEVBQUUsU0FBUztJQUN0QixVQUFVLEVBQUUsTUFBTTtJQUNsQixvQkFBb0IsRUFBRTtRQUNyQixJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLENBQUM7S0FDOUM7Q0FDRCxDQUFDO0FBRUsseUNBQXdCLEdBQUc7SUFDakM7UUFDQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVc7UUFDdkQsYUFBYSxFQUFFLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxhQUFhO0tBQzNEO0NBTUQsQ0FBQztBQUVLLDhCQUFhLEdBQUcsQ0FBTyxXQUFXLEVBQWlCLEVBQUU7SUFDM0QsUUFBUSxXQUFXLEVBQUU7UUFDcEIsS0FBSyxRQUFRO1lBQ1osb0JBQU8sQ0FBQyxNQUFNO2lCQUNaLGFBQWEsQ0FBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxN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
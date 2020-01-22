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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXV0aWxpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jZWxlcmF0aXZlL3V0aWxpdGllcy9jb25maWctdXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLDREQUF3RDtBQUN4RCx3REFBMkI7QUFDM0Isc0dBQXFEO0FBRXJELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFakMsTUFBc0IsZ0JBQWdCOztBQUF0Qyw0Q0FtRkM7QUFsRk8sOEJBQWEsR0FBRztJQUN0QixXQUFXLEVBQUUsUUFBUTtJQUNyQixhQUFhLEVBQUU7UUFDZCxJQUFJLEVBQUUsQ0FBRSx3QkFBd0IsRUFBRSxjQUFjLEVBQUUseUJBQXlCLENBQUM7S0FDNUU7SUFDRCxjQUFjLEVBQUUsS0FBSztJQUNyQixZQUFZLEVBQUUsQ0FBQztDQUNmLENBQUM7QUFFSywrQkFBYyxHQUFHO0lBQ3ZCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLG9CQUFvQixFQUFFO1FBQ3JCLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsQ0FBQztLQUM5QztDQUNELENBQUM7QUFFSyx5Q0FBd0IsR0FBRztJQUNqQztRQUNDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsV0FBVztRQUN2RCxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGFBQWE7S0FDM0Q7Q0FNRCxDQUFDO0FBRUssOEJBQWEsR0FBRyxDQUFPLFdBQVcsRUFBaUIsRUFBRTtJQUMzRCxRQUFRLFdBQVcsRUFBRTtRQUNwQixLQUFLLFFBQVE7WUFDWixvQkFBTyxDQUFDLE1BQU07aUJBQ1osYUFBYSxDQUFtQixHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxN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
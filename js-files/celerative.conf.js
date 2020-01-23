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
const config_utilities_1 = require("./celerative/utilities/config-utilities");
const protractor_1 = require("protractor");
const custom_logger_1 = require("./celerative/support/custom-logger");
const fs_extra_1 = __importDefault(require("fs-extra"));
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const AllureReporter = require('jasmine-allure-reporter');
exports.config = {
    framework: 'jasmine2',
    baseUrl: 'https://frontend-demo.pty.serverdepruebas.com/',
    SELENIUM_PROMISE_MANAGER: false,
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
    },
    multiCapabilities: config_utilities_1.BrowserUtilities.multiCapabilitiesConfigs,
    suites: {
        celerative: ['./celerative/tests/Login/*.js'],
    },
    plugins: config_utilities_1.PluginUtilities.pluginConfig,
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true,
            },
            spec: {
                displayFailed: true,
                displaySuccess: true,
                displayDuration: true,
            },
            summary: {
                displayPending: true,
                displayDuration: true,
            },
        }));
        const dirPathsToClean = [
            'logger-bag/allure-output',
            'logger-bag/allure-report',
            'logger-bag/screenshots-for-failures/',
        ];
        dirPathsToClean.forEach(path => {
            fs_extra_1.default.emptyDir(path, err => {
                if (err)
                    return custom_logger_1.customLogger.logger.error(err);
            });
        });
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'logger-bag/allure-report',
        }));
        jasmine.getEnv().afterEach(function (done) {
            protractor_1.browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64');
                }, 'image/png');
                done();
            });
        });
        jasmine.getEnv().addReporter({
            specStarted: (result) => __awaiter(void 0, void 0, void 0, function* () {
                custom_logger_1.customLogger.logger.info(`\n • Current test running: \n\t • ${(exports.config.multiCapabilities.name = result.fullName)}\n`);
            }),
            specDone: (result) => __awaiter(void 0, void 0, void 0, function* () {
                if (result.status === 'failed') {
                    yield config_utilities_1.ScreenshotsUtilities.takeScrenshootInFailure(result);
                }
            }),
        });
        jasmine.getEnv().afterEach(function (done) {
            protractor_1.browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64');
                }, 'image/png')();
                done();
            });
        });
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
        }));
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            yield config_utilities_1.BrowserUtilities.startBrowser();
        }));
        afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
            const browserCapabilities = yield protractor_1.browser.getCapabilities();
            const browserName = yield browserCapabilities.get('browserName');
            if (browserName === 'chrome') {
                yield config_utilities_1.BrowserUtilities.showBrowserLogs();
            }
        }));
    }),
    onComplete: () => __awaiter(void 0, void 0, void 0, function* () {
        yield config_utilities_1.BrowserUtilities.killBrowser();
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsZXJhdGl2ZS5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NlbGVyYXRpdmUuY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUlpRDtBQUVqRCwyQ0FBNkM7QUFDN0Msc0VBQWtFO0FBQ2xFLHdEQUEyQjtBQUMzQixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFDbkUsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFHN0MsUUFBQSxNQUFNLEdBQVc7SUFDN0IsU0FBUyxFQUFFLFVBQVU7SUFDckIsT0FBTyxFQUFFLGdEQUFnRDtJQUN6RCx3QkFBd0IsRUFBRSxLQUFLO0lBTS9CLGNBQWMsRUFBRSxLQUFLO0lBTXJCLGlCQUFpQixFQUFFLEtBQUs7SUFFeEIsZUFBZSxFQUFFO1FBSWhCLHNCQUFzQixFQUFFLE1BQU07S0FDOUI7SUFFRCxpQkFBaUIsRUFBRSxtQ0FBZ0IsQ0FBQyx3QkFBd0I7SUFFNUQsTUFBTSxFQUFFO1FBQ1AsVUFBVSxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0M7SUFFRCxPQUFPLEVBQUUsa0NBQWUsQ0FBQyxZQUFZO0lBRXJDLFNBQVMsRUFBRSxHQUFTLEVBQUU7UUFDckIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FDM0IsSUFBSSxZQUFZLENBQUM7WUFDaEIsS0FBSyxFQUFFO2dCQUNOLGFBQWEsRUFBRSxJQUFJO2FBQ25CO1lBQ0QsSUFBSSxFQUFFO2dCQUNMLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsZUFBZSxFQUFFLElBQUk7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLGVBQWUsRUFBRSxJQUFJO2FBQ3JCO1NBQ0QsQ0FBQyxDQUNGLENBQUM7UUFFRixNQUFNLGVBQWUs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
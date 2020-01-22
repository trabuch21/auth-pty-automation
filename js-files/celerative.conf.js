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
    baseUrl: 'https://wearepsh.com/en/',
    SELENIUM_PROMISE_MANAGER: false,
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
    },
    multiCapabilities: config_utilities_1.BrowserUtilities.multiCapabilitiesConfigs,
    suites: {
        celerative: ['./celerative/tests/*.js'],
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
        yield config_utilities_1.ReporterUtilities.setSlackReporter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsZXJhdGl2ZS5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NlbGVyYXRpdmUuY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUtpRDtBQUVqRCwyQ0FBNkM7QUFDN0Msc0VBQWtFO0FBQ2xFLHdEQUEyQjtBQUMzQixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFDbkUsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFHN0MsUUFBQSxNQUFNLEdBQVc7SUFDN0IsU0FBUyxFQUFFLFVBQVU7SUFDckIsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyx3QkFBd0IsRUFBRSxLQUFLO0lBTS9CLGNBQWMsRUFBRSxLQUFLO0lBTXJCLGlCQUFpQixFQUFFLEtBQUs7SUFFeEIsZUFBZSxFQUFFO1FBSWhCLHNCQUFzQixFQUFFLE1BQU07S0FDOUI7SUFFRCxpQkFBaUIsRUFBRSxtQ0FBZ0IsQ0FBQyx3QkFBd0I7SUFFNUQsTUFBTSxFQUFFO1FBQ1AsVUFBVSxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDdkM7SUFFRCxPQUFPLEVBQUUsa0NBQWUsQ0FBQyxZQUFZO0lBRXJDLFNBQVMsRUFBRSxHQUFTLEVBQUU7UUFDckIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FDM0IsSUFBSSxZQUFZLENBQUM7WUFDaEIsS0FBSyxFQUFFO2dCQUNOLGFBQWEsRUFBRSxJQUFJO2FBQ25CO1lBQ0QsSUFBSSxFQUFFO2dCQUNMLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsZUFBZSxFQUFFLElBQUk7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLGVBQWUsRUFBRSxJQUFJO2FBQ3JCO1NBQ0QsQ0FBQyxDQUNGLENBQUM7UUFFRixNQUFNLG9DQUFp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
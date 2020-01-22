"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const fs_extra_1 = __importDefault(require("fs-extra"));
const { timestamp, prettyPrint, printf } = winston_1.format;
const colorizer = winston_1.format.colorize();
fs_extra_1.default.remove('logger-bag/bender-logs/execution-logs.log', err => {
    if (err)
        return exports.customLogger.logger.error(err);
});
class CustomLogger {
    constructor() {
        this.logger = winston_1.createLogger({
            transports: [
                new winston_1.transports.File({
                    format: winston_1.format.combine(timestamp(), prettyPrint(), CustomLogger.myFormatNoColor),
                    filename: 'logger-bag/bender-logs/execution-logs.log',
                }),
                new winston_1.transports.Console({
                    format: winston_1.format.combine(timestamp(), prettyPrint(), CustomLogger.myFormat),
                }),
            ],
        });
    }
}
CustomLogger.myFormat = printf(msg => colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`));
CustomLogger.myFormatNoColor = printf(msg => `${msg.timestamp} - ${msg.level}: ${msg.message}`);
exports.customLogger = new CustomLogger();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jZWxlcmF0aXZlL3N1cHBvcnQvY3VzdG9tLWxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUEyRDtBQUMzRCx3REFBMkI7QUFDM0IsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQUcsZ0JBQU0sQ0FBQztBQUNsRCxNQUFNLFNBQVMsR0FBRyxnQkFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRXBDLGtCQUFHLENBQUMsTUFBTSxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO0lBQzdELElBQUksR0FBRztRQUFFLE9BQU8sb0JBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxZQUFZO0lBQWxCO1FBT0MsV0FBTSxHQUFHLHNCQUFZLENBQUM7WUFDckIsVUFBVSxFQUFFO2dCQUVYLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ25CLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxZQUFZLENBQUMsZUFBZSxDQUFDO29CQUNoRixRQUFRLEVBQUUsMkNBQTJDO2lCQUNyRCxDQUFDO2dCQUdGLElBQUksb0JBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDO2lCQUN6RSxDQUFDO2FBQ0Y7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDOztBQXBCYyxxQkFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUNyQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQ2hGLENBQUM7QUFFWSw0QkFBZSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsTUFBTSxHQUFHLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBa0JyRixRQUFBLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDIn0=
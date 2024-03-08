import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  level: "info",
  handleExceptions: true,
  handleRejections: true,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.DailyRotateFile({
      filename: "all-%DATE%.log",
      zippedArchive: true,
      maxSize: "500m",
      maxFiles: "15d",
    }),
    new winston.transports.DailyRotateFile({
      level: "error",
      filename: "error-%DATE%.log",
      zippedArchive: true,
      maxSize: "500m",
      maxFiles: "15d",
    }),
    new winston.transports.Console({
      level: "error",
    }),
  ],
});

export default logger;

import winston from 'winston';
import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';
import { getEnv } from './env';

const env = getEnv('NODE_ENV', 'development');
const isDevOrTest = env === 'development' || env === 'test';
const logDir = path.join(process.cwd(), 'logs');

const consoleFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
        const metaString = Object.keys(meta).length ? JSON.stringify(meta) : '';
        const msg =
            typeof message === 'object' ? JSON.stringify(message) : message;
        return `${timestamp} [${level}]: ${msg} ${metaString}`;
    }),
);

const transports: winston.transport[] = [];

if (isDevOrTest) {
    transports.push(
        new winston.transports.Console({
            level: 'info',
            format: consoleFormat,
        }),
    );
}

transports.push(
    new DailyRotateFile({
        filename: path.join(logDir, 'application-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        maxFiles: '7d',
        zippedArchive: true,
        level: 'info',
    }),
    new DailyRotateFile({
        filename: path.join(logDir, 'error-%DATE%.log'),
        datePattern: 'YYYY-MM-DD',
        maxFiles: '7d',
        zippedArchive: true,
        level: 'error',
    }),
);

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    transports,
});

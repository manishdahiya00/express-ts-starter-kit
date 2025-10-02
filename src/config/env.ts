import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, '../../.env') });

const ENV = {
    // App Config
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,

    // Database Config
    DATABASE_URL: process.env.DATABASE_URL,

    // Auth Config
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,

    // Email Config
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,

    // Other Config
    LOG_LEVEL: process.env.LOG_LEVEL,
    CORS_ORIGIN: process.env.CORS_ORIGIN,

    // Rate Limiting Config
    RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX,
    RATE_LIMIT_WINDOW: process.env.RATE_LIMIT_WINDOW,
};

export function getEnv(
    key: keyof typeof ENV,
    defaultValue: string = '',
): string {
    const value = ENV[key];
    if (value === undefined || value === null || value === '') {
        if (defaultValue === '') {
            throw new Error(
                `Environment variable ${key} is not set and no default value provided.`,
            );
        }
        return defaultValue;
    }
    return value;
}

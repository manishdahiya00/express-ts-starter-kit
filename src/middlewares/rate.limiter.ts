import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';
import { getEnv } from '@config/env';

export const rateLimiter: RateLimitRequestHandler = rateLimit({
    windowMs: Number(getEnv('RATE_LIMIT_WINDOW', '60000')),
    max: Number(getEnv('RATE_LIMIT_MAX', '100')),
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: 'error',
        message: 'Too many requests, please try again later.',
    },
});

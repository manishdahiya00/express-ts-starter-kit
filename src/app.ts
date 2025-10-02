import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { getEnv } from '@config/env';
import { requestLogger } from '@middlewares/request.logger';
import { rateLimiter } from '@middlewares/rate.limiter';
import { globalErrorHandler } from '@middlewares/error.handler';

export function createApp(): Express {
    const app = express();

    // ====================
    // Middlewares
    // ====================

    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ limit: '10mb', extended: true }));
    app.use(
        cors({
            origin: getEnv('CORS_ORIGIN'),
            credentials: true,
        }),
    );
    app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
    app.use(cookieParser());
    app.use(rateLimiter);
    app.use(requestLogger('ClientBoard API'));

    // ====================
    // Routes
    // ====================
    app.get('/health', (req, res) => {
        return res.status(200).json({
            status: 'OK',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        });
    });

    // ====================
    // Global Error Handler
    // ====================
    app.use(globalErrorHandler);

    return app;
}

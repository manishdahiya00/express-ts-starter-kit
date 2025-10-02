import { logger } from '@config/logger';
import { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
    statusCode?: number;
    isOperational?: boolean;
}

export const globalErrorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    const isOperational = err.isOperational ?? false;

    logger.error({
        message,
        statusCode,
        stack: err.stack,
        isOperational,
        path: req.path,
        method: req.method,
    });

    res.status(statusCode).json({
        status: 'error',
        message,
    });
};

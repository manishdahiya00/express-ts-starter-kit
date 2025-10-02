import { Request, Response, NextFunction } from 'express';
import { logger } from '@config/logger';

export function requestLogger(serviceName: string) {
    return (req: Request, res: Response, next: NextFunction): void => {
        logger.info({
            service: serviceName,
            method: req.method,
            url: req.url,
            ip: req.ip,
            headers: {
                host: req.headers.host,
                userAgent: req.headers['user-agent'],
                authorization: req.headers.authorization,
            },
        });
        next();
    };
}

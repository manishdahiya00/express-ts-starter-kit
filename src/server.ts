import { logger } from '@config/logger';
import { createApp } from './app';
import { getEnv } from '@config/env';
import 'module-alias/register';

export function startServer(): void {
    const port = Number(getEnv('PORT'));
    const app = createApp();
    app.listen(port, () => {
        logger.info(
            `Server is running on http://localhost:${port} in ${getEnv('NODE_ENV')} environment.`,
        );
    });
}

startServer();

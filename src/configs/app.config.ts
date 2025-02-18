import { BadConfigurationError } from '../errors';

type AppConfigType = {
  port: number;
  logDir: string;
};

if (!process.env.PORT)
  throw new BadConfigurationError('port configuration not found');

export const AppConfig: AppConfigType = {
  port: parseInt(process.env.PORT),
  logDir: process.env.LOG_DIR || 'logs',
};

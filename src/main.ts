import 'dotenv/config';
import { textSync as figlet } from 'figlet';
import express from 'express';
import { AppConfig, AppDataSource, swaggerSpec } from './configs';
import swaggerUi from 'swagger-ui-express';

import helloRoutes from './routes/hello.route';
import shortUrlRoutes from './routes/short-url.route';

import { ErrorHandlerMiddleware } from './middlewares';

import logger from './logger';

async function bootstrap() {
  console.log(figlet('URL-SHORTENER-API'));
  console.log(
    '-----------------------------------------------------------------------'
  );
  const app = express();
  app.use(express.json());

  // routes setup
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/api/hello', helloRoutes);
  app.use('/api/short', shortUrlRoutes);

  // use exception handlers
  app.use(ErrorHandlerMiddleware);

  app.listen(AppConfig.port);
  logger.info(`Application is running on: ${AppConfig.port}`);
}

AppDataSource.initialize()
  .then(() => bootstrap())
  .catch((err) => console.log(err));

import { Request, Response, NextFunction } from 'express';
import { BadConfigurationError, NotFoundError } from '../errors';

import logger from '../logger';

export const ErrorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BadConfigurationError) {
    logger.error(`Bad Configuration error`);
    res.status(500).json({ error: err.message });
  } else if (err instanceof NotFoundError) {
    logger.error(`Not found error`);
    res.status(404).json({ error: err.message });
  } else {
    logger.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

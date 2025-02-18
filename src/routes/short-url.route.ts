import { Router } from 'express';
import shortUrlController from '../controllers/short-url.controller';
import { ValidateProperty, validateRequest } from '../middlewares';
import { CreateUrlDTO } from '../dtos';

const routes = Router();

routes.post(
  '/',
  validateRequest(CreateUrlDTO, ValidateProperty.BODY),
  shortUrlController.createUrl
);
routes.get('/:url', shortUrlController.getUrl);

export default routes;

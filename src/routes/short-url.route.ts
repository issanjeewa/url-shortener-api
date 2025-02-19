import { Router } from 'express';
import shortUrlController from '../controllers/short-url.controller';
import { ValidateProperty, validateRequest } from '../middlewares';
import { CreateUrlDTO } from '../dtos';

const routes = Router();

/**
 * @swagger
 * /api/short:
 *  post:
 *    summary: Create a short URL
 *    tags:
 *     - Short URL
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateUrlDTO'
 *    responses:
 *      '201':
 *        description: Shortened URL created
 *      '400':
 *        description: Bad request (validation errors)
 */
routes.post(
  '/',
  validateRequest(CreateUrlDTO, ValidateProperty.BODY),
  shortUrlController.createUrl
);

/**
 * @swagger
 * /api/short/{url}:
 *  get:
 *    summary: Redirect to the original URL
 *    tags:
 *      - Short URL
 *    parameters:
 *      - name: url
 *        in: path
 *        required: true
 *        description: Shortened URL
 *        schema:
 *          type: string
 *    responses:
 *      '302':
 *        description: Redirect to the original URL
 *      '404':
 *        description: URL not found
 */
routes.get('/:url', shortUrlController.getUrl);

export default routes;

import { Router } from 'express';
import helloController from '../controllers/hello.controller';

const routes = Router();

routes.get('/', helloController.getHello);

export default routes;

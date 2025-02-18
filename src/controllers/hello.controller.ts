import { Request, Response, Router } from 'express';
import service from '../services/hello.service';

function getHello(req: Request, res: Response) {
  const result = service.getHello();
  res.send(result);
}

export default {
  getHello,
};

import { NextFunction, Request, Response } from 'express';
import service from '../services/short-url.service';

async function createUrl(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await service.createUrl(req.body.url);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function getUrl(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await service.getUrl(req.params.url);
    res.redirect(result);
  } catch (error) {
    next(error);
  }
}

export default {
  createUrl,
  getUrl,
};

import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export enum ValidateProperty {
  BODY = 'body',
  QUERY = 'query',
  PARAMS = 'params',
}

export function validateRequest(
  dtoClass: any,
  validateProperty: ValidateProperty
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(dtoClass, req[validateProperty]);

    validate(dto, { forbidNonWhitelisted: true, whitelist: true }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const errorMessages = errors
            .map((error) => Object.values(error.constraints!))
            .flat();
          return res.status(400).json({ errors: errorMessages });
        } else {
          req.body = dto;
          next();
        }
      }
    );
  };
}

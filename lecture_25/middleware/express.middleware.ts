import { Request, Response, NextFunction } from 'express';

export function expressMidlware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('express middleware');
  next();
}

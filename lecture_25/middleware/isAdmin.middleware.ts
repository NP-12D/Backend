import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class IsAdmin implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers['role'] || req.headers['role'] !== 'admin')
      throw new BadRequestException();
    next();
  }
}

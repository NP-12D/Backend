import { BadGatewayException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class UserAgent implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers['user-agent']);
    const useragent = req.headers['user-agent'];
    if (
      useragent?.includes('Mozilla') ||
      useragent?.includes('Chrome') ||
      useragent?.includes('Safari') ||
      useragent?.includes('Firefox')
    )
      throw new BadGatewayException();
    next();
  }
}

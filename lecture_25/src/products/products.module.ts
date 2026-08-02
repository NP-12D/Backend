import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { IsAdmin } from 'middleware/isAdmin.middleware';
import { UserAgent } from 'middleware/userAgent.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserAgent).forRoutes(ProductsController);

    consumer
      .apply(IsAdmin)
      .forRoutes(
        { path: 'products', method: RequestMethod.POST },
        { path: 'products/:id', method: RequestMethod.PUT },
        { path: 'products/:id', method: RequestMethod.DELETE },
        { path: 'products/:id', method: RequestMethod.PATCH },
      );
  }
}

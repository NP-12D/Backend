import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModel } from './products/product.module';

@Module({
  imports: [ProductModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

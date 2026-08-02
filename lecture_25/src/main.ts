import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { expressMidlware } from 'middleware/express.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(expressMidlware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

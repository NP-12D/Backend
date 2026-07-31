import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { DefaultValuePipe } from '@nestjs/common';
interface wishType {
  id: number;
  wish: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/wishlist')
  getWishListByLang(
    @Query('lang', new DefaultValuePipe('en')) lang: string,
  ): wishType[] {
    return this.appService.getWishlistByLang(lang);
  }
}

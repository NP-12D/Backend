import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Headers,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDTO } from './DTO/products.dto';
import { PHeadersDTO } from './DTO/headers.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query() query: ProductsDTO) {
    return this.productsService.getAll(query);
  }
  @Get('/:id')
  getProductByID(@Param('id', ParseIntPipe) id) {
    return this.productsService.getProductById(+id);
  }
  @Post()
  creatProd(@Body() body: ProductsDTO, @Headers() headers: PHeadersDTO) {
    return this.productsService.createProduct(body, headers);
  }
  @Delete('/:id')
  deleteProd(@Param('id', ParseIntPipe) id) {
    return this.productsService.deleteProduct(+id);
  }
  @Put('/:id')
  updateProducts(@Body() body: ProductsDTO, @Param('id', ParseIntPipe) id) {
    return this.productsService.updateProduct(body, +id);
  }
}

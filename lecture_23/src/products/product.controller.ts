import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './DTO/product.dto';
@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('/products')
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  @Get('/products/:id')
  getProductById(@Param() params: { id: string }) {
    const id = params.id;
    return this.productService.getProductById(+id);
  }
  @Post('/products')
  createProduct(@Body() body: ProductDTO) {
    return this.productService.createProduct(body);
  }
  @Put('/products/:id')
  updateProduct(@Body() body: ProductDTO, @Param() params: { id: string }) {
    const id = params.id;
    return this.productService.updateProduct(body, +id);
  }
  @Delete('/products/:id')
  deleteProduct(@Param() params: { id: string }) {
    const id = params.id;
    return this.productService.deleteProduct(+id);
  }
}

import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ProductsDTO } from './DTO/products.dto';
import { PHeadersDTO } from './DTO/headers.dto';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 0,
      name: 'Apple',
      price: 1.2,
      amount: 150,
      description: 'Fresh red apples, crisp and sweet.',
    },
    {
      id: 1,
      name: 'Banana',
      price: 0.8,
      amount: 200,
      description: 'Ripe yellow bananas, perfect for smoothies.',
    },
    {
      id: 2,
      name: 'Carrot',
      price: 0.5,
      amount: 300,
      description: 'Crunchy orange carrots, rich in vitamin A.',
    },
    {
      id: 3,
      name: 'Tomato',
      price: 1.0,
      amount: 180,
      description: 'Juicy red tomatoes, ideal for salads.',
    },
    {
      id: 4,
      name: 'Potato',
      price: 0.7,
      amount: 400,
      description: 'Golden potatoes, versatile for cooking.',
    },
    {
      id: 5,
      name: 'Cucumber',
      price: 0.9,
      amount: 220,
      description: 'Cool green cucumbers, refreshing taste.',
    },
    {
      id: 6,
      name: 'Strawberry',
      price: 2.5,
      amount: 90,
      description: 'Sweet strawberries, great for desserts.',
    },
    {
      id: 7,
      name: 'Broccoli',
      price: 1.8,
      amount: 120,
      description: 'Fresh broccoli florets, packed with nutrients.',
    },
    {
      id: 8,
      name: 'Orange',
      price: 1.1,
      amount: 160,
      description: 'Citrusy oranges, full of vitamin C.',
    },
    {
      id: 9,
      name: 'Spinach',
      price: 1.4,
      amount: 140,
      description: 'Leafy green spinach, perfect for salads and cooking.',
    },
  ];
  getAll(query: ProductsDTO) {
    const { id, name, description, price, page = 1 } = query;
    let { take = 5 } = query;
    let data = this.products;
    if (id) data = data.filter((item) => item.id === +id);
    if (name) data = data.filter((item) => item.name === name);
    if (description)
      data = data.filter((item) => item.description === description);
    if (price) data = data.filter((item) => item.price === +price);
    take > 5 ? (take = 5) : take;
    const result = data.slice((page - 1) * take, page * take);
    return result;
  }
  getProductById(id: number) {
    const findById = this.products.find((item) => item.id === id);
    if (!findById) throw new BadRequestException();
    return findById;
  }
  createProduct(body: ProductsDTO, headers: PHeadersDTO) {
    if (!headers.password || headers.password != 'password')
      throw new BadRequestException();
    const lastId = this.products[this.products.length - 1]?.id || 0;
    const newobject = {
      id: lastId + 1,
      name: body.name,
      price: body.price,
      amount: body.amount,
      description: body.description,
    };
    this.products.push(newobject);
    return newobject;
  }
  updateProduct(body: ProductsDTO, id: number) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex === -1) {
      throw new BadRequestException();
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      name: body.name ?? this.products[productIndex].name,
      price: body.price ?? this.products[productIndex].price,
      amount: body.amount ?? this.products[productIndex].amount,
      description: body.description ?? this.products[productIndex].description,
    };
    return this.products[productIndex];
  }
  deleteProduct(id: number) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex === -1) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    const deletedProd = this.products.splice(productIndex, 1);
    return deletedProd;
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

  create(createProductDto: CreateProductDto) {
    const lastId = this.products[this.products.length - 1]?.id || 0;
    const newProd = {
      id: lastId + 1,
      name: createProductDto.name,
      description: createProductDto.description,
      amount: createProductDto.amount,
      price: createProductDto.price,
    };
    this.products.push(newProd);
    return newProd;
  }

  findAll(query: CreateProductDto) {
    const { id, name, price } = query;
    let data = this.products;
    if (id) data = data.filter((item) => item.id === +id);
    if (name) data = data.filter((item) => item.name === name);
    if (price) data = data.filter((item) => item.price === +price);
    return data;
  }

  findOne(id: number) {
    const findById = this.products.find((item) => item.id === id);
    if (!findById) throw new NotFoundException();
    return findById;
  }
  update(id: number, updateProductDto: UpdateProductDto) {
    const { name, description, amount, price } = updateProductDto;
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) throw new BadRequestException();

    this.products[index] = {
      ...this.products[index],
      name: name ?? this.products[index].name,
      description: description ?? this.products[index].description,
      amount: amount ?? this.products[index].amount,
      price: price ?? this.products[index].price,
    };

    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) throw new BadRequestException();
    const deletedProd = this.products.splice(index, 1);
    return deletedProd;
  }
}

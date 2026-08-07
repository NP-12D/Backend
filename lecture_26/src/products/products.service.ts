import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      title: 'Wireless Keyboard',
      description: 'Slim Bluetooth keyboard for laptops',
      price: 89.9,
      stock: 12,
      category: 'electronics',
    },
    {
      id: 2,
      title: 'Wireless Mouse',
      description: 'Ergonomic Bluetooth mouse with silent clicks',
      price: 49.5,
      stock: 20,
      category: 'electronics',
    },
    {
      id: 3,
      title: 'USB-C Hub',
      description: 'Multiport adapter with HDMI, USB, and SD card slots',
      price: 59.0,
      stock: 15,
      category: 'electronics',
    },
    {
      id: 4,
      title: 'Noise-Cancelling Headphones',
      description:
        'Over-ear Bluetooth headphones with active noise cancellation',
      price: 129.9,
      stock: 8,
      category: 'electronics',
    },
    {
      id: 5,
      title: 'Portable SSD',
      description: '1TB external solid-state drive with fast transfer speeds',
      price: 99.0,
      stock: 10,
      category: 'electronics',
    },
    {
      id: 6,
      title: 'Smartphone Stand',
      description: 'Adjustable aluminum stand for phones and tablets',
      price: 25.0,
      stock: 30,
      category: 'electronics',
    },
  ];
  create(createProductDto: CreateProductDto) {
    const { title, description, price, stock, category } = createProductDto;
    const lastId = this.products[this.products.length - 1]?.id || 0;
    const newProd = {
      id: lastId + 1,
      title: title,
      description: description,
      price: price,
      stock: stock,
      category: category,
    };

    this.products.push(newProd);
    return newProd;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const findById = this.products.find((item) => item.id === +id);
    if (!findById) throw new NotFoundException();
    return findById;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const { title, description, price, stock, category } = updateProductDto;
    const index = this.products.findIndex((item) => item.id === +id);
    if (index === -1) throw new NotFoundException();
    this.products[index] = {
      ...this.products[index],
      title: title ?? this.products[index].title,
      description: description ?? this.products[index].description,
      price: price ?? this.products[index].price,
      stock: stock ?? this.products[index].stock,
      category: category ?? this.products[index].category,
    };
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === +id);
    if (index === -1) throw new NotFoundException();
    const deletedProd = this.products.splice(index, 1);
    return deletedProd;
  }
}

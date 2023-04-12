import { faker } from '@faker-js/faker';

import { Product } from '../../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../product.dto';

// ----- CON CLASES -----
export class ProductMemoryService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      },
    };
    return this.add(newProduct);
  }
  add(product: Product) {
    this.products.push(product);
    return product;
  }
  updateProduct(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }
  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}

// ----- CON FUNCIONES -----
// export const products: Product[] = [];

// export const addProduct = (data: CreateProductDto): Product => {
//   const newProduct = {
//     ...data,
//     id: faker.datatype.uuid(),
//     createdAt: faker.date.recent(),
//     updatedAt: faker.date.recent(),
//     category: {
//       id: data.categoryId,
//       name: faker.commerce.department(),
//       createdAt: faker.date.recent(),
//       updatedAt: faker.date.recent(),
//     },
//   };
//   products.push(newProduct);
//   return newProduct;
// };

// export const updateProduct = (
//   id: Product['id'],
//   changes: UpdateProductDto
// ): Product => {
//   const index = products.findIndex((item) => item.id === id);
//   const prevData = products[index];
//   products[index] = {
//     ...prevData,
//     ...changes,
//   };
//   return products[index];
// };

// export const findProducts = (dto: FindProductDto): Product[] => {
//   // code
//   // dto.color = 'blue';
//   // dto.isNew = true;
//   // dto.tags = [];
//   // dto.tags?.pop();
//   // dto.tags?.push();
//   return products;
// };

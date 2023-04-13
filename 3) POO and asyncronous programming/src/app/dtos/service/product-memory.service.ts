import { faker } from '@faker-js/faker';

import { Product } from '../../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../product.dto';

import * as path from 'path';
import * as fs from 'fs';
import { ProductService } from '../../models/product-service.model';

export const filePath = path.resolve(__dirname, 'products.json');

// ----- WITH CLASSES -----
export class ProductMemoryService implements ProductService {
  // private data: TypeClass[] = [];
  private products: Product[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  // get all products:
  getProducts(): Product[] {
    return this.products;
  }
  // get one product by id:
  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
  // create a new product:
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
  // add created product:
  add(product: Product) {
    this.products.push(product);
    fs.writeFileSync(filePath, JSON.stringify(this.products, null, 2));
    return product;
  }
  // add 50 products:
  addProducts(input: Product[]): Product[] {
    for (let index = 0; index < 50; index++) {
      this.products.push(input[index]);
    }
    fs.writeFileSync(filePath, JSON.stringify(this.products, null, 2));
    return this.getProducts();
  }
  // update product:
  updateProduct(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };

    fs.writeFileSync(filePath, JSON.stringify(this.products, null, 2));

    return this.products[index];
  }
  // delete product:
  deleteProduct(id: Product['id']) {
    const productToBeDeleted = this.findOne(id);

    if (!productToBeDeleted) {
      throw new Error('Product not found.');
    }

    const index = this.products.indexOf(productToBeDeleted);
    this.products.splice(index, 1);

    fs.writeFileSync(filePath, JSON.stringify(this.products, null, 2));

    return productToBeDeleted;
  }
}

// ----- WITHOUT FUNCTIONS -----
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

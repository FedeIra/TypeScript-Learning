import { ProductInterface } from './product.model';
import {
  CreateProductDTOInterface,
  UpdateProductDTOInterface,
  FindProductDTOInterface,
} from './product.dto';
import { faker } from '@faker-js/faker';

const fs = require('fs');

// export const products: ProductInterface[] = []; Si lo quiere iniciar como array vacío

export const products: ProductInterface[] = JSON.parse(
  fs.readFileSync('./src/app/products.json', 'utf-8')
);

export const getProducts = (): ProductInterface[] => {
  return products;
};

export const findProducts = (
  dto: FindProductDTOInterface
): ProductInterface[] => {
  // dto.color = "blue"; // me tira error pq es solo de lectura
  return products;
};

export const getProductById = (id: string) => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error('Product not found.');
  }
  return product;
};

export const addProduct = (input: CreateProductDTOInterface) => {
  // input.id = Math.random().toString(36).substr(2, 9);
  // Como vimos arriba me podrían sobreescribir y cambiar los datos del input. Para esto es mejor usar el readonly en la interfaz.
  const newProduct = {
    ...input,
    // la idea es q los atributos a continuación se generan automaticamente por la base de datos y al relacionarlo con la categoría mediante el id, pero aquí lo hacemos de manera manual para poder probarlo.
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      name: faker.commerce.department(),
    },
  };
  products.push(newProduct);
  // create json with all products indicating folder and file name:
  fs.writeFileSync(
    './src/app/products.json',
    JSON.stringify(products, null, 2)
  );
  return newProduct;
};

export const addProducts = (input: ProductInterface) => {
  for (let index = 0; index < 50; index++) {
    products.push(input);
  }
  fs.writeFileSync(
    './src/app/products.json',
    JSON.stringify(products, null, 2)
  );
  return products;
};

export const deleteProduct = (id: string) => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error('Product not found.');
  }

  const index = products.indexOf(product);
  products.splice(index, 1);

  fs.writeFileSync(
    './src/app/products.json',
    JSON.stringify(products, null, 2)
  );
};

export const updateProduct = (
  id: string,
  changes: UpdateProductDTOInterface
) => {
  console.log('Entré en la función de updateProduct');

  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error('Product not found.');
  }

  const index = products.indexOf(product);
  products[index] = { ...product, ...changes };

  fs.writeFileSync(
    './src/app/products.json',
    JSON.stringify(products, null, 2)
  );
  return products[index];
};

import { ProductInterface } from './product.model';

const fs = require('fs');

// export const products: ProductInterface[] = []; Si lo quiere iniciar como array vacío

export const products: ProductInterface[] = JSON.parse(
  fs.readFileSync('./src/app/products.json', 'utf-8')
);

export const getProducts = () => {
  return products;
};

export const getProductById = (id: string) => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error('Product not found.');
  }
  return product;
};

export const addProduct = (input: ProductInterface) => {
  // input.id = Math.random().toString(36).substr(2, 9);
  // Como vimos arriba me podrían sobreescribir y cambiar los datos del input. Para esto es mejor usar el readonly en la interfaz.
  products.push(input);
  // create json with all products indicating folder and file name:
  fs.writeFileSync(
    './src/app/products.json',
    JSON.stringify(products, null, 2)
  );
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

export const updateProduct = (id: string, changes: ProductInterface) => {
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

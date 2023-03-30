import { ProductInterface } from './product.model';

export const products: ProductInterface[] = [];

export const addProduct = (input: ProductInterface) => {
  // input.id = Math.random().toString(36).substr(2, 9);
  // Como vimos arriba me podrían sobreescribir y cambiar los datos del input. Para esto es mejor usar el readonly en la interfaz.
  products.push(input);
};

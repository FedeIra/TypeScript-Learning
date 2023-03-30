import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (product: Product) => {
  products.push(product);
};

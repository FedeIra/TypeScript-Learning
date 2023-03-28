// forma de saber que el archivo tiene el modelado de los datos. Acá están los metodos de servicios para poder interactuar con los datos.

import { Product } from './product.model';

export const products: Product[] = [];

export const createProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  let total = products.reduce((acc, product) => acc + product.stock, 0);
  return total;
};

// definimos como vamos a insertar datos en ese array.

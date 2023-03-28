import { createProduct, calcStock, products } from './product.service';

createProduct({
  title: 'Camisa',
  createdAt: new Date(),
  stock: 10,
});

createProduct({
  title: 'remera',
  createdAt: new Date(),
  stock: 15,
  size: 'XL',
});

console.log('products', products);

const total = calcStock();

console.log('total', total);

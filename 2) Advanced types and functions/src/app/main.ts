import { addProduct } from './products/product.service';

addProduct({
  id: 'asd234',
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Camiseta',
  stock: 10,
  size: 'M',
  category: {
    id: 'asd2',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Roupas',
  },
});

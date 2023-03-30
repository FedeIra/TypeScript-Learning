import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'Camiseta',
  createAt: new Date(),
  stock: 10,
  size: 'M',
  category: {
    id: 1,
    name: 'Roupas',
  },
});

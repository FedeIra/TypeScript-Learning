import {
  products,
  getProducts,
  getProductById,
  addProduct,
  addProducts,
  deleteProduct,
  updateProduct,
} from './products/product.service';

// Previously:
// addProduct({
//   id: 'asd234',
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   title: 'Camiseta',
//   stock: 10,
//   size: 'M',
//   category: {
//     id: 'asd2',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     name: 'Roupas',
//   },
// });

/*
!FAKER:
Para generar productos automaticamente para usar la librería faker para tests y desarrollo.
*/

import { faker } from '@faker-js/faker';

//? get products:
const allProducts = getProducts();
// console.log(allProducts);

//? get product by id:
// const productSelected = getProductById('42448e44-6b96-4fdd-b347-db543ae69a95');
// console.log(productSelected);

//? add one product:
const newProduct = addProduct({
  //   id: faker.datatype.uuid(),
  //   createdAt: faker.date.recent(),
  //   updatedAt: faker.date.recent(),
  title: faker.commerce.productName(),
  image: faker.image.imageUrl(),
  description: faker.commerce.productDescription(),
  stock: faker.datatype.number({ min: 10, max: 100 }),
  size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
  color: faker.color.human(),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements(),
  //   category: {
  //     id: faker.datatype.uuid(),
  //     createdAt: faker.date.recent(),
  //     updatedAt: faker.date.recent(),
  //     name: faker.commerce.department(),
  //   },
  categoryId: faker.datatype.uuid(),
});
console.log(newProduct);

//? add many products:
// const newProducts =
// addProducts({
//   id: faker.datatype.uuid(),
//   createdAt: faker.date.recent(),
//   updatedAt: faker.date.recent(),
//   title: faker.commerce.productName(),
//   image: faker.image.imageUrl(),
//   description: faker.commerce.productDescription(),
//   stock: faker.datatype.number({ min: 10, max: 100 }),
//   size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
//   color: faker.color.human(),
//   price: parseInt(faker.commerce.price(), 10),
//   isNew: faker.datatype.boolean(),
//   tags: faker.helpers.arrayElements(),
//   category: {
//     id: faker.datatype.uuid(),
//     createdAt: faker.date.recent(),
//     updatedAt: faker.date.recent(),
//     name: faker.commerce.department(),
//   },
// });

// console.log(newProducts);

//? delete product:
// const deletedProduct = deleteProduct('42448e44-6b96-4fdd-b347-db543ae69a95');
// console.log(deletedProduct);

//? update product:
const updatedProduct = updateProduct('42448e44-6b96-4fdd-b347-db543ae69a95', {
  id: 'IdCambiado',
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Camiseta',
  image: 'https://picsum.photos/200/300',
  description: 'Camiseta de algodón',
  stock: 10,
  size: 'M',
  color: 'blue',
  price: 10,
  isNew: true,
  tags: ['ropa', 'camiseta'],
  category: {
    id: 'asd2',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Roupas',
  },
});
console.log(updatedProduct);

import { ProductMemoryService } from './dtos/service/product-memory.service';

const productMemoryService = new ProductMemoryService();

const newProduct = productMemoryService.create({
  title: 'Product 2',
  price: 200,
  description: 'Description 2',
  images: ['image2'],
  categoryId: 2,
});

console.log(
  '----------------------------------------------------------------------------------'
);

const allProducts = productMemoryService.getProducts();
// console.log(allProducts);

// const productToBeUpdated = allProducts[0];

// const updatedProduct = productMemoryService.updateProduct(
//   productToBeUpdated.id,
//   {
//     title: 'Product 1 updated',
//   }
// );

// const foundProduct = productMemoryService.findOne(updatedProduct.id);

const deletedProduct = productMemoryService.deleteProduct(allProducts[0].id);

console.log(deletedProduct);

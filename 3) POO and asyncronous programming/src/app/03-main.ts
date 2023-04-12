import { ProductHttpService } from './dtos/service/product-http.service';

(async () => {
  try {
    console.time('Tiempo de ejecución de la función:');
    const productHttpService = ProductHttpService.getInstance();

    const allProducts = await productHttpService.getProducts();
    console.log(allProducts.map((item) => item.title));

    const foundProduct = await productHttpService.findOne(1);
    console.log(foundProduct);

    const createdProduct = await productHttpService.create({
      title: 'Producto creado desde el cliente',
      price: 1000,
      description: 'Producto creado desde el cliente',
      images: ['https://picsum.photos/200/300'],
      categoryId: 1,
    });
    console.log(createdProduct);

    const updatedProduct = await productHttpService.updateProduct(1, {
      title: 'Producto actualizado desde el cliente',
    });
    console.log(updatedProduct);

    const deletedProduct = await productHttpService.deleteProduct(1);
    console.log(deletedProduct);

    const allProducts2 = await productHttpService.getProducts();
    console.log(allProducts2.map((item) => item.title));
    console.timeEnd('Tiempo de ejecución de la función:');
  } catch (error) {
    console.error(error);
  }
})();

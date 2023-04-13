/*
!GENERICS:
Example with service: Imagina que tienes funciones que representa el CRUD de tu aplicación, pero puedes tener n cruds por cada módulo. Ahora teniendo esto en cuenta puedes reutilizar las funciones cambiando simplemente su alcance(entidad). Por ejemplo en tu aplicación tienes módulos para crear usuarios y productos. Que pasaría si los métodos de ambos módulos(los servicios) hicieran lo mismo?, aplicando esto puedes abstraer/separar lógica y reutilizarla para el orm siendo que los métodos siempre van a hacer lo mismo lo que cambia es tu entity.

Este es un servicio generico que podemos utilizar solamente pasando el tipo de dato
que queremos utulizar o hacer request, eso nos ahorraria hacer un servicio para
productos, categorias, usuarios etc…
*/
import * as path from 'path';
import * as fs from 'fs';
import axios from 'axios';

import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

const filePathProducts2 = path.resolve(__dirname, 'products2.json');
const filePathCategories2 = path.resolve(__dirname, 'categories2.json');

export class BaseHttpService<TypeClass> {
  constructor(private url: string) {}

  // get all:
  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// get all:
(async () => {
  // products service:
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);
  const products = await productService.getAll();

  console.log('Products:', products);
  fs.writeFileSync(filePathProducts2, JSON.stringify(products, null, 2));

  // category service:
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const categories = await categoryService.getAll();

  console.log('Categories:', categories);
  fs.writeFileSync(filePathCategories2, JSON.stringify(categories, null, 2));
})();

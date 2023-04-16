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
import { UpdateProductDto } from '../product.dto';
import { UpdateCategoryDto } from '../category.dto';

const filePathProducts2 = path.resolve(__dirname, 'products3.json');
const filePathCategories2 = path.resolve(__dirname, 'categories3.json');

export class BaseHttpService<TypeClass> {
  constructor(
    protected url: string, //? protected: access from child class
    private database: fs.PathOrFileDescriptor | undefined
  ) {}

  // get all:
  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    fs.writeFileSync(
      this.database as fs.PathOrFileDescriptor,
      JSON.stringify(data, null, 2)
    );
    return data;
  }

  // update:
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// get all:
const tryServiceGet = async () => {
  // products service:
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1, filePathProducts2);
  const products = await productService.getAll();

  console.log('Products:', products);

  // category service:
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(
    url2,
    filePathCategories2
  );
  const categories = await categoryService.getAll();

  console.log('Categories:', categories);
};

// tryServiceGet();

// update:
const tryServiceUpdate = async () => {
  // products service:
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1, filePathProducts2);
  const updatedProduct = await productService.update<
    Product['id'],
    UpdateProductDto
  >(1, {
    title: 'Updated Product',
  });

  console.log('Updated Product:', updatedProduct);

  // category service:
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(
    url1,
    filePathProducts2
  );
  const updatedCategory = await categoryService.update<
    Category['id'],
    UpdateCategoryDto
  >(1, {
    name: 'Updated Category',
  });

  console.log('Updated Category:', updatedCategory);
};

tryServiceUpdate();

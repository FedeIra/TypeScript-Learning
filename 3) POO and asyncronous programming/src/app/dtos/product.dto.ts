import { Product } from './../models/product.model';
import { Category } from './../models/category.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id']; // This notation is using an index type query which allows accessing the type of a specific property from an object type. So, in this case, the "categoryId" variable is being assigned the type of the "id" property of the "Category" object.
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

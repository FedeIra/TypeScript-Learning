import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from './product.model';

export interface ProductService {
  getProducts(): Product[] | Promise<Product[]>;
  findOne(
    id: Product['id']
  ): Product | undefined | Promise<Product | undefined>; // undefined is for when the product is not found, promise/product is when the product is found and the promise is resolved with the product found as a result and Promise/undefined is when the promise is resolved with undefined as a result.
  create(dto: CreateProductDto): Product | Promise<Product>;
  // add(product: Product): Product | Promise<Product>;
  // addProducts(input: Product[]): Product[] | Promise<Product[]>;
  updateProduct(
    id: Product['id'],
    changes: UpdateProductDto
  ): Product | Promise<Product>;
  deleteProduct(id: Product['id']): Product | Promise<Product>;
}

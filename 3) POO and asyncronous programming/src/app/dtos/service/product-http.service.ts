import { ProductService } from '../../models/product-service.model';
import { Product } from '../../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../product.dto';
import axios from 'axios';

export class ProductHttpService implements ProductService {
  private static instance: ProductHttpService | null = null; // singleton

  private url = 'https://api.escuelajs.co/api/v1/products';

  private constructor() {} // singleton

  public static getInstance(): ProductHttpService {
    if (ProductHttpService.instance === null) {
      ProductHttpService.instance = new ProductHttpService();
    }
    return ProductHttpService.instance;
  } // singleton

  async getProducts() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async findOne(id: Product['id']) {
    const { data } = await axios.get<Product | undefined>(`${this.url}/${id}`);
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }
  // add(product: Product): Product {
  //   throw new Error('Method not implemented.');
  // }
  // addProducts(input: Product[]): Product[] {
  //   throw new Error('Method not implemented.');
  // }
  async updateProduct(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
  async deleteProduct(id: Product['id']) {
    const { data } = await axios.delete<Product>(`${this.url}/${id}`);
    return data;
  }
}

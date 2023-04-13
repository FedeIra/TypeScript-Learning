import { Product } from '../../models/product.model';
import { UpdateProductDto } from '../product.dto';
import { BaseHttpService } from './base-http.service';
import { ProductHttp2Service } from './product-http2.service';
import { filePath } from './product-memory.service';

// export class ProductCRUDService {
//   private url = 'https://api.escuelajs.co/api/v1/products';
//   private http = new BaseHttpService<Product>(this.url, filePath);

//   async updateProduct(id: Product['id'], dto: UpdateProductDto) {
//     const updatedProduct = await this.http.update(id, dto);
//     return updatedProduct;
//   }
// }

export class ProductCRUDService2 {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttp2Service(this.url, filePath);

  async updateProduct(id: Product['id'], dto: UpdateProductDto) {
    this.http.exampleRequest();
    return this.http.update(id, dto);
  }
}

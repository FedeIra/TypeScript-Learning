import { Product } from '../../models/product.model';
import { BaseHttpService } from './base-http.service';

export class ProductHttp2Service extends BaseHttpService<Product> {
  exampleRequest() {
    this.url;
  }
}

import { SeeProduct } from '../models/seeProduct.js';
import { CatalogService } from '../services/vtex/catalog/catalogService.js';

export type GetProductInput = {
  id: number;
};

export type GetProductOutput = SeeProduct;

export class getProductUseCase {
  constructor(private catalogService: CatalogService) {}

  async getProduct(input: GetProductInput): Promise<GetProductOutput> {
    return this.catalogService.getProductById(input);
  }
}

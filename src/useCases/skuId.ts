import { SkuId } from '../models/skuId.js'
import { CatalogService } from '../services/vtex/catalog/catalogService.js'

export type CreateSkuIdInput = {
  productId: number
  name: string
}
export type CreateSkuIdOutput = SkuId

export class CreateSkuIdUseCase {
  constructor(
    private catalogService: CatalogService,
  ) {}

  async createSkuId(input: CreateSkuIdInput): Promise<CreateSkuIdOutput> {
    return this.catalogService.createSkuId(input)
  }
}

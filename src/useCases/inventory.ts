import { CatalogService } from '../services/vtex/catalog/catalogService.js'

export type EnableInventoryInput = {
  quantity: number | null
  warehouseId: string
  skuId: number
}

export type EnableInventoryOutput = void

export class EnableInventoryUseCase {
  constructor(
    private catalogService: CatalogService,
  ) {}

  async enableInventory(input: EnableInventoryInput): Promise<EnableInventoryOutput> {
    return this.catalogService.enableInventory(input)
  }
}

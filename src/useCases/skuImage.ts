import { SkuImage } from "../models/skuImage.js"
import { CatalogService } from "../services/vtex/catalog/catalogService.js"

export type CreateSkuImageInput = {
    title: string,
    url: string,
    skuId: number
}

type CreateSkuImageOutput = void

export class CreateSkuImageUseCase {
    constructor(
        private catalogService: CatalogService
    ){}

    async createSkuImage(input:CreateSkuImageInput): Promise<CreateSkuImageOutput>{
        return await this.catalogService.createSkuImage(input)
    }
}
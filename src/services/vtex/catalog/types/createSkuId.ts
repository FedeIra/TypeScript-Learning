import { VtexSkuSchema } from './sku.js'

export type CreateSkuIdPayload = {
    ProductId: number
    Name: string
    PackagedHeight: number | null
    PackagedLength: number | null
    PackagedWidth: number | null
    PackagedWeightKg: number | null
    ActivateIfPossible: boolean
}

export const createSkuIdResponseSchema = VtexSkuSchema

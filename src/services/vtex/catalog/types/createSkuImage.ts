import { number, z } from 'zod'
import { SkuImage } from '../../../../models/skuImage.js'

const{ object, boolean, string } = z

export const CreateSkuImageSchema = object({
  Url: string(),
  Name: string(),
  SkuId: number()
})

export type CreateSkusImagePayload = z.infer<typeof CreateSkuImageSchema>

import { CreateSkuImageSchema } from "./createSkuImage.js";

export type createSkuImagePayload = {
    IsMain: boolean 
    Label: string 
    Name: string 
    Text: string | null
    Url: string
}

export const createSkuImageResponseSchema =  CreateSkuImageSchema
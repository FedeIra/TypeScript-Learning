import { Express, Request } from 'express'
import { VtexClient } from '../../pkg/vtexClient/vtexClient.js'
import { env } from '../config.js'
import axios from 'axios'
import { VtexCatalogService } from '../../src/services/vtex/catalog/catalogService.js'
import { CreateSkuImageUseCase } from '../../src/useCases/skuImage.js'

import { boolean, string, object } from 'zod'

export const CreateSkuImagePayloadSchema = object({
  title: string(),
  url: string().url()
})

export function createSkuImageHandler(app:Express){

    app.post('/sku/:skuId/image', async(req, res)=>{

        try{
            const vtexBaseUrl = env.vtexBaseUrl.get()
            const authToken = env.authToken.get()

            const { body } = req
            const { skuId: skuIdParam } = req.params
            const skuId = parseInt(skuIdParam)
            if (Number.isNaN(skuId)) {
                res.sendStatus(400).send(`invalid skuId: ${skuIdParam}`)
                return 
            }

            const vtexClient = new VtexClient(axios.create(), vtexBaseUrl, authToken)
            const catalogService = new VtexCatalogService(vtexClient)
            const creteSkuImageUseCase = new CreateSkuImageUseCase(catalogService)
            
            const { title, url } = await CreateSkuImagePayloadSchema.parseAsync(body)

            await creteSkuImageUseCase.createSkuImage({
                skuId,
                title,
                url
            })

            res.sendStatus(201).send("Created")

        }catch(e){
            console.error('Error: ', e)

            if(e instanceof Error){
                res.status(400).json({message: e.message})
            }
        }
    })
}
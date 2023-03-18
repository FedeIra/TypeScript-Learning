import axios from 'axios'
import { Express, query, Request, Response } from 'express'
import { z } from 'zod'
import { VtexClient } from '../../pkg/vtexClient/vtexClient.js'
import { VtexCatalogService } from '../../src/services/vtex/catalog/catalogService.js'
import { EnableInventoryInput as UseCaseEnableInventoryInput, EnableInventoryUseCase } from '../../src/useCases/inventory.js'
import { env } from '../config.js'

const enableInventorySchema = z.object({
  quantity: z.number().nullable(),
  warehouseId: z.string(),
  skuId: z.number()
})


type EnableInventoryInput = z.infer<typeof enableInventorySchema>

export function enableInventoryHandler(app: Express) {
  app.post('/inventory/enable', async (req: Request, res: Response) => {
    try {
      const baseUrl = env.vtexBaseUrl.get()
      console.log(baseUrl)
      const authToken = env.authToken.get()

      const vtexClient = new VtexClient(axios.create(), baseUrl, authToken)
      const vtexCatalogService = new VtexCatalogService(vtexClient)
      const enableInventoryUseCase = new EnableInventoryUseCase(vtexCatalogService)

      const rawBody = req.body
      const input = enableInventorySchema.parse(rawBody)

      const inventory = await enableInventoryUseCase.enableInventory(toUseCaseInput(input))

      res.json(inventory)
    } catch (e) {
      // TODO
      console.error(e)

      if (e instanceof Error) {
        res.status(400).json({
          error: e.message,
        })
      }
    }
  })
}

function toUseCaseInput(input: EnableInventoryInput): UseCaseEnableInventoryInput {
  return {
    quantity: input.quantity,
    skuId: input.skuId,
    warehouseId: input.warehouseId
  }
}
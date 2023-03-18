import axios from 'axios'
import { Express, Request, Response } from 'express'
import { z } from 'zod'
import { VtexClient } from '../../pkg/vtexClient/vtexClient.js'
import { VtexCatalogService } from '../../src/services/vtex/catalog/catalogService.js'
import { CreateCategoryInput as UseCaseCreateCategoryInput, CreateCategoryUseCase } from '../../src/useCases/category.js'
import { env } from '../config.js'

const createCategorySchema = z.object({
  name: z.string(),
  keywords: z.array(z.string()),
  title: z.string(),
  description: z.string(),
  parentCategoryId: z.number().optional(),
})

type CreateCategoryInput = z.infer<typeof createCategorySchema>

export function createCategoryHandler(app: Express) {
  app.post('/category', async (req: Request, res: Response) => {
    try {
      const baseUrl = env.vtexBaseUrl.get()
      const authToken = env.authToken.get()

      const vtexClient = new VtexClient(axios.create(), baseUrl, authToken)
      const vtexCatalogService = new VtexCatalogService(vtexClient)
      const createCategoryUseCase = new CreateCategoryUseCase(vtexCatalogService)

      const rawBody = req.body
      const input = createCategorySchema.parse(rawBody)

      const category = await createCategoryUseCase.createCategory(toUseCaseInput(input))

      res.json(category)
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

function toUseCaseInput(input: CreateCategoryInput): UseCaseCreateCategoryInput {
  return {
    name: input.name,
    parentCategoryId: input.parentCategoryId,
    description: input.description,
    keywords: input.keywords,
    title: input.title,
  }
}
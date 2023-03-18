import axios from 'axios';
import { Express, Request, Response } from 'express';
import { z } from 'zod';
import { VtexClient } from '../../pkg/vtexClient/vtexClient.js';
import { VtexCatalogService } from '../../src/services/vtex/catalog/catalogService.js';
import {
  CreateProductInput as UseCaseCreateProductInput,
  CreateProductUseCase,
} from '../../src/useCases/product.js';
import { env } from '../config.js';

const createProductSchema = z.object({
  name: z.string(),
  categoryId: z.number(),
  brandId: z.number(),
});

type CreateProductInput = z.infer<typeof createProductSchema>;

export function createProductHandler(app: Express) {
  app.post('/product', async (req: Request, res: Response) => {
    try {
      const baseUrl = env.vtexBaseUrl.get();
      const authToken = env.authToken.get();

      const vtexClient = new VtexClient(axios.create(), baseUrl, authToken);
      const vtexCatalogService = new VtexCatalogService(vtexClient);
      const createProductUseCase = new CreateProductUseCase(vtexCatalogService);

      const rawBody = req.body;

      const input = createProductSchema.parse(rawBody);

      const newProduct = await createProductUseCase.createProduct(
        toUseCaseInput(input)
      );

      res.json(newProduct);
    } catch (e) {
      // TODO
      console.error(e);

      if (e instanceof Error) {
        res.status(400).json({
          error: e.message,
        });
      }
    }
  });
}

function toUseCaseInput(input: CreateProductInput): UseCaseCreateProductInput {
  return {
    name: input.name,
    categoryId: input.categoryId,
    brandId: input.brandId,
  };
}

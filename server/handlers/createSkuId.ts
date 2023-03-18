import axios from 'axios';
import { Express, Request, Response } from 'express';
import { z } from 'zod';
import { VtexClient } from '../../pkg/vtexClient/vtexClient.js';
import { VtexCatalogService } from '../../src/services/vtex/catalog/catalogService.js';
import {
  CreateSkuIdInput as UseCaseCreateSkuIdInput,
  CreateSkuIdUseCase,
} from '../../src/useCases/skuId.js';
import { env } from '../config.js';

const createSkuIdSchema = z.object({
  name: z.string(),
  productId: z.number(),
});

type CreateSkuInput = z.infer<typeof createSkuIdSchema>;

export function createSkuHandler(app: Express) {
  app.post('/sku', async (req: Request, res: Response) => {
    try {
      const baseUrl = env.vtexBaseUrl.get();
      const authToken = env.authToken.get();

      const vtexClient = new VtexClient(axios.create(), baseUrl, authToken);
      const vtexCatalogService = new VtexCatalogService(vtexClient);
      const createSkuUseCase = new CreateSkuIdUseCase(vtexCatalogService);

      const rawBody = req.body;

      const input = createSkuIdSchema.parse(rawBody);

      const newSku = await createSkuUseCase.createSkuId(
        toUseCaseInput(input)
      );

      res.json(newSku);
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

function toUseCaseInput(input: CreateSkuInput): UseCaseCreateSkuIdInput {
  return {
    name: input.name,
    productId: input.productId
  };
}

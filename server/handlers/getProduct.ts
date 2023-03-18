import axios from 'axios';
import { Express, Request, Response } from 'express';
import { z } from 'zod';
import { VtexClient } from '../../pkg/vtexClient/vtexClient.js';
import { VtexCatalogService } from '../../src/services/vtex/catalog/catalogService.js';
import {
  GetProductInput as UseCaseGetProductInput,
  getProductUseCase,
} from '../../src/useCases/getProduct.js';
import { env } from '../config.js';

const getProductSchema = z.object({
  id: z.number(),
});

type GetProductInput = z.infer<typeof getProductSchema>;

export function getProductHandler(app: Express) {
  app.get('/product', async (req: Request, res: Response) => {
    try {
      const baseUrl = env.vtexBaseUrl.get();
      const authToken = env.authToken.get();

      const vtexClient = new VtexClient(axios.create(), baseUrl, authToken);
      const vtexCatalogService = new VtexCatalogService(vtexClient);
      const seeProductUseCase = new getProductUseCase(vtexCatalogService);

      const rawBody = req.body;

      const input = getProductSchema.parse(rawBody);

      const seeProduct = await seeProductUseCase.getProduct(
        toUseCaseInput(input)
      );

      res.json(seeProduct);
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

function toUseCaseInput(input: GetProductInput): UseCaseGetProductInput {
  return {
    id: input.id,
  };
}

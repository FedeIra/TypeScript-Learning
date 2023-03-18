import axios from 'axios';
import { Express, Request, Response } from 'express';
import { z } from 'zod';
import { VtexClient } from '../../pkg/vtexClient/vtexClient.js';
import { VtexCatalogService } from '../../src/services/vtex/catalog/catalogService.js';
import {
  CreateBrandInput as UseCaseCreateBrandInput,
  CreateBrandUseCase,
} from '../../src/useCases/brand.js';
import { env } from '../config.js';

const createBrandSchema = z.object({
  name: z.string(),
});

type CreateBrandInput = z.infer<typeof createBrandSchema>;

export function createBrandHandler(app: Express) {
  app.post('/brand', async (req: Request, res: Response) => {
    try {
      const baseUrl = env.vtexBaseUrl.get();
      const authToken = env.authToken.get();

      const vtexClient = new VtexClient(axios.create(), baseUrl, authToken);
      const vtexCatalogService = new VtexCatalogService(vtexClient);
      const createBrandUseCase = new CreateBrandUseCase(vtexCatalogService);

      const rawBody = req.body;

      const input = createBrandSchema.parse(rawBody);

      const newBrand = await createBrandUseCase.createBrand(
        toUseCaseInput(input)
      );

      res.json(newBrand);
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

function toUseCaseInput(input: CreateBrandInput): UseCaseCreateBrandInput {
  return {
    name: input.name,
  };
}

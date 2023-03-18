import express, { json } from 'express';
import { env } from './config.js';
import { createProductHandler } from './handlers/createProduct.js';
import { config as configEnvVars } from 'dotenv';
import { createCategoryHandler } from './handlers/createCategory.js';
import { createBrandHandler } from './handlers/createBrand.js';
import { enableInventoryHandler } from './handlers/createInventory.js';
import { createSkuHandler } from './handlers/createSkuId.js';
import { createSkuImageHandler } from './handlers/createSkuImage.js';
import { getProductHandler } from './handlers/getProduct.js';

configEnvVars();

const app = express();
app.use(json());

createProductHandler(app);
createCategoryHandler(app);
enableInventoryHandler(app);
createBrandHandler(app);
createSkuHandler(app);
createSkuImageHandler(app);
getProductHandler(app);

const port = env.port.get();
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});

import { VtexClient } from '../../../../pkg/vtexClient/vtexClient.js';
import { Product } from '../../../models/product.js';
import { CreateProductInput } from '../../../useCases/product.js';
import {
  CreateProductPayload,
  createProductResponseSchema,
} from './types/createProduct.js';
import { toModelProduct } from './types/product.js';
import { Brand } from '../../../models/brand.js';
import { CreateBrandInput } from '../../../useCases/brand.js';
import {
  CreateBrandPayload,
  createBrandResponseSchema,
  toModelBrandBad,
} from './types/createBrand.js';
import { toModelBrand } from './types/brand.js';
import {
  CreateCategoryPayload,
  createCategoryResponseSchema,
} from './types/createCategory.js';
import { Category } from '../../../models/category.js';
import { toModelCategory } from './types/category.js';
import { CreateCategoryInput } from '../../../useCases/category.js';
import { EnableInventoryInput as EnableInventoryInput } from '../../../useCases/inventory.js';
import { VtexEnableInventoryPayload } from './types/createInventory.js';
import {
  CreateSkuIdPayload,
  createSkuIdResponseSchema,
} from './types/createSkuId.js';
import { SkuId } from '../../../models/skuId.js';
import { toModelSku } from './types/sku.js';
import { CreateSkuIdInput } from '../../../useCases/skuId.js';
import { CreateSkuImageInput } from '../../../useCases/skuImage.js';
import { SkuImage } from '../../../models/skuImage.js';
import {
  CreateSkusImagePayload,
  CreateSkuImageSchema,
} from './types/createSkuImage.js';
import { SeeProduct } from '../../../models/seeProduct.js';
import { GetProductInput } from '../../../useCases/getProduct.js';
import {
  SeeProductPayload,
  seeProductResponseSchema,
} from './types/getProduct.js';
import { toModelSeeProduct } from './types/seeProduct.js';

export interface CatalogService {
  createProduct(input: CreateProductInput): Promise<Product>;
  createBrand(input: CreateBrandInput): Promise<Brand>;
  createCategory(params: CreateCategoryInput): Promise<Category>;
  enableInventory(input: EnableInventoryInput): Promise<void>;
  createSkuId(input: CreateSkuIdInput): Promise<SkuId>;
  createSkuImage(input: CreateSkuImageInput): Promise<void>;
  getProductById(params: GetProductInput): Promise<SeeProduct>;
}

export class VtexCatalogService implements CatalogService {
  constructor(private client: VtexClient) {}

  async createProduct(params: CreateProductInput): Promise<Product> {
    const { name, categoryId, brandId } = params;

    const payload: CreateProductPayload = {
      Name: name,
      CategoryId: categoryId,
      BrandId: brandId,
    };

    const raw = await this.client.send({
      method: 'post',
      path: 'catalog/pvt/product',
      payload,
    });

    const response = createProductResponseSchema.parse(raw);
    const newProduct = toModelProduct(response);

    return newProduct;
  }

  async createBrand(params: CreateBrandInput): Promise<Brand> {
    const { name } = params;
    const payload: CreateBrandPayload = {
      Name: name,
    };

    const raw = await this.client.send({
      method: 'post',
      path: 'catalog/pvt/brand',
      payload,
    });

    const response = createBrandResponseSchema.parse(raw);
    const newBrand = toModelBrandBad(response);
    return newBrand;
  }

  async createCategory(params: CreateCategoryInput): Promise<Category> {
    const { name, description, keywords, title, parentCategoryId } = params;
    const payload: CreateCategoryPayload = {
      Name: name,
      FatherCategoryId: parentCategoryId ?? null,
      Title: title,
      ShowBrandFilter: true,
      ShowInStoreFront: true,
      IsActive: true,
      ActiveStoreFrontLink: true,
      Description: description,
      KeyWords: keywords.join(','),
      Score: null,
      StockKeepingUnitSelectionMode: 'SPECIFICATION',
      GlobalCategoryId: 1,
    };

    const raw = await this.client.send({
      method: 'post',
      path: 'catalog/pvt/category',
      payload,
    });

    const response = createCategoryResponseSchema.parse(raw);
    const category = toModelCategory(response);

    return category;
  }

  async enableInventory(input: EnableInventoryInput): Promise<void> {
    const { warehouseId, skuId, quantity } = input;
    const payload: VtexEnableInventoryPayload = {
      UnlimitedQuantity: quantity === null,
      Quantity: quantity,
    };

    await this.client.send({
      method: 'put',
      path: `logistics/pvt/inventory/skus/${skuId}/warehouses/${warehouseId}`,
      payload,
    });
  }
  async createSkuId(input: CreateSkuIdInput): Promise<SkuId> {
    const payload: CreateSkuIdPayload = {
      ProductId: input.productId,
      Name: input.name,
      PackagedHeight: 1,
      PackagedLength: 1,
      PackagedWidth: 1,
      PackagedWeightKg: 1,
      ActivateIfPossible: true,
    };

    const raw = await this.client.send({
      method: 'post',
      path: 'catalog/pvt/stockkeepingunit',
      payload,
    });

    const response = createSkuIdResponseSchema.parse(raw);
    const skuId = toModelSku(response);

    return skuId;
  }

  async createSkuImage(input: CreateSkuImageInput): Promise<void> {
    const { title, url, skuId } = input;

    const payload: CreateSkusImagePayload = {
      Name: title,
      Url: url,
      SkuId: skuId,
    };

    await this.client.send({
      method: 'post',
      path: `catalog/pvt/stockkeepingunit/${skuId}/file`,
      payload,
    });
  }

  async getProductById(input: GetProductInput): Promise<SeeProduct> {
    const { id } = input;

    const payload: SeeProductPayload = {
      Id: id,
    };

    const raw = await this.client.send({
      method: 'get',
      path: `catalog_system/pvt/products/productget/${id}`,
      payload,
    });

    const response = seeProductResponseSchema.parse(raw);
    const product = toModelSeeProduct(response);

    return product;
  }
}

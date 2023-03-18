import { z } from 'zod';
import { SeeProduct } from '../../../../models/seeProduct.js';

export const VtexSeeProductSchema = z.object({
  Id: z.number(),
  Name: z.string(),
  DepartmentId: z.number(),
  CategoryId: z.number(),
  BrandId: z.number(),
  LinkId: z.string(),
  RefId: z.string().nullable(),
  IsVisible: z.boolean(),
  Description: z.string().nullable(),
  DescriptionShort: z.string().nullable(),
  ReleaseDate: z.string().nullable(),
  KeyWords: z.string().nullable(),
  Title: z.string().nullable(),
  IsActive: z.boolean(),
  TaxCode: z.string().nullable(),
  MetaTagDescription: z.string().nullable(),
  ShowWithoutStock: z.boolean(),
  ListStoreId: z.array(z.number()).nullable(),
});

type VtexSeeProduct = z.infer<typeof VtexSeeProductSchema>;

export function toModelSeeProduct(p: VtexSeeProduct): SeeProduct {
  return {
    id: p.Id,
    name: p.Name,
    departmentId: p.DepartmentId,
    categoryId: p.CategoryId,
    brandId: p.BrandId,
    linkId: p.LinkId,
    refId: p.RefId,
    isVisible: p.IsVisible,
    description: p.Description,
    descriptionShort: p.DescriptionShort,
    releaseDate: p.ReleaseDate,
    keyWords: p.KeyWords,
    title: p.Title,
    isActive: p.IsActive,
    taxCode: p.TaxCode,
    metaTagDescription: p.MetaTagDescription,
    showWithoutStock: p.ShowWithoutStock,
    listStoreId: p.ListStoreId,
  };
}

import { Category } from '../../models/category.model';

export interface CreateCategoryDto extends Omit<Category, 'id'> {}

export interface UpdateCategoryDto extends Partial<CreateCategoryDto> {}

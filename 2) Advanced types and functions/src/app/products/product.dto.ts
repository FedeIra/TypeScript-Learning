import { ProductInterface } from './product.model';

export interface CreateProductDTOInterface
  extends Omit<
    ProductInterface,
    'id' | 'createdAt' | 'updatedAt' | 'category'
  > {
  categoryId: string; // le agrego este nuevo atributo que no lo requiere la interfaz base (ProductInterface) pero sí la necesito para crear un producto nuevo y relacionarlo a una categoría. Esto no lo podría hacer en tipos pq no se puede extender un type.
}

// Tenemos el opuesto al omit que se llama pick:
type example = Pick<ProductInterface, 'color' | 'description'>; //? Pick: seleccionar propiedades de una interfaz o type (en este caso, selecciono color y description)

import { ProductInterface } from './product.model';

//! Omit:
export interface CreateProductDTOInterface
  extends Omit<
    ProductInterface,
    'id' | 'createdAt' | 'updatedAt' | 'category'
  > {
  categoryId: string; // le agrego este nuevo atributo que no lo requiere la interfaz base (ProductInterface) pero sí la necesito para crear un producto nuevo y relacionarlo a una categoría. Esto no lo podría hacer en tipos pq no se puede extender un type.
}

//! Pick:
// Tenemos el opuesto al omit que se llama pick:
type example = Pick<ProductInterface, 'color' | 'description'>; //? Pick: seleccionar propiedades de una interfaz o type (en este caso, selecciono color y description)

//! Partial:
// quiero que no sea obligatorio cada campo en el update:
// Con type:
type exampleDTOUpdateProduct1 = Partial<ProductInterface>; //? Partial: hace que todos los campos sean opcionales

// Con interface:
export interface UpdateProductDTOInterface
  extends Partial<CreateProductDTOInterface>,
    Pick<ProductInterface, 'updatedAt'> {}
// ahora con partial hago q todos los atributos sean opcionales y al usar el DTOInterface de product no permito q cambien el id, createdAt, updatedAt y categoryId. Podemos reutilizar nuestro DTO normalmente, ya que son interfaces. Agrego pick de updatedAt pq quiero q se actualice la fecha de actualización.

//! Required:
// quiero que sea obligatorio cada campo en el update:
// Con type:
type exampleDTOUpdateProduct2 = Required<ProductInterface>; //? Required: hace que todos los campos sean obligatorios. Incluso el size que era optativo pasa a ser obligatorio.

//! Read only:
// DTO para buscar producto con filtro, pero no quiero que sea posible modificar los campos, para eso los pongo en read only:

//con type:
type example3 = Readonly<ProductInterface>; //? Readonly: hace que todos los campos sean de solo lectura

// con interface:
export interface FindProductDTOInterface
  extends Readonly<Partial<ProductInterface>> {} // quiero q sea de solo lectura y opcional.

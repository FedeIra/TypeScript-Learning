import { CategoryInterface } from '../categories/category.model';
import { BaseModelInterface } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

//En algunos casos las clases pueden tener el mismo nombre que las interfaces. Por esa razón es recomendable nombrar a las interfaces con el prefijo Interface. Aquí un ejemplo de lo que era antes y después de renombrar la interfaz:

// sin extensión:
interface ProductInterfaceWithoutExtension {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  stock: number;
  size?: Sizes;
  category: CategoryInterface; // anidamiento re utilizando código
}

//con extensión:
export interface ProductInterface extends BaseModelInterface {
  // gracias al extends tengo los demás campos de la interfaz base (BaseModelInterface: id, createdAt, updatedAt)
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  isNew: boolean;
  tags: string[];
  category: CategoryInterface;
}

//! DTO: ver dto-notes.ts

// en tipos:
type CreateProductDTO = Omit<
  ProductInterface,
  'id' | 'createdAt' | 'updatedAt' | 'category'
>; //? Omit: omitir propiedades de una interfaz o type (en este caso, omito id, createdAt y updatedAt) y la categoría

// en interfaces:
// export interface CreateProductDTOInterface
//   extends Omit<
//     ProductInterface,
//     'id' | 'createdAt' | 'updatedAt' | 'category'
//   > {
//   categoryId: string; // le agrego este nuevo atributo que no lo requiere la interfaz base (ProductInterface) pero sí la necesito para crear un producto nuevo y relacionarlo a una categoría. Esto no lo podría hacer en tipos pq no se puede extender un type.
// }

// Una buena práctica es que los DTO's tengan su propio archivo.

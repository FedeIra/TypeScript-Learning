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
  stock: number;
  size?: Sizes;
  category: CategoryInterface;
}

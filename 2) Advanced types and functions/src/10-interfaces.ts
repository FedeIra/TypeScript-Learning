/*
!INTERFACES:
*/

type Sizes = 'S' | 'M' | 'L' | 'XL';

type Product = {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
};

//? refactor to interface:
// Diferencias con el type:
// 1) Necesita el objeto para ser usado.
// 2) Es para un conjunto de valores. De lo contrario, directamente se usa el type.
// 3) Se puede extender. Un type no se puede extender.
// 4) Se puede implementar.
// 5) Se puede usar en clases.

interface ProductInterface {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}

const products: ProductInterface[] = [];

products.push({
  id: 1,
  title: 'Camiseta',
  createAt: new Date(),
  stock: 10,
});

const createProduct = (product: ProductInterface) => {
  products.push(product);
};

createProduct({
  id: 2,
  title: 'Pantalón',
  createAt: new Date(),
  stock: 10,
  size: 'M',
});

console.log('products:', products);

/* Con las interfaces podemos heredar otras interfaces, y con los type no podemos hacer eso. */

interface HumanInterface {
  name: string;
  lastName: string;
}
interface HeroInterface extends HumanInterface {
  superPower: string;
}

const hero: HeroInterface = {
  name: 'Fede',
  lastName: 'Cambiado',
  superPower: 'Super fuerza',
};

console.log('hero:', hero); // { name: 'Fede', lastName: 'Cambiado', superPower: 'Super fuerza' }

/*
¿Cuándo usar interfacez?

cuando necesites crear un “contrato” de las propiedades y funciones que un objeto debe tener. Son muy útiles cuando el mismo objeto se debe repetir en varios archivos diferentes. Prácticamente, se utilizan para tipar nuestro código.

¿Cuando usar clases?

Cuando quieras crear objetos que tengan una función real en el código (más allá de solo tipar nuestras variables). Cuando necesites usar un constructor para inicializar el objeto y que tenga default values, ó cuando requieras crear nuevas instancias de eso objeto (con la palabra “new”).
*/

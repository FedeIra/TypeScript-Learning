/*
!DTO's:
Los DTO es abreviatura para referirnos a los Data Transfer Objects. Son objetos que se utilizan para transferir datos entre diferentes capas de una aplicación. En este caso, vamos a utilizarlos para transferir datos entre el controlador y el servicio.

Teníamos los siguientes datos:
{
  "id": 1,
  "title": "Camisa",
  "price": 100
  "createdAt": 2021-08-10T20:00:00.000Z,
  "updatedAt": 2021-08-10T20:00:00.000Z
}

Sin embargo, al momento de la creación no los necesitabamos el id, el createdAt y updatedAt que se crean automáticamente.

Entonces vamos a omitir estos campos q si bien siguen con la entidad al momento de la creación no los necesitamos ya que, por ejemplo, los inserta automaticamente la base de datos. En el resultado nos tiene que llegar también estos datos.

Estos datos se los llama DTO's o datos de transferencia de objetos.

Vamos a aplicarlo en los modelos de datos de producto.
Omit<ProductInterface, 'id' | 'createdAt' | 'updatedAt'>

También queremos omitir crear una nueva categoría pq cuando creamos un producto, en realidad la relacionamos a una categoría ya creada.

Una buena práctica es que los DTO's tengan su propio archivo.

En addProducts cambiamos el tipo de dato de ProductInterface a CreateProductDTO ya que ya no vamos a necesitar recibir todos los datos sino tan solo los necesarios que se indican en el dto.

Así que podemos omitir algunos parámetros o campos que en ese particular momento no hacen falta, esto no significa que no están el objeto, sino que al momento de la creación solo necesitamos ciertos parámetros y la API, la base de datos se encargará de insertar lo demás.

? Omit:
Con omit podemos omitir las propiedades, campos o llaves que quieramos.
*/

// interface InterfaceName extends Omit<TypeOrInterface, keyToOmit1 | ... | keyToOmitN> {
// 	statements
// }

// type typeNameDto = Omit<TypeOrInterface, keyToOmit1 | ... | keyToOmitN>

/*
? Pick:
Es lo contrario de Omit, aquí yo elijo los campos que quiero que estén en mi type o interface.

interface InterfaceName extends Pick<TypeOrInterface, keyToPick1 | ... | keyToPickN> {
	statements
}

type typeNameDto = Pick<TypeOrInterface, keyToPick1 | ... | keyToPickN>


Una buena práctica es que los DTOs tengan su propio archivo.

?Partial:
Partial<Type> es un tipo que toma todas las propiedades de Type y las hace opcionales.

Nos permite colocar todos los parámetros de una interface como opcionales, sin necesidad que colocar ? parámetro por parámetro.

?Required:
Required<Type> es un tipo que toma todas las propiedades de Type y las hace requeridas.

Ejemplos:
*/
interface Product {
  title: string;
  price: number;
  category: string;
  size?: string;
}

type UpdateProduct = Partial<Product>;
type StrictProduct = Required<Product>;

/* De esa forma en UpdateProduct, todos los valores de Product van a ser opcionales y a la inversa en el caso de StrictProduct

? Readonly:
Con esta propiedad le decimos TypeScript que todos los parámetros solamente sean de lectura, por ende nos pueden ser mutados a lo largo de nuestro programa.

Readonly<Type> es un tipo que toma todas las propiedades de Type y las hace de solo lectura.

interface InterfaceName extends Readonly<Interface> {
  statements;
}

type TypeName = Readonly<TypeOrInterface>;

Entonces al momento de definir su funcionalidad en product.service, no puedo modificar los valores de los productos, solo puedo leerlos.
*/

interface Product {
  id: number;
  name: string;
  color: string;
  description: string;
  model: string;
  country: string;
}

// interface SearchProduct extends Product Readonly<Product>

/*
?Anidamiento de utility types
Podemos utilizar el anidamiento para poder fusionar las distintas características de los diferentes utility types.

interface InterfaceName extends UtilityType1<UtilityTypeN<Interface>> {
		statements
}

export interface FindProductDto extends Readonly<Partial<Product>> {
		statements
}
*/

/*
? Acceder al tipado por indice:
Podemos acceder al tipado de un objeto por medio de su indice.

Podemos acceder al tipado de una interface por media de bracket notation, al colocar una propiedad entre comillas dentro de los brackets vamos a obtener por resultado el tipo de dato que tiene esa propiedad.

Al colocar el tipo de dato de esta forma nos evitamos los dolores de cabeza cuando se nos cambien algún tipo de dato de nuestra interface por alguna razón.

Ejemplo:
*/
interface ProductExample {
  id: string;
  name: string;
  color: string;
  description: string;
  model: string;
  country: string;
}

const updateProduct = (idSearch: ProductExample['id']) => {
  return typeof idSearch;
};

updateProduct('1'); // string
// updateProduct(1); // number

/* Ejemplo práctico:
planteamos el posible escenario de que una compañía desea manipular sus datos de(color de auto, modelo, y num de placa) como strings o number pero no ambos, aun no se ha decidido la misma.
entonces no se desea retrasar el proyecto por lo tanto se define que con una simple variables definir el tipado de nuestras propiedades.
Así que para el momento en el que se decida o simplemente quiera cambiar el tipado solo se haga un cambio de la variable.
*/

type assetsCartype = number; // OPC1

//ó

// type assetsCartype = string; // OPC2

// le decimos que la empresa prefiere manejar o bien con numeros o con strings
interface Car {
  id: number;
  code: assetsCartype;
  color: assetsCartype;
  model: assetsCartype;
}

const verifyCarModel = (color: Car['color']) => {
  if (typeof color === 'number') {
    console.log('Se ha decidido el tipado por: numbers');
  } else if (typeof color === 'string') {
    console.log('Se ha decidido el tipado por: strings');
  }
};

verifyCarModel(0xff0000); // OPC 1 (recuerden que en hexadecimal la notacion es: 0x + numeroEnHex)

// verifyCarModel('red'); // OPC 2

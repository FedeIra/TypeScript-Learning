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

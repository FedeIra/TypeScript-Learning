// la sobrecarga de funciones no se puede hacer con funciones const

/* Problema con el retorno de funciones
Cuando tenemos una función que retorna más de un solo tipo de dato y a ese resultado lo queremos utilizar en otra parte de nuestro programa, no vamos a poder usarlo como tal, ya que TypeScript no sabe que tipo de dato se retornó realmente.

TypeScript al no saber el tipo de dato que se retornó en una función que puede retornar más de un tipo de dato, somos nosotros los responsables en decirle el tipo de dato resultante de la función para así poder operar con el resultado de forma normal.

Uso de la sobrecarga de funciones
Se suele emplear mucho en librerías, pero depende mucho de tu proyecto y de las ventajas que te puede llegar a dar.

La sobre carga de funciones únicamente suelen darse con las funciones declarativas con la palabra reservada function. */

export function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rta1 = parseString('hola'); // [ 'h', 'o', 'l', 'a']
// const rta2 = parseString(['h', 'o', 'l', 'a']); // hola

rta1.reverse(); // typescript no puede inferir aún con nuestra lógica que nos va a devolver un array, por eso tira error.
rta1.toLowerCase(); // typescript no puede inferir aún con nuestra lógica que nos va a devolver un string, por eso tira error.

if (Array.isArray(rta1)) {
  console.log(rta1.reverse()); // acá no tira error porque pasa por un if que verifica que rta1 sea un array.
}

if (rta1 === 'string') {
  console.log(rta1.toLowerCase());
}

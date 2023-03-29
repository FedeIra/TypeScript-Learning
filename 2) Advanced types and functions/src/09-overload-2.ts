/*
! Overload:
es una función que puede recibir distintos tipos de datos y retornar distintos tipos de datos.

En conclusión, lo que vamos a hacer es escribir de nuevo la función con los parámetros y su tipo de dato de retorno antes de declarar la función como tal, para que de esa forma TS sepa en que casos se retorna cierto valor.
*/

type customType = string | string[];

function parseStr(arg: string): string[];
function parseStr(arg: string[]): string;

function parseStr(arg: customType): customType {
  // code here...
}

/* Las dos primeras funciones parseStr son las que se le llama sobrecarga de funciones y le ayuda a TS a predecir que tipo de dato retornar en ciertos casos específicos. */

function parseStr2(input: string): string[]; // overload: tipamos la función con el tipo de dato que va a recibir. En este caso es un string. Y el tipo de dato que va a retornar. En este caso es un array de strings.
function parseStr2(input: string[]): string;
function parseStr2(input: number[]): boolean;

// function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

function parseStr2(input: unknown): unknown {
  // unknown es un tipo de dato que no se sabe que es. Es como any pero más seguro.
  if (
    Array.isArray(input) &&
    !input.every((item) => typeof item === 'number')
  ) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (
    // array of numbers:
    Array.isArray(input) &&
    input.every((item) => typeof item === 'number')
  ) {
    return 'array of numbers';
  }
}

const rta1 = parseStr('hola');
const rta2 = parseStr(['h', 'o', 'l', 'a']);
const rta3 = parseStr([1, 2, 3]);

console.log(rta1.reverse()); // ahora no me tira error por el overload // [ 'a', 'l', 'o', 'h' ]
console.log(rta2.toUpperCase()); // HOLA
console.log(rta3); // array of numbers

/*
!Buenas prácticas
Cuando tengamos sobre carga de métodos y por alguna razón tengamos un unknown o any, en esa sobre carga, lo mejor es dejar ese unknowno any al final. Caso contario no funcionará correctamente esa aserción de tipos y por ende el autocompletado del editor.

Evaluar si realmente se necesita una sobre carga o simplemente puedes buscar otra forma de hacerlo como ser usando valores opcionales.
*/

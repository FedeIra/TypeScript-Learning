/*
!Generics:
Podemos enviar tipado como parámetro. Es una forma de delegar el tipado para pasarlo como argumento. Es decir, al momento de declarar la función se le coloca como parametro un tipo de dato, pero al momento de llamar la función se le envia el tipo de dato que se va a usar.

Podemos entender los genéricos como una especie de "plantilla" de código, mediante la cual podemos aplicar un tipo de datos determinado a varios puntos de nuestro código. Sirven para aprovechar código, sin tener que duplicarlo por causa de cambios de tipo y evitando la necesidad de usar el tipo "any".

Imagina que tienes una función que muestra un valor numérico y luego lo devuelve. Más tarde te piden hacer esa misma funcionalidad, pero con un string. Para conseguirlo tenemos dos alternativas:

*a.- Crear dos funciones con declaraciones de tipos distintas
*/
function display(valor: number): number {
  console.log(valor);
  return valor;
}

function displayString(valor: string): string {
  console.log(valor);
  return valor;
}

/*
El problema de esta alternativa es obvio, pues hemos repetido prácticamente el mismo código dos veces. Incluso aunque en una clase se aplicase sobrecarga, el código sería prácticamente el mismo.

*b.- Usar una única función en la que recibimos y devolvemos el tipo any
*/
function display2(valor: any): any {
  console.log(valor);
  return valor;
}

/* Ahora el problema es que "any" no nos ayuda para nada en TypeScript. No nos advierte si nos equivocamos asignando otros tipos de datos y el editor deja de ayudarnos con el intellisense.

!La solución pasa por aplicar los genéricos:
Mediante genéricos podemos indicar que aquello que se recibe tiene un tipo maleable. Es decir, puede admitir diversos tipos, pero sin embargo, dentro de la función podemos referirnos al tipo que se está admitiendo, para que el compilador y el editor nos ayuden en donde puedan.
*/

const getValue = <myType>(value: myType) => {
  // puede tomar cualquier tipo de dato value. Por eso se le pone genericamente T (referido a type) en lugar de myType.
  return value;
};

// en estos casos se infiere el tipo de dato "myType" por eso te permite usar los metodos de los tipos de datos:
console.log(getValue(12).toFixed()); // 12
console.log(getValue('12').toLocaleLowerCase()); // 12
console.log(getValue([]).reverse()); // []

// en estos casos expresamente le digo el tipo de dato que va a recibir:
console.log(getValue<number>(12).toFixed()); // 12
console.log(getValue<string>('12').toLocaleLowerCase()); // 12
console.log(getValue<string[]>([]).splice(0, 1)); // []

// Puedo incluso enviar varios types:
const getArray = <myType, myType2>(arr: myType[], arr2: myType2[]) => {
  return [...arr, ...arr2];
};

console.log(getArray(<number[]>[1, 2, 3], <string[]>['a', 'b', 'c'])); // [ 1, 2, 3, 'a', 'b', 'c' ]

// Otro ejemplo:
const getArray2 = <myType, myType2>(value: myType[]) => {
  const array: myType[] = [...value];
  return value;
};

console.log(getArray2(<number[]>[1, 2, 3])); // [ 1, 2, 3 ]

// otro ejemplo:
const getValue2 = <myType>(value: myType) => {
  const array: myType[] = [value];
  return value;
};

console.log(getValue2<number>(12)); // 12

// -------------------------------------------- otro ejemplo --------------------------------------------
import { Dog } from './08-inheritance';

getValue2<Dog>(new Dog('Firulais', 'fede'));

//? Convención T: Type
const getValue3 = <T>(value: T) => {
  const array: T[] = [value];
  return value;
};

console.log(getValue3<number>(12)); // 12

// La convención es ponerle una T por type, pero se puede poner cualquier letra.

/*
Por convención, se utiliza el nombre " T " para dar a conocer que es un generics, es muy común ver este tipo de nombre en otros repositorios, documentación y también es usado en otros lenguajes como java y C#.
Otros nombres utilizados en los generics son:

E - Elemento (elementos en una colección)
K - Llave
N - Número
V - Valor
*/

// !ARRAYS:
// Ejemplo de array:

const prices: (number[] | string)[] = [[1, 3, 2, 2, 2], 'as']; // [number, number, number, number, number] | string

prices.push('hola');
prices.push([1, 2, 3, 4, 5]);

console.log('prices:', prices); // [ [ 1, 3, 2, 2, 2 ], 'as', 'hola', [ 1, 2, 3, 4, 5 ] ]

/*
!TUPLAS:
Nos van a permitir definir un array con un número fijo de elementos o fuertemente tipado. Una tupla es un tipo de datos inmutable, lo que significa que no se pueden modificar sus valores una vez creada.
*/

// Ejemplos de tuplas:
let user: [string, number] = ['fedebytes', 15]; // El primer elemento es un string y el segundo es un number.

// user = [12, 14]; // Error porque el primer elemento tiene que ser un string.

user = ['fedecambiado', 5]; // Correcto.

//? Tenemos entonces un array que limita los elementos y que tipos hay en cada posición.

let userExample = ['fede', 1, true];

const [username, age] = user; //! Destructuring de arrays.

console.log('username:', username); // fede
console.log('age:', age); // 5

// También podemos acceder a la posición de la tupla como si fuera un array:
let user3: [string, number] = ['mike', 23]; //* Esto es una tupla, solamente puede tener esos 2 argumentos en ese orden

console.log(user3[0]); //* 'mike
console.log(user3[1]); //* 23

const [username1, age1] = user3; //* Destructuración de una tupla
console.log(username1); //* 'mike'
console.log(age1); //* 23

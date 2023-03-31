/*
!Readonly array:
ReadonlyArray<Type> es un tipo que toma todos los elementos de un array y los hace de solo lectura.
*/

const numbers: number[] = [1, 2, 3, 4];

numbers.push(1);
numbers.pop();
numbers.unshift(1);

console.log('numbers:', numbers); // [ 1, 1 2, 3, 4 ]

// Ahora con readonly array, no lo voy a poder modificar:

const numbersReadOnly: ReadonlyArray<number> = [1, 2, 3, 4];

numbersReadOnly.push(1); // Error
numbersReadOnly.pop(); // Error
numbersReadOnly.unshift(1); // Error
numbers.filter((n) => n > 2); // Correcto pq no modifico el array, sino que creo uno nuevo.

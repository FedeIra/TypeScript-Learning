let myProductName1: string = 'Product 1'; // podes aclarar el tipo, pero no es necesario pq typescript lo deduce por inferencia como en el siguiente caso.

let myProductName2 = 'Product 1'; // acá typescript deduce que es un string.
let myProductPrice = 100;

myProductName2 = 'change';
// myProductName = 200; // me tira error

myProductName2.toLowerCase;

myProductPrice.toFixed();

const myProductStock = 1000;

// myProductStock = 2000; // me tira error pq es una constante. Este error lo detecta typescript. En javascript no lo detecta.

let myProductName2 = 'Product 1'; // acá typescript deduce que es un string.
let myProductPrice = 100; // acá typescript tira error pq el compilador detecta que la variable se declaró en otro archivo y no se puede volver a declarar.

// Para usar la variable que está declarada en otro archivo sin que me tire error, tengo que declararla dentro de un scope.

(() => {
  myProductName2 = 'change';
  myProductName2.toLowerCase;
  myProductPrice.toFixed();
  const myProductStock = 1000;
})();

// acá aislé el alcance de estas variables entonces no me tira error.

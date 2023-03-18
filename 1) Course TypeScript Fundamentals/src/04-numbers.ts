(() => {
  let productPrice = 100;
  productPrice = 200;
  // productPrice = "hola"; // alerta de error
  console.log(productPrice); // 200

  // let customerAge: number = 28; // implicitamente le digo q tipo de dato es
  let customerAge = 28; // implicitamente le digo q tipo de dato es

  customerAge = customerAge + 1; // 29
  customerAge = customerAge + '1'; // alerta de error // 291

  // let productInStock: number; // sabemos el tipo, pero su valor es undefined
  let productInStock;

  console.log(productInStock); // undefined. Tira alerta de error.+

  if (productInStock > 10) {
    console.log("it's greater than 10");
  }

  let numberExample: number;

  let discount = parseInt('123'); // 123
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xf00d; // 61453
  console.log('hex', hex); // hex 61453

  let binary = 0b1010; // 10. Si le pongo un número que no es binario, me advierte el error

  console.log('binary', binary); // binary 10

  //   NaN
  // Not A Number, entra dentro de la categoría de tipos de datos number.
})();

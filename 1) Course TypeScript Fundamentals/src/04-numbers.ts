(() => {
  let productPrice = 100;
  productPrice = 200;
  // productPrice = "hola"; // alerta de error
  console.log(productPrice); // 200

  let customerAge: number = 28; // implicitamente le digo q tipo de dato es

  customerAge = customerAge + 1; // 29
  // customerAge = customerAge + "1"; // alerta de error // 291

  let productInStock: number; // sabemos el tipo, pero su valor es undefined

  console.log(productInStock); // undefined. Tira alerta de error.+
})();

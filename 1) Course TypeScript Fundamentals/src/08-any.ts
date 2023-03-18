(() => {
  let myDinamicVar: any; // significa q cualquier cosa puede venir acá como si fuera js
  myDinamicVar = 10;
  myDinamicVar = 'hola';
  myDinamicVar = true; // no tira error!! Desactivamos el sistema de chequeo de tipos de typescript.

  //! Se aconseja que el any no sea utilizado:
  // Solo puede ser utilizado en migraciones a typescript, cuando no sabemos el tipo de una variable y no queremos que nos tire error. Pero luego hay que cambiarlo por el tipo correcto. También puede ser útil para librerias de terceros que no están tipadas.
  myDinamicVar = 'hola';
  const rta = (myDinamicVar as string).toLocaleLowerCase(); // esto es un casting. Le estoy diciendo a typescript que la variable myDinamicVar es un string. Esto es para que no tire error. Pero no es recomendable hacer esto. Es mejor usar el any.
  console.log(rta); // no es recomendable tampoco.

  const rta2 = <number>myDinamicVar.toFixed(); // esto es otro tipo de casting
})();

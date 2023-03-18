(() => {
  let userId: string | number;
  userId = 10;
  userId = 'asd';

  const greeting = (myText: string | number) => {
    // aquí le estoy diciendo que puede recibir un string o un número.
    if (typeof myText === 'string') {
      // aquí le estoy diciendo que si es un string, lo convierta a minúsculas.
      console.log(`string: ${myText.toLowerCase()}`); //puedo usar funciones de string pq typescript sabe que es un string.
    } else {
      console.log(`number: ${myText.toFixed()}`); // puedo usar funciones de number pq typescript sabe que es un number.
    }
  };

  greeting('hola');
  greeting(10);
  // greeting(true); // esto no se puede hacer pq no es un string ni un número.
})();

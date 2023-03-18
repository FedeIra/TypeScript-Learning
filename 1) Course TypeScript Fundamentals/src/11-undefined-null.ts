(() => {
  // let myNumber: number = undefined; // esto no es un error pq en JS undefined es un objeto. En TS no es un objeto, es un tipo de dato.
  // let myString: string = null; // esto no es un error pq en JS null es un objeto. En TS no es un objeto, es un tipo de dato.
  let myNull = null; // queda como tipo any
  let myUndefined = undefined; // queda como tipo any

  let myNull2: null = null;
  let myUndefined2: undefined = undefined;

  // Pueden haber casos que necesitemos q nuestros datos arranquen con un tipo pero inicien como null:
  let myNumber: number | null = null; // | null: esto es un "union type". Esto significa que puede ser un número o null. Puede pasar q al iniciar pueda ser un valor nulo, o q de la api regrese este valor.
  myNumber = 10;

  let myString: string | undefined = undefined; // | null: esto es un "union type". Esto significa que puede ser un número o null.
  myString = 'string';

  const hi = (name: string | null) => {
    let hello = 'hola';
    if (name) {
      hello += ` ${name}`;
    } else {
      hello += ' mundo';
    }
    console.log(hello);
  };

  // hi('Federico');
  // hi(null);

  // ---------------------------------------------------------------------------------------------
  // Se puede reescribir la función anterior de la siguiente manera:

  const hi2 = (name: string | null) => {
    let hello = 'hola';
    // hello += name.toLowerCase(); // esto no es un error pq name puede ser null y null tiene el método toLowerCase(). Pero esto no es correcto pq name puede ser null y no tiene el método toLowerCase(). Para solucionar esto se puede hacer lo siguiente:
    hello += name?.toLowerCase() || 'nobody'; // esto es un "optional chaining". Esto significa que si name existe, ejecuta el método toLowerCase(). Si name no existe, no ejecuta el método toLowerCase(). Se va a nobody q es un if abreviado.
    console.log(hello);
  };

  hi2('Federico');
  hi2(null);
})();

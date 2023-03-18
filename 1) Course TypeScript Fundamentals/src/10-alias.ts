(() => {
  let userId: string | number | boolean;

  const greeting = (userId: string | number | boolean) => {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
    } else {
      console.log(`number: ${userId.toFixed()}`); // me tira error pq no estamos previendo el caso de que sea un boolean. Pasa a ser redundante. Esto lo podemos corregir creando nuestros propios tipos.
    }
  };

  // Creamos nuestro propio tipo usando PascalCase.:
  type UserId = string | number; // en lugar de : usamos =

  const greeting1 = (userId: UserId) => {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
    } else {
      console.log(`number: ${userId.toFixed()}`);
    }
  };

  // Literal types:
  let shirtSize: string;
  shirtSize = 'small';
  shirtSize = 'medium';
  shirtSize = 'large';
  // se sobreescribe siempre el valor anterior. Si queremos que no se sobreescriba, podemos usar un literal type:

  // podemos hacerlo de otra manera:
  let shirtSize2: 'small' | 'medium' | 'large';
  shirtSize2 = 'small';
  shirtSize2 = 'medium';
  shirtSize2 = 'large';
  // shirtSize2 = 'xlarge'; // esto no se puede hacer pq no es un string válido.

  // --------------------------------

  //! podemos hacerlo de otra manera más correcta:
  type ShirtSizes2 = 'small' | 'medium' | 'large';
  let shirtSize3: ShirtSizes2;
  shirtSize3 = 'small';
  shirtSize3 = 'medium';
  shirtSize3 = 'large';

  type UserId2 = string | number;

  const greeting2 = (userId: UserId2, size: ShirtSizes2) => {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
    }
  };

  greeting2(1111, 'medium'); // te deja para autompletar los valores de los tipos. Tenemos un tipado muy seguro ahora. Previene errores.
})();

/*
!NEVER TYPE:
Es usado para funciones que nunca terminan de ejecutarse.
*/

const withoutEnd = () => {
  while (true) {
    console.log('never stop running');
  }
}; // typescript ya me dice q la funcion es never. Nunca termina de ejecutarse.

const fail = (message: string) => {
  throw new Error(message);
}; // también es never porque nunca termina de ejecutarse. Siempre va a tirar un error. Es como un return pero con un error.

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return "it's a string";
  } else if (Array.isArray(input)) {
    return "it's an array";
  }
  return fail('no match');
};

console.log('example:', example('hola'));
console.log('example:', example([1, 2, 3]));
console.log('example:', example(1));
console.log('example:', example('hola después del fail'));

/*El tipo de dato never, más que todo sirve para tipar a una función que nunca va a finalizar o sencillamente que pueda terminar el programa en el caso de lanar una excepción.

Un ejemplo de ello es cuando queremos manejar un error o cuando ejecutamos un loop infinito, como por ejemplo una validación de un token de cada x’s segundos, que es una función que se ejecuta constantemente, ya que lanzas la función, esta envía el token lo valida, y comienza el timer para hacer el refresh de ese token, si hay un error lanza una excepción y si no continúa con la validación y el timer…  */

(() => {
  let productTitle = 'My amazing product';
  // productTitle = 100; // Esto no se puede hacer pq productTitle es un string.
  // productTitle = true; // Esto no se puede hacer pq productTitle es un string.
  // productTitle = null; // Esto no se puede hacer pq productTitle es un string.
  // productTitle = undefined; // Esto no se puede hacer pq productTitle es un string.
  // productTitle = {}; // Esto no se puede hacer pq productTitle es un string.
  // productTitle = []; // Esto no se puede hacer pq productTitle es un string.
  // productTitle = () => { }; // Esto no se puede hacer pq productTitle es un string.
  productTitle = 'I modificed the string';
  console.log(productTitle);

  // no hace diferencia con comillas doble. De todas formas se recomienda usar comillas simples.

  const productDescription =
    'This is a product description typically called "short description" in the admin panel';

  const productDescription2 = `This is a product description typically called "short description" in the admin panel`; // Esto no se puede hacer pq productDescription es un string.

  const comillas =
    'This is a product description typically called "short description" in the admin panel. It\'s just an example'; // Hay que agregarle la barra invertida para que no se confunda con las comillas simples. \
  console.log(comillas);

  const comillas2 = `This is a product description typically called "short description" in the admin panel. It's just an example${comillas}`; // Este es el backtick. Es una comillas invertida. Se usa para hacer template strings.
  console.log(comillas2);

  const myString: string = 'Hello world'; // nunca tipar con mayuscula, siempre en minúscula
})();

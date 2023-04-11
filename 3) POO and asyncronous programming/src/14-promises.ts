/*
!PROMISES:
?Axios
Es una forma interesante de hacer request y conectarnos a servicios web, nos va a servir para hacer peticiones desde el frontend como en el backend.

?Asincronismo y TypeScript
Podemos correr promesas y código asíncrono con TypeScript de la misma forma que lo haríamos con JavaScript.

?Tipado y promesas
En el caso de no colocar el tipo de dato de retorno de nuestra función asíncrona, TypeScript supondrá que es una promesa, pero no sabe el tipo de dato que retorna esa promesa.

Podemos tipar a una promesa con genéricos:

const variableName = new Promese<dataType>(...);

?Fetch con NODE v18
Podemos utilizar nodejs para poder realizar peticiones fetch pero solo lo podemos hacer con la versión 18, es una feature no estable así que puede tener sus errores.

Ejemplo en base al código de la clase:
*/
async function getProductsFetch() {
  const promise = await fetch('https://api.escuelajs.co/api/v1/products');
  const rta = await promise.json();
  return rta;
}

//-------------------------

import axios from 'axios';

(async () => {
  const delay = (time: number) => {
    const promise = new Promise<string>((resolve) => {
      // le digo que la promesa retorna un string
      setTimeout(() => {
        resolve('Done!');
      }, time);
    });
    return promise;
  };

  const getProducts = () => {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products'); // esta API es de una escuela de JS y sirve para practicar con APIs y demás.
    return promise;
  };

  const getProductsAsync = async () => {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products'); // esta API es de una escuela de JS y sirve para practicar con APIs y demás.
    return promise.data;
  }; // esta función es la misma que la de arriba pero con async y await y como espera puedo devolver directamente la data en lugar de la promesa.

  console.log('Waiting...'.repeat(10));
  const result = await delay(2000);
  console.log(result);
  console.log('Waiting Again...'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  console.log('Waiting Again...'.repeat(10));
  const productsAsync = await getProductsAsync();
  console.log(productsAsync);
})();

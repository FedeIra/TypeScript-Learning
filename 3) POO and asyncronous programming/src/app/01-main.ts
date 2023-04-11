/*
?Quicktype
Esta página transforma nuestro archivo JSON en el tipado que le corresponde al mismo para poder tipar nuestras repuestas HTTP.

?Tipado en funciones asíncronas con peticiones HTTP
Es importante poder tipar tanto nuestras funciones, ya sea inferidamente o explícitamente, como las variables que manejamos internamente dentro de ella.

?Aserción angle bracket
Axios nos permite tipar las peticiones que hacemos de la siguiente manera.

const { data } = axios.get<dataType>(URL);

?Aserción AS
También podemos realizar el tipado por medio de aserción de tipos con as, pero lo ideal es hacerlo con el primer método.

async function getProductsAsync () {
    const rta = await axios.get(URL);
    const data = rta.data as Product[];
    return data;
}
*/

import axios from 'axios';

import { Product } from './models/product.model';

(async () => {
  const getProductsAsync = async (): Promise<Product[]> => {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  };

  // Otra forma de forzar el tipado es cuando no te permiten el <> es la siguiente:
  const getProductsAsync2 = async () => {
    const { data } = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data as Product[]; //? Forzamos el tipado y nos quedamos con un array de productos
  };

  const productsAsync = await getProductsAsync();
  console.log(
    productsAsync.map((product: Product) => `-${product.id}:${product.title}`)
  );
})();

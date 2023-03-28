(() => {
  const logIn = (email: string, password: string) => {
    console.log(`email: ${email} password: ${password}`);
  };

  logIn('try@hotmail.com', '123456');
  // si lo quiero mandar como objeto va a fallar:
  // logIn({
  //   email: 'try@hotmail.com',
  //   password: '123456',
  // });
})();

(() => {
  const logInV2 = (data: { email: string; password: number }) => {
    console.log(`email: ${data.email}, password: ${data.password}`);
  };

  logInV2({
    email: 'try@hotmail.com',
    password: 123456,
  });

  // ------------------------------------------------------------

  type Sizes = 'S' | 'M' | 'L' | 'L' | 'XL'; // type de sizes defined

  const productNotRecommendable: any[] = []; // podría definirlo de este modo con any, pero no es recomendable. Por eso le hacemos un tipado al objeto que le vamos a pasar al array.

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes; // dejo la opción de ser incluido o no
  }; // type of Product defined

  const products: Product[] = []; // products will be an array of Product defined previously

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Camisa',
    createdAt: new Date(),
    stock: 10,
  });

  addProduct({
    title: 'Camisa2',
    createdAt: new Date(),
    stock: 15,
    size: 'L',
  });
  console.log('products', products);

  // products [
  // { title: 'Camisa', createdAt: 2023-03-27T14:24:30.486Z, stock: 10 },
  // {
  //   title: 'Camisa2',
  //   createdAt: 2023-03-27T14:24:30.487Z,
  //   stock: 15,
  //   size: 'L'
  // }
})();

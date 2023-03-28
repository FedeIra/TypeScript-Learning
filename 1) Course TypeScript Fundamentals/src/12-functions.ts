(() => {
  type Sizes = 'S' | 'M' | 'L' | 'L' | 'XL';

  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const product1 = createProductToJson('Camisa', new Date(), 10, 'XL');

  // console.log('product1: ', product1);
  // console.log(product1.title);

  // OPTIONAL PARAMETERS (| // ?)
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    // size: Sizes | undefined // le puedo poner undefined pero tendría q recibir uno de los dos atributes, size o undefined. Es mejor lo siguiente:
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };
  const product2 = createProductToJsonV2('Camisa', new Date(), 10);
  console.log('product2: ', product2);
  console.log(product2.size);
})();

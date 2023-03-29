export const createProduct = (
  id: string | number,
  stock: number = 10, // por defecto es 10
  isNew: boolean = true // por defecto es true
) => {
  return {
    id,
    stock, //? en lugar de || usamos ??
    isNew,
  };
};

const p1 = createProduct(1);
console.log('p1:', p1); // p1: { id: 1, stock: 0, isNew: false }}

const p2 = createProduct(1, 20);
console.log('p2:', p2); // p2: { id: 1, stock: 20, isNew: false }.

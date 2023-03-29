export const createProduct = (
  id: string | number,
  // stock?: number, // los parametros opcionales siempre van al final
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock || 10, // por defecto es 10
    isNew: isNew || true, // por defecto es true
  };
};

const p1 = createProduct(123, true, 1);
console.log('p1:', p1); // { id: 123, stock: 1, isNew: true }

const p2 = createProduct(123, true);
console.log('p2:', p2); // { id: 123, stock: undefined, isNew: true }

const p3 = createProduct(123);
console.log('p3:', p3); // p3: { id: 123, stock: 10, isNew: true }

// el problema de los || cuando le pasas false, 0 o "" es que al tomarlo como valor falsos, lo toma como si no hubiera pasado nada y toma el valor por defecto.
const p4 = createProduct(1, false, 0);
console.log('p4:', p4); // p4: { id: 1, stock: 10, isNew: true }

//! FORMA DE CORREGIRLO Y CORRECTA DE USAR EL OPERADOR:

export const createProductCorrecto = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10, //? en lugar de || usamos ??
    isNew: isNew ?? true,
  };
};

const p5 = createProductCorrecto(1, false, 0);
console.log('p5:', p5); // p5: { id: 1, stock: 0, isNew: false }

export type Sizes = 'S' | 'M' | 'L' | 'L' | 'XL';

export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};

//acá tengo la parte del tipado y los modelos de datos. Lo exporto.

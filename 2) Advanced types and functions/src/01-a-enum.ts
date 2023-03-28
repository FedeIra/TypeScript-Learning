/*
!ENUM:
permite configurar un set de opciones.
*/

enum ROLES {
  // defino los roles de mi aplicación:
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer', // Si no le asigno un valor, por defecto es el índice del elemento.
}

type User = {
  username: string;
  role: ROLES; // Le asigno el tipo de dato enum. El rol tiene que estar dentro de las opciones del enum ROLES
};

const fedeUser: User = {
  username: 'fede',
  // role: "hola", // Error porque no está dentro de las opciones del enum.
  role: ROLES.ADMIN, // Si está dentro de las opciones del enum.
};

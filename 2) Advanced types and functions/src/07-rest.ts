/*
*En javascript:

const myFunc = (...args) => console.log(args);

const test = myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(test); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*En typescript:
*/

import { User, ROLES } from './01-a-enum';

const currentUser: User = {
  username: 'fedebytes',
  role: ROLES.CUSTOMER,
};

// ------------------------------------------------------------

export const checkAdminRole = (user: User) => {
  if (user.role === 'admin') {
    return 'User is admin';
    // console.log('User is admin');
  } else {
    return "User isn't admin";
  }
};

const rta1 = checkAdminRole(currentUser);
console.log(`CheckAdminRol: ${rta1}`); //CheckAdminRol: User isn't admin

// ------------------------------------------------------------

export const checkRol = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return `User is ${role1}`;
  }
  if (currentUser.role === role2) {
    return `User is ${role2}`;
  }
  return `User isn't ${role1} or ${role2}`;
};

const rta2 = checkRol(ROLES.ADMIN, ROLES.SELLER);
console.log(`CheckRol: ${rta2}`); //CheckRol: User isn't admin or seller

// ------------------------------------------------------------
// Si quiero q me pasen miles de roles y no limitarlo a dos?

export const checkRolV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return `User is ${currentUser.role}`;
  }
  return `User isn't ${roles.join(' or ')}`;
};

const rta3 = checkRolV2([ROLES.ADMIN, ROLES.SELLER]); //? el problema es que no quiero pasarle parametros en forma de array, sino como lo hacemos normalmente.
console.log(`CheckRolV2: ${rta3}`); // CheckRolV2: User isn't admin or seller

// ------------------------------------------------------------
//? Para solucionar esto, podemos usar el operador REST (...). El rest params convierte datos crudos en un array.

export const checkRolV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return `User is ${currentUser.role}`;
  }
  return `User isn't ${roles.join(' or ')}`;
};

const rta4 = checkRolV3(ROLES.ADMIN, ROLES.SELLER);
console.log(`CheckRolV3: ${rta4}`); // CheckRolV3: User isn't admin or seller

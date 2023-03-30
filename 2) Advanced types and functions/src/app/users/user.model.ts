import { BaseModelInterface } from '../base.model';

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export interface UserInterface extends BaseModelInterface {
  // id: string | number;
  // createdAt: Date;
  // updatedAt: Date;
  username: string;
  role: ROLES;
}

// const newUser: UserInterface = {
//   id: 1,
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   username: 'Fede',
//   role: ROLES.ADMIN,
// };

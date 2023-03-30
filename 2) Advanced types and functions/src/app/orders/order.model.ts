import { ProductInterface } from '../products/product.model';
import { UserInterface, ROLES } from '../users/user.model';
import { BaseModelInterface } from '../base.model';

export interface OrderInterface extends BaseModelInterface {
  products: ProductInterface[];
  user: UserInterface;
}

// const newOrder: OrderInterface = {
//   id: 1,
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   products: [],
//   user: {
//     id: 1,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     username: 'Fede',
//     role: ROLES.ADMIN,
//   },
// };

// console.log(newOrder);

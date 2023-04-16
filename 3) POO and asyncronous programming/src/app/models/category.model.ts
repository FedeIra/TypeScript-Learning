// export interface Category {
//   id: number;
//   name: string;
//   image: string;
// }

export enum AccessType {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface Category {
  id: number;
  name: string;
  image: string;
  access?: AccessType;
}

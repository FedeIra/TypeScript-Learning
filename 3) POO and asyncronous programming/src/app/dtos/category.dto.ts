/*
!DECORATOR:
Agrega validaciones y funcionalidades.
A diferencia de TypeScript,
los decoradores No van a decir los errores de forma inmediata.
Dan feedback hasta el runtime.
Agregan validaciones y comportamientos extra

*1) npm install class-validator --save
*2) Importamos el decorador IsUrl de la libreria class-validator.
*3) en el tsconfig.json, agregamos la propiedad experimentalDecorators: true
*4) agregamos las validaciones. Ej: @IsUrl()
*/

import {
  IsNotEmpty,
  IsUrl,
  Length,
  IsEnum,
  validateOrReject,
  IsOptional,
} from 'class-validator'; //? si es pascale case, es un decorador. Si es camel case, es una funcion.

import { AccessType, Category } from '../models/category.model';

// export interface CreateCategoryDto extends Omit<Category, 'id'> {}

// export interface UpdateCategoryDto extends Partial<CreateCategoryDto> {}

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty() // validator
  @Length(4, 140)
  name!: string; //? The ! is used to tell the compiler that the property will be initialized in the constructor

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

// export interface UpdateCategoryDto extends Partial<ICreateCategoryDto> {}

// chequeamos si funcionan los validadores:
(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'a';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();

// Devuelve los siguientes errores:
// [
//   },
//   ValidationError {
//     target: CreateCategoryDto { name: 'a' },
//     value: undefined,
//     property: 'image',
//     children: [],
//     constraints: {
//       isNotEmpty: 'image should not be empty',
//       isUrl: 'image must be a URL address'
//     }
//   }
// ]
// PS C:\Users\Usuario\Desktop\Programacion\TypeScript-Learning\3) POO and asyncronous programming\src\app\dtos> npx ts-node category.dto.ts
// [
//   ValidationError {
//     target: CreateCategoryDto { name: 'a' },
//     value: 'a',
//     property: 'name',
//     children: [],
//     constraints: { isLength: 'name must be longer than or equal to 4 characters' }
//   },
//   ValidationError {
//     target: CreateCategoryDto { name: 'a' },
//     value: undefined,
//     property: 'image',
//     children: [],
//     constraints: {
//       isNotEmpty: 'image should not be empty',
//       isUrl: 'image must be a URL address'
//     }
//   }
// ]

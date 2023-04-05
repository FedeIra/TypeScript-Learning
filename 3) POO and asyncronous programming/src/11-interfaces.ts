/*
!Interfaces:
?Interfaces en clases
Las interfaces en clases funcionan como contratos, nos permiten tipar tanto los atributos como los métodos.

Aquí no podemos utilizar encapsulamiento, por defecto todos los atributos y métodos son públicos.

?Implements
Tiene la misma sintaxis cuando aplicamos herencias en las clases, pero implements no es una herencia, es un contrato que nos dice que nuestra clase tiene que cumplir con un estándar que es la interface.

Este contrato es tanto como para los parámetros como para los métodos.

?Sintaxis
interface NameInterface {
	statements
}

class NameClass implements NameInterface {
	constructor (
		propertiesOfInterface
	) {
		statements
	}

	methodOfInterface (): dataType { statements }
}
*/

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void; //? no se implementa. Solo se declara. Se implementa en las clases que implementen esta interfaz.
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: 'postgres',
//   password: '1234',
//   port: 5432,
// };

class PostgresDriver implements Driver {
  // debe implementar los atributos puestos en una interfaz. No es una extensión. Sino solo un contrato. Todos los que implementen esta interfaz tienen que tener estos atributos.
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {
    // ...
  } // deben cumplir con el estandar de la interfaz. Si no, no compila. No es una extensión. Sino solo un contrato. Todos los que implementen esta interfaz tienen que tener estos atributos.
  disconnect(): void {
    // ...
  }
  isConnected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number // no es parte de la interfaz. No es obligatorio, pero lo puedo agregar.
  ) {}
  connect(): void {
    // ...
  }
  disconnect(): void {
    // ...
  }
  isConnected(name: string): boolean {
    return true;
  }
  doSomething(): void {
    console.log('do something');
  } // le puedo agregar métodos que no estén en la interfaz.
}

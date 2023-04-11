/*
!Singleton:
Es un patrón de diseño que nos permite crear una única instancia de una clase y toda la aplicación comparte y usa esa misma instancia. De tal forma, no hay que crearla cada vez que quieras usarla.

Singleton nos previene crear múltiples instancias de una clase.

Esto es muy usado en Arquitectura de Software, pues nos ayuda a ahorrar uso de memoria.

Singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

Ejemplo de utilidad: cuando se trabaja con bases de datos, por ejem tienes varios modulos (archivos .ts) en los que necesitas interactuar con una base de datos, si te conectas a la misma base de datos desde cada modulo, va a haber un delay y puede producir bugs, con singleton, si te contectas a la base de datos una vez, siempre vas a usar la misma conexión no importa si llamas la funcion “connect” mas de una vez en diferentes modulos.
*/

export class MyService {
  constructor(private name: string) {}
  getName() {
    return this.name;
  }
}

const myService1 = new MyService('service 1');
const myService2 = new MyService('service 2');

console.log(myService1 === myService2); // false. Son distintas instancias de la clase MyService.

/* Si queremos que solo exista una instancia de la clase MyService, podemos hacerlo de la siguiente manera: */

//!Singleton example:
export class MyServiceSingletonExample {
  private static instance: MyServiceSingletonExample | null = null;
  private constructor(private name: string) {} // le ponemos private para que no se pueda instanciar desde fuera de la clase.
  getNameSingleton() {
    return this.name;
  }
  static create(name: string) {
    // queremos que la primera instancia que se crea se guarde en memoria y no se permita crear otra instancia. Para eso agregamos el static instance antes del constructor.
    if (MyServiceSingletonExample.instance === null) {
      console.log('Creando instancia por única vez...');
      MyServiceSingletonExample.instance = new MyServiceSingletonExample(name);
    } // como estoy dentro de mi clase, solo desde acá se puede llamar al constructor que es privado. Una vez creado no va a pasar el if.
    return MyServiceSingletonExample.instance;
  }
}

const myServiceSingleton1 = MyServiceSingletonExample.create(
  'service singleton 1'
);
console.log(myServiceSingleton1.getNameSingleton()); // service singleton 1
const myServiceSingleton2 = MyServiceSingletonExample.create(
  'service singleton 2'
);
console.log(myServiceSingleton2.getNameSingleton()); //? Tira el mismo nombre a pesar de que cree un segundo: service singleton 1

console.log(myServiceSingleton1 === myServiceSingleton2); // true. Son la misma instancia de la clase MyServiceSingletonExample.

/* Ahora en cualquier punto de tu aplicación podes hacerle un get o usarla y siempre va a ser el primero que se creo. */

/*
!ABSTRACT
Las clases abstractas son clases que no se pueden instanciar directamente, sino que sirven como base para otras clases. Las clases abstractas se definen con la palabra reservada abstract. Las clases abstractas pueden contener métodos abstractos, que son métodos que no tienen implementación. Los métodos abstractos se definen sin cuerpo y se deben implementar en las clases hijas.

En general, la razón de esto es que las clases abstractas son tan ‘genericas’ que no tiene sentido que sean instanciadas.

Permite crear clases que se extienden de esta clase abstracta, pero no permite crear instancias directamente de la clase abstracta sino de sus clases hijas.
*/

import { Animal, Dog } from './09-protected';

const animal1 = new Animal('Animal1');
animal1.greeting(); // Hello, I'm Animal1

const dog1 = new Dog('Dog1', 'Fede');
dog1.greeting(); // Hello, I'm Dog1
dog1.bark(2); // Woof Dog1!Woof Dog1!

// ahora bien, uno no debería poder crear instancias de Animal, siendo que tenemos sub clases que heredan de Animal. Entonces, para que no se pueda crear instancias de Animal, lo que hacemos es hacerla ABSTRACTA. Para hacer una clase abstracta, se le pone la palabra reservada abstract antes de la palabra class. Y ahora, si intentamos crear una instancia de Animal, nos va a dar un error. Ejemplo:

abstract class AnimalAbstract {
  constructor(protected animalName: string) {}
  move2() {
    console.log('Moving...');
    console.log(this.doSomething2());
  }
  greeting2() {
    return `Hello, I'm ${this.animalName}`;
  }
  protected doSomething2() {
    console.log('I am doing something');
  }
}

const animalAbstract = new AnimalAbstract('AnimalAbstract'); //? ahora me tira error pq no puedo hacer instancias de una clase abstracta.

class DogFromAbstractClas extends AnimalAbstract {
  constructor(animalName: string, public owner: string) {
    super(animalName);
  }
}

const dogFromAbstractClas = new DogFromAbstractClas(
  'DogFromAbstractClas',
  'Fede'
);
// de esta manera, si puedo crear instancias de DogFromAbstractClas, pq esta clase hereda de AnimalAbstract, que es una clase abstracta.

/*
Los métodos de una clase pueden ser abstractos, eso significa que no van a tener una implementación como tal, si no que cuando se extienda la clase que lo contiene ( que también debe ser abstracta ) se debe de implementar el método.
Es una forma de hacer que las clases hijas obligatoriamente tengan que implementar ciertos métodos.
*/
enum DIRECTIONS {
  UP = 1,
  DOWN = -1,
  LEFT = -1,
  RIGHT = 1,
}

export abstract class Animal3 {
  public name: string;
  protected position: [number, number] = [0, 0];

  constructor(name: string) {
    this.name = name;
  }

  move3(direction: DIRECTIONS): number[] {
    if (direction === DIRECTIONS.UP || direction === DIRECTIONS.DOWN) {
      this.position[0] += direction;
    } else {
      this.position[1] += direction;
    }
    return this.position;
  }

  abstract sound3(): void;
}

class Dog3 extends Animal3 {
  public owner: string;

  constructor(name: string, owner: string) {
    super(name);
    this.owner = owner;
  }

  sound3(): void {
    console.log('WOOF');
  }
}

const Loki = new Dog3('Loki', 'Nico');
console.log(Loki.move3(DIRECTIONS.DOWN));
Loki.sound3();

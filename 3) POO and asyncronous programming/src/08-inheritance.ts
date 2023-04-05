/*
!HERENCIA:
Como su palabra lo dice, las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código en nuestro proyector.

Para que otras clases herenden los atributos de un constructor principal esta debe la palabra reservada extends.

class FatherClass {
	constructor (properties) {
		statemenst
	}

	MethodsFather () { ... }
}

class ChildClass extends FatherClass {
		constructor (properties) {
			super(properties)
			statemenst
		}

		MethodsChild () { ... }
}

!Super
Es una palabra reservada para llamar las propiedades y métodos de la clase padre. Una vez que le agrego el extend tengo q agregarle el super. Al usar esta palabra reservada en el constructor de la clase hija, estamos invocando al constructor de la clase padre.


*/

export class Animal {
  constructor(public animalName: string) {}
  move() {
    console.log('Moving...');
  }
  greeting() {
    return `Hello, I'm ${this.animalName}`;
  }
}

const fili = new Animal('Fili');
console.log(fili.greeting());
fili.move();

export class Dog extends Animal {
  // aquí le decimos que la clase Dog hereda de la clase Animal
  constructor(animalName: string, public owner: string) {
    super(animalName); // aquí invocamos al constructor de la clase padre y le pasamos el argumento animalName para que se ejecute el constructor de la clase padre. Si no lo hacemos, no se ejecuta el constructor de la clase padre.
  }
  bark(times: number): void {
    console.log('Woof! '.repeat(times));
  }
}

const billy = new Dog('Billy', 'Fede'); // aquí le pasamos los argumentos que necesita el constructor de la clase Dog
billy.bark(3); // Woof! Woof! Woof!
billy.move(); // Moving...

console.log(billy); // Dog { name: 'Billy', owner: 'Fede' }

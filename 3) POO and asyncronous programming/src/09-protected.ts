/*
!PROTECTED:
Es un modificador de acceso que nos permite proteger un atributo o método de una clase, de tal manera que solo pueda ser accedido desde la clase o desde una clase hija.

Se puede poner como protected tanto atributos como métodos.

Básicamente, es la forma de heredar propiedades y métodos. Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia. Es un modificador de acceso que permite que los atributos y métodos de la clase sean accesibles desde la misma clase y desde las clases que heredan de esta. A diferencia de private, permite heredar propiedades de una clase padre a sus clases hijas

Sintaxis:

class FatherClass {
	constructor (
		protected property1: dataType,
		propertyN: dataType
	) {
		statemenst
	}
}

class ChildClass extends FatherClass {
		constructor (properties and Inheritedproperties) {
			super(Inheritedproperties)
			statemenst
		}
}
*/

//! creamos clase padre Animal:
export class Animal {
  constructor(protected animalName: string) {}
  move() {
    console.log('Moving...');
    console.log(this.doSomething());
  }
  greeting() {
    return `Hello, I'm ${this.animalName}`;
  }
  protected doSomething() {
    console.log('I am doing something');
  }
}

//! creamos clase hija Dog:
export class Dog extends Animal {
  constructor(animalName: string, public owner: string) {
    super(animalName);
  }
  bark(times: number): void {
    console.log(`Woof ${this.animalName}!`.repeat(times));
    console.log(this.doSomething());
  }
  move() {
    // sobreescribimos el método move de la clase padre Animal.
    console.log('Moving in a different way than the parent class Animal');
    super.move(); //? para llamar al método move de la clase padre Animal. Si no lo llamamos, no se ejecuta.
    //! con el método move() es POLIMORFISMO, es reescribir el método que adopta otro comportamiento en la clase hija, pero en este caso este otro comportamiento es un agregado de funcionalidad adicional antes de su ejecucíon por eso al final llama al move() del padre con super()
  }
}

//! creamos instancia de la clase Dog:
const billy = new Dog('Billy', 'Fede');

// billy.animalName = 'Fili'; //? no quiero que se pueda modificar desde afuera. Para esto tenemos que proteger el atributo animalName. Una posibilidad sería hacerlo privado, pero no podemos acceder a él desde afuera. Entonces, la solución es hacerlo PROTECTED. De esta manera, si queremos acceder a él desde afuera, lo podemos hacer desde una clase hija. Con protected ahora puede ser accedida, pero no modificada.
billy.bark(2); // en cambio si se puede acceder internamente en las clases padre e hija.
// billy.doSomething(); // no puedo acceder pq es protected

billy.move(); // Moving in a different way than the parent class Animal
// Moving in a different way than the parent class Animal
// Moving...
// I am doing something

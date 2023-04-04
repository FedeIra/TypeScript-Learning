/*
!Getters:
Los datos que fueron declarados como privados no pueden ser accedidos desde fuera de la clase, pero si se pueden acceder a través de métodos públicos.

El método ya definido es lo que se llama getter, y es un método que se utiliza para obtener el valor de una propiedad privada.

Para usar el getter se debe colocar antes de la palabra private el guin bajo _. Además, se debe agregar la función getter con el nombre de la propiedad privada, pero sin el guion bajo.

Al getter se le puede agregar lo que quieras, if else, etc.

-Todos los getters por definición deben retornar algo. Los getters NO pueden ser void.

Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no modificarlos o mutarlos.

Lo podemos acceder como si fuese una propiedad más de la instancia.

Por definición, todos los getters tienen que retornar algo.
*/

//Sintaxis:
const statements = 'statements';
const something = 'something';
class ClassName {
  constructor() {
    statements;
  }

  get methodName() {
    statements;
    return something;
  }
}

// clase
export class MyDate {
  //! constructor
  constructor(
    public year: number = 1111,
    public month: number = 1,
    private _day: number = 11
  ) {}
  //! metodos
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  //! Getters:
  get day() {
    // code
    return this._day;
  }
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  } // no hace falta que sea declarada en el constructor.
}

//! Instancia de la clase MyDate: myDate
const myDate = new MyDate(1993, 9, 2);
console.log(`Date: ${myDate.printFormat()}`); //First Date: 02/09/1993
// console.log(myDate.getDay()); // 2
console.log(myDate.day); // 2. No es la propiedad como tal, sino el método getter que se llama igual que la propiedad y te devuelve el valor de la propiedad privada.
// myDate.day = 3; // no se puede modificar el valor de la propiedad privada.

// si bien es un método, desde afuera se utiliza como si fuera una propiedad:
console.log(myDate.isLeapYear); // false

const myDate2 = new MyDate(2000);
console.log(myDate2.isLeapYear); // true

const myDate3 = new MyDate(2004);
console.log(myDate3.isLeapYear); // true

const myDate4 = new MyDate(2001);
console.log(myDate4.isLeapYear); // false

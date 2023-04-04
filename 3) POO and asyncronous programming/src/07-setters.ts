/*
!Setters
Son metodos que nos permiten cambiar el valor de una propiedad. Deben recibir un valor y no retornan nada.

Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.

A set lo podemos usar para tener reglas de modificación para nuestros parámetros.

Sintaxis:

class ClassName {
  constructor() {
    statements;
  }

  set methodName() {
    statements;
  }
}
*/

// clase
export class MyDate {
  //! constructor
  constructor(
    public year: number = 1111,
    private _month: number = 1,
    private _day: number = 11
  ) {}
  //! metodos
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
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
  }
  get month() {
    return this._month;
  }
  //! Setters:
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('Invalid month value. It must be between 1 and 12.');
    }
  }
}

//! Instancia de la clase MyDate: myDate
const myDate = new MyDate(1993, 9, 2);
console.log(`Date: ${myDate.printFormat()}`); //First Date: 02/09/1993

myDate.month = 10; // La modificación se produce como si fuera una propiedad, pero es un método set.
console.log(myDate.month); // 10

myDate.month = 13;
console.log(myDate.month); // error

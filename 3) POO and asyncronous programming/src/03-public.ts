/*
!Public access:
Public access means that the property or method can be called anywhere, any time. Es público por defecto y desde afuera puedo acceder a sus atributos y propiedades. Por lo tanto, no es necesario aclarar que es público.

La desventaja que tenemos al tener una propiedad o método con alcance público es que estás pueden ser modificables desde fuera de la clase.

*/
export class MyDate {
  public year: number;
  public month: number;
  public day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

//! Instancia de la clase MyDate: myDate
const myDate = new MyDate(1993, 1, 12);
console.log(myDate.year); // 1996
console.log(myDate.month); // 1
console.log(myDate.day); // 12

// Puedo acceder a los atributos de la clase desde afuera y cambiarlos.
myDate.day = 20;

console.log(myDate.day); // 20

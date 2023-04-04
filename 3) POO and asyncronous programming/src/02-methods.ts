export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  // creamos métodos:
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

// Accedo a los métodos:
console.log(myDate.printFormat()); // 12/1/1993

myDate.add(3, 'years');

console.log(myDate.printFormat()); // 12/1/1996

// Accedo a los atributos de forma directe:
console.log(myDate.year); // 1996
console.log(myDate.month); // 1
console.log(myDate.day); // 12

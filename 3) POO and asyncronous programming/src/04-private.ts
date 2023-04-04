/*
!Private access:
El acceso privado significa que la propiedad o método solo puede ser llamado desde dentro de la clase. Es decir, no se puede acceder a ellos desde fuera de la clase. Es una forma de proteger los datos de la clase.

Esto es una buena práctica pq al menos deberíamos dejar que se modifiquen de una forma que nosotros estemos de acuerdo.

Con esta palabra reservada private estamos restringiendo el acceso de nuestros parámetros y métodos, solo podrán ser accedidos o modificados dentro de la clase.

*/

export class MyDate {
  public year: number;
  public month: number;
  private day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
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
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  getDay() {
    return this.day;
  }
}

//! Instancia de la clase MyDate: myDate
const myDate = new MyDate(1993, 1, 12);
console.log(myDate.year); // 1996
console.log(myDate.month); // 1
// console.log(myDate.day); // error pq day es palabra reservada o private

// Puedo acceder a los atributos de la clase desde afuera y cambiarlos.
// myDate.day = 20; // // error pq day es palabra reservada o private

console.log(myDate.printFormat()); // 12/1/1993

myDate.addPadding(12); // Se podría usar, pero no queremos pq solo queremos que se use por printFormat() ya que no tiene lógica aplicarle padding a un día, mes o año.Entonces le agrego private a addPadding. Solo la clase internamente puede acceder a este método, pero no es posible desde fuera.

myDate.getDay(); // podemos acceder a este método pq no tiene private y de esta manera acceder al day que es private.

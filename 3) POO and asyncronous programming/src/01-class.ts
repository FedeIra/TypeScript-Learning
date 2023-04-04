const date = new Date(); // la clase es Date que tiene sus atributos y métodos. Creamos una instancia que es date la cual hereda esos atributos y métodos, pero le podemos agregar nuevos.

console.log(date); // 2023-04-04T13:48:09.898Z

date.getHours();

// --------------------------------------------------

const date2 = new Date(1993, 1, 12); // le agregamos los parametros al constructor de Date.

console.log(date2); // 1993-02-12T02:00:00.000Z

// --------------------------------------------------

// ahora creamos nuestra propia clase:

//!Clase MyDate
class MyDate {
  // esta es una forma. Tenes q darle valores iniciales.
  year: number = 0;
  month: number = 0;
  day: number = 0;
  // mejor forma es usar constructor:
  // la clase MyDate tiene un constructor que recibe 3 parametros
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  } // los parametros se pueden inicializar en el constructor.
}

//! Instancia de la clase MyDate: myDate
const myDate = new MyDate(1993, 1, 12); // creamos una instancia de la clase MyDate

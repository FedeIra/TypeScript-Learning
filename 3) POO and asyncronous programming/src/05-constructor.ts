/*
!Constructor
Es el constructor en el que construimos la instancia y mandamos los parámetros por defecto por el cual queremos que se inicialice esa instancia a un objeto.

En el constructor debes colocar de forma explicita el tipo de acceso si es público o privado.
*/
type dataType = string | number | boolean | undefined;

class ClassName {
  property1: dataType;
  propertyN: dataType;
  constructor(property1: dataType, propertyN: dataType) {
    this.property1 = property1;
    this.propertyN = propertyN;
  }
}

// clase
export class MyDate {
  //! constructor
  constructor(
    public year: number = 1111,
    public month: number = 1,
    private day: number = 11 // si no le coloco el acceso no va a hacer la automatización de los parametros en el constructor y no va a funcionar. Por eso se coloca private o public.
  ) {}
  //! metodos
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
const myDate = new MyDate(1993, 9, 2);
console.log(`First Date: ${myDate.printFormat()}`);
//First Date: 02/09/1993

//! Instancia de la clase MyDate: myDate2
const myDate2 = new MyDate();
console.log(`Second Date: ${myDate2.printFormat()}`);
//Second Date: 11/01/1111

//! Instancia de la clase MyDate: myDate3
const myDate3 = new MyDate(1993);
console.log(`Third Date: ${myDate3.printFormat()}`);
//Third Date: 11/01/1993

//! Instancia de la clase MyDate: myDate4
const myDate4 = new MyDate(1993, 2);
console.log(`Fourth Date: ${myDate4.printFormat()}`);
//Fourth Date: 11/02/1993

//! Instancia de la clase MyDate: myDate5
const myDate5 = new MyDate(1993, undefined, 2);
console.log(`Fifth Date: ${myDate5.printFormat()}`);
//Fifth Date: 02/01/1993

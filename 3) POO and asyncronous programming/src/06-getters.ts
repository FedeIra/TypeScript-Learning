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

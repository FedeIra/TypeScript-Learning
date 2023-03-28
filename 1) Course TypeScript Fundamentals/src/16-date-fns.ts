import { subDays, format } from 'date-fns';

// subday: resta de una fecha.

const date = new Date(1998, 1, 28); // 0 = enero. Arranca a contar en 0

const rta = subDays(date, 11); // le decimos que reste 11 días. si le pongo los días en strings me tira error pq está hecho con typescript esta librería

const str = format(rta, 'dd/MM/yyyy'); // le decimos que formatee la fecha en el formato que queremos. Si le pongo un formato que no existe me tira error.

console.log(str); // 17/02/1998

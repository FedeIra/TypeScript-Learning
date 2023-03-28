// var_ = require('lodash'); // va a tirar error pq está usando require

import * as _ from 'lodash'; // aparte typescript te tira error si no lo tenes instalado el package

const data = [
  {
    username: 'nico',
    role: 'admin',
  },
  {
    username: 'valentina',
    role: 'seller',
  },
  {
    username: 'zulema',
    role: 'seller',
  },
  {
    username: 'santiago',
    role: 'customer',
  },
];

// sort by role:
const rta = _.sortBy(data, 'role');

console.log(rta);
// [
//   { username: 'nico', role: 'admin' },
//   { username: 'santiago', role: 'customer' },
//   { username: 'valentina', role: 'seller' },
//   { username: 'zulema', role: 'seller' },
// ];

// group by role:
const rta2 = _.groupBy(data, 'role');

console.log(rta2);
// {
//   admin: [ { username: 'nico', role: 'admin' } ],
//   seller: [
//     { username: 'valentina', role: 'seller' },
//     { username: 'zulema', role: 'seller' }
//   ],
//   customer: [ { username: 'santiago', role: 'customer' } ]
// }

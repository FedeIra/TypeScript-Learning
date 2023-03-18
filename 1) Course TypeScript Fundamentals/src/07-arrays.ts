(() => {
  let prices = [1, 2, 2, 1, 1, 212]; // queda definido como un array de numbers // let prices: number[] De forma implicita
  // prices.push("asas"); // no puedo pq quedó definido que es un array de números.
  // prices.push(true);
  prices.push(121212);
  prices = [1, 2, 2];

  let arrayAll = ['asas', true, 121212]; // queda definido como un array de any // let arrayAll: (string | number | boolean)[]
  arrayAll.push('asas', false, 3); // OK

  let mixedArrayExplicitely: (number | string | boolean | Object)[] = [false]; // defino tipos en el array de forma explicita

  mixedArrayExplicitely.push(1); // no puedo pq no le dije que tipo de array es.
  mixedArrayExplicitely.push({ hola: { saludo: 'hola', despedida: 'chau' } });

  console.log('mixedArrayExplicitely', mixedArrayExplicitely);

  let numbers = ['1, 2, 2, 1, 1, 212'];
  numbers.map((item) => item * 2); // esto no funciona pq numbers es un array de strings. No de números.

  console.log('numbers', numbers);
})();

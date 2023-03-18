(() => {
  let isEnable = true;
  // isEnable = 'as'; // Esto no se puede hacer pq isEnable es un booleano.
  // isEnable = 1; // Esto no se puede hacer pq isEnable es un booleano.
  isEnable = false; // Esto no se puede hacer pq isEnable es un booleano.

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);

  // isNew = random >= 0.5 ? 'true' : 'false'; // Esto no se puede hacer pq isNew es un booleano.
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: boolean = true;

  const myBoolean2: boolean = false;
})();

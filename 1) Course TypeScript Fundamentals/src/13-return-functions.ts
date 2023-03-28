(() => {
  const calcTotal = (
    prices: number[] /* array de números */
  ): string /* esta función retorna un número. Se puede especificar. Hago un contrato o acuerdo donde le digo q va a retornar */ => {
    let total = 0;
    prices.forEach((priceItem) => {
      total += priceItem;
    });
    return total.toString(); // si no le pongo toString me va a dar un error pq total es un número y no un string y no estaría cumpliendo el contrato.
  };
  const rta = calcTotal([1, 2, 2, 1, 1, 212]);
  console.log(rta);

  // ---------------------------------

  const printTotal = (
    prices: number[]
  ): void /* si no quiero q retorne nada la función */ => {
    const total = calcTotal(prices);
    console.log(`Total: ${total}`);
    // return total; // no puedo retornar nada pq le dije que no va a retornar nada. Me tira error esto.
  };

  printTotal([1, 2, 2, 1, 1, 212]); // la función va a consolear el total, pero no va a retornar nada, es decir, void.
})();

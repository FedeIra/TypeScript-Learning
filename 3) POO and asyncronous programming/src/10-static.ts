/*
!STATIC:

*/

// usando la librería math nos permite usar funciones matemáticas como PI y max:
console.log(Math.PI); // 3.141592653589793
console.log(Math.max(1, 3, 5, 7, 8, 2, 3)); // 8

// Creamos nuestro propio Math:
//* sin static:
class MyMath {
  PI = 3.14;
}

const math = new MyMath();
console.log(math.PI); // 3.14

// -----------------------------------------------------
//* con static
class MyMath2 {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((prevNumber, currentNumber) =>
      prevNumber > currentNumber ? prevNumber : currentNumber
    );
  } // le tengo que poner el static para poder llamarlo sin crear una instancia de la clase.
}

console.log(MyMath2.PI); // 3.14

// MyMath2.PI = 2;
console.log(MyMath2.PI); // 2 // El tema es que se puede cambiar el valor de pi y qeremos evitarlo. Para hacer esto además de poner static, hay que poner readonly.

// Tengo que agregarle static a la función para poder usarla sin la necesidad de crear una instancia:
console.log(MyMath2.max(1, 3, 5, 7, 8, 2, 3, 9)); // 9

const numbersExample = [3, 56, 4, 2, 10, 21];
console.log(MyMath2.max(...numbersExample)); // 56 usando el spread operator

const numbersExample2 = [-3, -56, -4, -2, -10, -21];
console.log(MyMath2.max(...numbersExample2)); // -2

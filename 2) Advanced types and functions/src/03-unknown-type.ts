//! UNKNOWN TYPE
/* Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático.Unknown nos fuerza a hacer una verificación de tipo.

¿Qué hace?:
Este nos dice que la variable es desconocida, es similar a any, pero es la forma recomendable de trabajar para evitar any en los casos que sean necesarios.

Diferencias con any:
Con any podemos hacer lo que queramos, no hay restricción alguna, pero con unknown vamos a tener advertencias al momento de usar alguna función o método con variables de tipo unknown.

Para poder pasar las advertencias tenemos que usar un filtro o realizar una verificación, una estructura condicional, para poder hacer lo que queremos con esa variable.

Recomendación:
Utilizar unknown siempre por sobre any, pero solo en caso de que sea necesario.
 */

let foo: unknown = null;

let anyVar: any; // desactiva el poder de typescript. Hay que evitarlo.

anyVar = 1;
anyVar = 'string';
anyVar = {};

let isNew: boolean = anyVar; //vale todo porque anyVar es cualquier valor.

anyVar.doSomething(); // no hay error porque anyVar vale cualquier cosa.

let unknownVar: unknown; // es como any pero más seguro. No se puede asignar a otra variable de tipo unknown.

unknownVar = 1;
unknownVar = 'string';
unknownVar = {};

// Me permite asignarle cualquier valor a la variable, pero no puedo asignarle el valor de la variable a otra variable de tipo unknown.

// let isNew2: boolean = unknownVar; // Error porque no se puede asignar a otra variable de tipo unknown.

// unknownVar.toUpperCase(); // me tira error porque no se puede acceder a las propiedades de unknown.

if (typeof unknownVar === 'string') {
  // Si es un string, entonces puedo acceder a las propiedades de string.
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNew: boolean = unknownVar;
}

const parse = (
  str: string
): unknown /* le digo q no se q me va a devolver. Puede ser un string, un number, un boolean, un objeto, etc.*/ => {
  return JSON.parse(str);
};

const parsed = parse('{"name": "fede"}'); // parsed es de tipo unknown.

console.log('parsed:', parsed); // parsed: { name: 'fede' }

/*
! EXTENDS:
qué pasa si quiero repetir atributos en varios modelos ? Por ejemplo, el id, createAt y el createAt que todos los modelos usan.En ese caso, puedo crear una interfaz que contenga esos atributos y luego extenderla en los modelos que la necesiten.

Es básicamente la herencia como funciona en la programación orientada a objetos.

Al usar interfaces podemos aplicar herencia, pero esto no ocurre con type.

Uno de los beneficios es que si quiero cambiar un atributo del modelo base, solo tengo que cambiarlo en un solo lugar y no en todos los modelos que lo usan que podrían ser miles. ejemplo: quiero cambiar el tipo de dato de id solo a string, entonces solo tengo que cambiarlo en la interfaz base y no en todos los modelos que la usan.
*/

/*
!READONLY:
Como su nombre lo indica, este feature de TS nos ayuda a tener ciertos atributos solo de lectura. Lo que significa que no pueden ser modificados. Un buen caso de uso es el id y el createdAt.

A este lo vamos a utilizar cuando queramos que cierta propiedad solamente sea de lectura y no se la pueda modificar o sobreescribir a lo largo de nuestro programa.
*/

interface InterfaceFather {
  // statements;
}
interface InterfaceChild extends InterfaceFather {
  // statements;
}

export interface BaseModelInterface {
  readonly id: string; //? readonly: solo lectura (no se puede modificar)
  readonly createdAt: Date;
  updatedAt: Date;
}

/* Luego lo importo y uso en los demás modelos */

/*
!TYPESCRIPT:
Typescript analiza tu código constantemente y te ayuda a encontrar errores antes de ejecutarlo.

!TYPESCRIPT VS JAVASCRIPT:
Typescript es un superset de javascript, es decir, es javascript con más funcionalidades.

En javascript solo te das cuenta de un error recién cuando lo ejecutas.

? //@ts-check:  puesto al principio de un archivo .js, typescript te va a avisar de los errores que tengas en el archivo. El archivo ts no necesita esto pq lo corre automaticamente.

!1) PASOS PARA INICIAR PROYECTO CON TYPESCRIPT:
*1) Crear gitignore.io (https://www.toptal.com/developers/gitignore) y agregar: windows, macOS, node, Linux. Generamos el doc y lo copiamos en el proyecto (.gitignore).
*2) crear .editorconfig: http://editorconfig.org
*3) npm init -y (esto crea el package.json)
*4) npm install -g typescript (esto para global) // Localmente: npm install typescript --save-dev
*5) npx tsc --init (esto para inicializar el archivo tsconfig.json)
*6) npx tsc --watch: esto es para que el compilador de typescript se quede escuchando los cambios que hagamos en los archivos .ts y los compile a .js automáticamente.

!2) COMO ATRAPAR ERRORES CON TYPESCRIPT:
*1) npx tsc --noEmit (esto es para que el compilador de typescript no compile a javascript, sino que solo te avise de los errores que tengas en el archivo .ts). Si no hay errores, no te va a mostrar nada.
*2) npx tsc --watch : esto es para que el compilador de typescript se quede escuchando los cambios que hagamos en los archivos .ts y los compile a .js automáticamente.
? npm tsc --noEmit (esto es para que el compilador de typescript no compile a javascript, sino que solo te avise de los errores que tengas en el archivo .ts). Si no hay errores, no te va a mostrar nada.

npx tsc --noEmit
src/useCases/skuImage.ts:17:9 - error TS2322: Type 'void' is not assignable to type 'SkuImage'.
17         return await this.catalogService.createSkuImage(skuId, input)

El compilador de typescript lo pasa a javascript para que pueda ser ejecutado en el navegador o en node.js.

npx tsc src/01-hello.ts (esto compila el archivo ts a js). Es decir, te crea un archivo .js con el mismo nombre que el .ts. y mismo código pero en js.

? //npx tsc src/demo.ts --target es6: esto compila el archivo ts a js pero con la versión de javascript que le indiques. Por defecto es la versión 3 de javascript. Acá le acabo de decir que compile a la versión ema script 6 de javascript.

? npx tsc src/demo.ts --target es6 --outDir dist // npx tsc src/*.ts --target es6 --outDir dist: acá me compila a javascript es6 todos los archivos .ts que estén en la carpeta src y los pone en la carpeta dist. Si no existe la carpeta dist, la crea.

? node src/hello.js: acá ejecuto el archivo .js que me generó el compilador de typescript.

Node ni el navegador entienden typescript, por eso lo compilamos a javascript. Por lo cual para correr un documento en typescript tenemos que hacer lo siguiente:

En resumen:
1) Creamos el archivo de typescript.
2) Lo compilamos a javascript (npx tsc src/demo.ts --target es6)
3) Lo ejecutamos con node (node src/hello.js).

Sin embargo, hay una forma más fácil de hacerlo. En vez de hacer los pasos 2 y 3, podemos hacer lo siguiente:

1) Creamos el archivo de typescript.
2) Ejecutamos el comando: npx tsc -w (esto es para que el compilador de typescript se quede escuchando los cambios que hagamos en los archivos .ts y los compile a .js automáticamente). Esto es para que el compilador de typescript se quede escuchando los cambios que hagamos en los archivos .ts y los compile a .js automáticamente.
3) Ejecutamos el comando: node dist/hello.js (esto es para ejecutar el archivo .js que se generó automáticamente).
!4) Para ejecutar el compilador en modo watch sobre un solo archivo y mandarlo a una carpeta podemos usar el siguiente comando: npx tsc -w src/01-hello.ts --outDir dist, luego lo podemos ejecutar con node dist/01-hello.js

Tambien está DENO pero está en beta.

Typescript tiene los siguientes tipos:
1) number
2) string
3) boolean
4) any
5) void
6) null
7) undefined
8) never
9) object
10) array
11) tuple
12) enum
13) unknown
14) symbol
15) object
16) function

En javascript podemos cambiar un valor a distintos tipos. En typescript no se puede hacer eso. También los tipos se declaran de forma distinta.

Javascript:
let a = 10;
a = 'hola';

Typescript:
?const a: number = 10; // declaro el tipo "number"
?a = 'hola'; // Esto no se puede hacer pq a es un número.

TypeScript también puede inferir el tipo de una variable. Por ejemplo: si le asigno un número a una variable, typescript va a inferir que es un número.

!LIBRERÍAS:
Sin soporte de typescript (ejemplo Lodash) y con soporte (ejemplo: date-fns )

La forma manual de chequearlo es si tiene un typescript config file (tsconfig.json) en el repositorio de la librería. Si lo tiene, es porque la librería tiene soporte de typescript.
*/

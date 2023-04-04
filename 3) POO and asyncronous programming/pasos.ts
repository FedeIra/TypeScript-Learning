/*
!PASOS:
*1) npm init -y
*2) npm i typescript -D
*3) npx tsc --init
*4) npm i ts-node -D
*5) gitignore
*6) editorconfig
*7) crear carpetas dist y src
*8) en tsconfig.json: "outDir": "./dist",
*9) npx tsc para transpilar todo en js a dist
*/

// Pasos fuera de visual studio code:mkdir ts-poo
//Creamos la carpeta

// cd ts-poo
//entramos a ella.

// git init
//inicializamos reposiorio.

// npm init -y
//creamos nuestro package.json

// npm i -D typescript
//instalamos TS como dependencia local de desarrollo

// npx tsc --version
//vemos que versión del TS compiler tenemos.

// npx tsc --init
//creamos nuestro tsconfig.jscon

// npm i ts-node -D
//instalamos la librería ts-node en desarrollo para transpilar y hacer más facil nuestra vida con TS.

// code .
//para abrir el VSCode.

/*
!CLASS:
Las clases sirven para crear instancias de objetos. Una clase es un molde o plantilla para crear objetos que son instancias. A partir de em6 hay clases nativas.

¿Qué es class?
JavaScript es un lenguaje orientado a objetos, pero está basado en prototipos.
Las clases son una sintaxis más amigable para trabajar con prototipos, las clases internamente son prototipos.
La utilizamos para construir instancias de objetos, es como un molde para crear cosas.

Los prototipos también se diferencia con la POO porque no solamente crean objetos mediante instancias, sino también mediante la clonación.

Buenas prácticas
Es una buena práctica inicializar las propiedades que coloquemos en nuestra clase, ya sea por fuera o dentro de nuestro constructor.
*/

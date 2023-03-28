/*
Antes para transpilar y correr archivos ts usabamos lo siguiente: a): npx tsc -w src/01-hello.ts --outDir dist, b) luego lo podemos ejecutar con node dist/01-hello.js

Ahora vamos a usar una librería ts-node que permite ejecutar directamente archivos typescript sin ejecutar el traspilado. Para instalarla: npm i -D ts-node. Luego en el package.json agregamos el siguiente script: "start": "ts-node src/01-hello.ts". Luego ejecutamos con npm start.
*/

/*
 *1) .editorconfig
 *2) .gitignore
 *3) package.json (npm init)
 *4) npm i typescript --save-dev // npm tsc --version
 *5) npx tsc --init to create tsconfig.json
 *6) en tsconfig.json cambiar "outDir": "./dist",
 *7) creo la carpeta src donde van los archivos ts
 *8) npx tsc para que transpile los archivos ts a js en la carpeta dist.
 *9) npx --watch para que se quede escuchando los cambios en los archivos ts y los transpile a js en la carpeta dist.

!Librería ts-node.
Permite ejecutar directamente archivos typescript sin ejecutar el traspilado. Para instalarla: npm i -D ts-node. Luego en el package.json agregamos el siguiente script: "start": "ts-node src/01-hello.ts". Luego ejecutamos con npm start.
*10) npm i -D ts-node
*11) npx ts-node src/demo.ts //? Con estos dos pasos te ahorras los pasos 6, 7, 8 y 9. De todas formas, se ejecuta como una dependencia de desarrollo, por lo que no se instala en producción y se corre solo en proyectos de backend.
*/

# Just Fibonacci

## Índice

1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Uso](#uso)

## Introducción

Just Fibonacci es una biblioteca de JavaScript diseñada para generar números de la secuencia de Fibonacci de manera eficiente y flexible. Esta biblioteca está en desarrollo pero ofrecerá varias formas de generar la secuencia de Fibonacci, permitiendo a los desarrolladores elegir el método que mejor se adapte a sus necesidades.

## Instalación

Para instalar Just Fibonacci, simplemente ejecuta el siguiente comando en tu terminal:

```bash
npm install just-fibonacci
```

## Uso

Para utilizar Just Fibonacci en tu proyecto, primero debes importar la biblioteca:

```js
const fibonacci = require("just-fibonacci");
```

Luego, puedes utilizar cualquiera de los métodos de generación disponibles para obtener números de la secuencia de Fibonacci.

```js
//Usando la función generadora
const list = fibonacci.genFunction();
console.log(list.next().value); //--> 0;
console.log(list.next().value); //--> 1;
console.log(list.next().value); //--> 1;
console.log(list.next().value); //--> 2;
console.log(list.next().value); //--> 3;
```

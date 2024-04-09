/* #1 Función generadora 
Antes puedes informarte sobre estas funciones acá:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
*/
// Inicialización de las variables que almacenarán los dos 
// primeros números de la secuencia de Fibonacci.
let a = 0;
let b = 1;

/**
 * Genera números de la secuencia de Fibonacci de manera infinita.
 * Esta función no toma argumentos y utiliza un bucle infinito para generar los números de Fibonacci.
 * @returns {Generator} Un generador que produce números de la secuencia de Fibonacci.
 */
function* genFunction() {
  // Bucle infinito que permite la generación continua de números de Fibonacci.
  while (true) {
    // La palabra clave 'yield' pausa la ejecución de la función y devuelve
    // el valor actual de 'a', que es el próximo número en la secuencia de Fibonacci.
    yield a;
    // Cálculo del siguiente número en la secuencia de Fibonacci.
    let c = a + b;
    // Actualización de las variables 'a' y 'b' para preparar 
    // la generación del siguiente número en la secuencia.
    a = b;
    b = c;
  }
}

module.exports = { genFunction };

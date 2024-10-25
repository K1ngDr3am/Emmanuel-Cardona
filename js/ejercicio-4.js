// Crea un vector con los numeros del 1 al 20 luego recorrerlo y sumar solo los numeros pares y mostrar el resultado

// Definir un vector numerico

let numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let resultado = 0;

// Recorrer el vector

for (let i = 0; i < numeros.length; i++) {
  // Sumar solo los pares
  if (numeros[i] % 2 == 0) {
    resultado = resultado + numeros[i];
  }
}

console.log(resultado);

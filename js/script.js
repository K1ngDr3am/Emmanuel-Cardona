// Comentario en linea

/* 
  Comentario en Bloque
*/

// Como se inicializa un vector
// Inicializar vacio
let vector = []; 

// Inicializar un vector con informacion
let numeros = [9, 10, 22, 3, 4, 11, 50, 99];

let nombre = ["Emmanuel", "Sandra", "Mauricio", "Manuela"];

let logicos = [true, false, true, true];

// Como se muestra la informacion de un vector

// Mostrar todo el vector

console.log(numeros); 

console.log(nombre);

console.log(logicos);

// Mostrar un valor en especifico

console.log(numeros[6]);

console.log(nombre[1]);

console.log(logicos[3]);

// Como recorrer un vector

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for(let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

for(let i = 0; i < logicos.length; i++) {
    console.log(logicos[i]);
}

// Como agregar datos en un vector

numeros.push(300,500,100);

console.log(numeros);

nombre.push("Sofia" , "Laura");

console.log(nombre);

logicos.push(true, false, true, true);

console.log(logicos);

//Como se eliminan datos de un vector

numeros.pop();

console.log(numeros);

// slice(posicion_inicial, cantidad_datos_a_borrar)

numeros.splice(4, 2);

console.log(numeros);
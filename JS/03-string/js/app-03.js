// Otros métodos de String
const producto = "     Monitor 20 pulgadas    ";
console.log(producto.length);

// Eliminar espacios
// const productoFiltrado = producto.trimStart(); (espacios delanteros)
// const productoFiltrado = producto.trimEnd();(traseros incluido salto de linea)
const productoFiltrado = producto.trim().toLocaleUpperCase(); //Ambos espacios y salto
console.log(producto, producto.length);
console.log(productoFiltrado, productoFiltrado.length);

// Replace
console.log(productoFiltrado.replace("20", "40"));
console.log(productoFiltrado.replace("PULGADAS", '"'));

// SLICE, EXTRAE UNA PARTE DE LA CADENA
console.log(productoFiltrado.slice(0, 10));

// metodo similar
console.log(productoFiltrado.substring(0, 5));
console.log(productoFiltrado.substring(10, 2));

// Ejemplo: mostrar la primera letra a mayúscula.
const nombre = "lilith";
const nameUperCase = nombre.slice(0, 1).toLocaleUpperCase() + nombre.slice(1);
// console.log(nombre.charAt(0).toLocaleUpperCase());
console.log(nameUperCase);

// Split
const actividad = "Estamos aprediendo javascript";
console.log(actividad.split(" "));
const cosas = "Leer, caminar, programar, escribir, correr, trabajar, comer";
console.log(cosas.split(", ")); //Devuelve un Array

// pasar a texto
const cantidad = 200.44;
console.log(cantidad.toString());

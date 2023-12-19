// existen 3 formas de declarar variables ej ES6

// Variables con var
var producto;
producto = "monitor de 23 pulgadas";
var producto2 = "teclado es USB";

// tiene tipado dinamico
producto = 200;
var disponible = true;
console.log(typeof disponible);

var suma = 34;
console.log(suma + 3 + "64"); //3764
console.log("64" + suma + 3); //64343

var categoria = "Zapatos",
  marca = "nike",
  indice = 3;

//   Reglas para nombrar variables

//  no se puede: var 31dias;
var dias31;

var _32dias;

// estilos para nombrar variables con más de una palabra
var nombreProducto = "Monitor 30 pulgadas";
var nombre_producto = "monitor";
var NombreProducto = "Monitor";

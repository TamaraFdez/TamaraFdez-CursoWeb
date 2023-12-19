const num1 = 20; //number
const num2 = "20"; //text

const num3 = 33.3;
const num4 = 0.456;
const num5 = -4;

const numero = new Number(4);

// operadores
let resultado;
resultado = num1 + num3; // + - * /

// modulo

resultado = 33 % 2; //residuo de division

// Objeto Math
resultado = Math.PI;
resultado = Math.round(2.5);
resultado = Math.ceil(2.2);
resultado = Math.floor(2.8);

resultado = Math.sqrt(144); //raiz cuadrada
resultado = Math.abs(-300);

resultado = Math.pow(2, 64);
resultado = Math.min(5, 3, 5, 6, 7, 5, 3, 22);

resultado = Math.random();
//General un numero aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 5) + 6;

//Preferencia de operadores
resultado = 20 + 30 * 6;
resultado = (20 + 30) * 6;

//descuento del 20% en un carrito de la compra
resultado = (20 + 34 + 56 + 76 + 8) * 0.2;

//incremento y decremento
let puntos = 5;
// puntos = puntos + 1;
++puntos;

//pubntos + puntos +3
puntos += 3;
puntos -= 3;
puntos *= 3;
puntos /= 3;

// console.log(puntos);

let hola = "Hola ";
hola += "Que tal?"; //el operador += esta sobrecargado para strings

const n1 = "20";
const n2 = "20.3";
const n3 = "Uno";
const n4 = 20;
console.log(n1);
console.log(Number.parseInt(n1));
console.log(Number.parseFloat(n2));
// Revisas si es entero
console.log(Number.isInteger(n2));
console.log(Number.isInteger(n4));
// revisar si es numero
console.log(Number.isNaN(Number.parseFloat(n3)));

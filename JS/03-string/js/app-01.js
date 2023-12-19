// los string representa una cadena de cáracteres
// existen 3 formas de crearlos
// como primitivas
const producto = "monitor de 23 pulgadas";
console.log(typeof producto);
const producto2 = String("monitos de 23 pulgadas");
console.log(typeof producto2);

// crear un objeto String
const producto3 = new String("monitor de 20 pulgadas");
console.log(typeof producto3);

const producto4 = 'monitor de 23" pulgadas';
producto4 = 'Monitos de 24"';
console.log(producto4);

// Metodos para Strings
console.log(producto4.length);
const hola = "hola caracola, que ase!";
console.log(hola.length);
console.log(hola[hola.length - 1]);
console.log(hola.indexOf("hola"));
console.log(hola.indexOf("haces"));
console.log(hola.includes("hola"));
console.log(hola.charAt(3));
console.log(hola.charCodeAt(3));

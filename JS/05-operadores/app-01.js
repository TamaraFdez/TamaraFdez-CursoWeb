const num1 = 20;
const num2 = "20";
const num3 = 30;

console.log(num1 > num3);
console.log(num1 < num3);
console.log(num1 >= num3);
// un igual asigna no compara, siempre se evalua a verdadero
console.log(num1 == num2);
//igualdad estricta(revisa el tipo de dato y el valor)
console.log(num1 === num2);
console.log(num1 === Number.parseInt(num2));

//desigualdad
console.log(num1 != num2);
console.log(num1 !== num2);

//null y undefined
let numero;
console.log(numero);
console.log(typeof numero);

let numero2 = null;
console.log(numero2);
console.log(typeof numero2);

console.log(numero === numero2);

//&& || !
//y
let test = true && true; //devuelve true si son las dos verdaderas si no la segunda no se evalua.
test = false && true; //false
//o
test = true || true;
test = true || false; //true
//invierte
test = !test; //invierte valor

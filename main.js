/* console.log('Hello Mr Anderson.');

let edad = 6;
let nombre = "Joak";
let apellido = "Meló";
let email = "Joak@gmail.com";
let dni = "3456643234";

console.log(edad);
console.log(nombre);
console.log(apellido);
console.log(email);
console.log(dni); */

/* let nombre = prompt("Ingrese su nombre: ");
let num1 = parseInt(prompt("Ingrese un número: "));
let txt1 = prompt("Escribe una frase: ");
let txt2 = prompt("Escribe otra frase: ");
let num2 = 4;

let resultado = num1 + num2;

console.log('Hola, ' + nombre + "!");
console.log('El resultado de la suma es: ' + resultado);
alert(txt1 + txt2); */

/* let num1 = prompt('Ingrese un número: ');
let txt = prompt('Ingrese un texto: ');
let num2 = prompt('Ingrese otro número: ');

if (num1 > 1000) {
    alert("El número " + num1 + " es mayor a 1000.");
}

if (txt == 'hola') {
    alert("El texto dice " + txt + ".");
}

if (num2 >= 10 && num2 <= 50) {
    alert("El número " + num2 + " se encuentra dentro del rango.");
} */

let group = ['mate', 'cafe', 'arina', 'palmitos', 'yerba'];
let article = prompt('Ingrese un articulo a la lista: ');

if (group.includes(article)) {
    alert("El articulo ya se encuentra en la lista.");
} else {
    group.push(article);
}

console.log(group);
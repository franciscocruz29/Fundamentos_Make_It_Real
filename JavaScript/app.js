// Reto: tu primer programa
console.log("Mi primera cadena de texto");

// Reto: Tipos y operadores
console.log("Hola Mundo");

console.log(31 + 61 + 25);

let message = 'Mi programa de JavaScript';
for (let index = 0; index < 3; index++) {
  console.log(message);
}

let expressions = [1 === 1, 1 === "1", 3 < 2, 2 > 0, 7 >= 7, 6 <= 5, 3 !== 3, "hola" !== "hola", 4 !== "4", false === true, true, false];

for (let index = 0; index < expressions.length; index++) {
  console.log(expressions[index]);
}

// Reto: variables de JavaScript

let person = 'Nayib';
let age = 34;
let country = 'Colombia';

console.log(`${person} tiene ${age} años y vive en ${country}`);

var name = 'Felipe';
var jobTitle = "Director de Marketing"

console.log("El " + jobTitle +" se llama " + name);

// Reto: Condicionales

let number = 9;
if (number > 10) {
  console.log('Es mayor que 10');
}

if (number === 8) {
  console.log('El numero es igual a 8');
} else {
  console.log('No es 8');
}

console.log(number === 8 ? 'El numero es igual a 8' : 'No es 8');

let time = 19;
if (time < 12) {
  console.log('Buenos días');
} else if (time >= 12 && time <= 18) {
  console.log('Buenos tardes');
} else {
  console.log('Buenas noches');
}

let human = "María"

if (human === "María" || human === "Pedro") {
  console.log("Estás listo")
}

let expressions2 = [3 != 4 && !("pedro" === "juan" || 26 > 10), true && !(false || true), true && !true, true && false, false, true, !(5 === 5) && 8 !== 8, ("cat" === "kat" && 26 > 30) || ("cat" === "cat" && 26 > 10), !("testing" == "testing" && !(5 > 8))]

for (let index = 0; index < expressions2.length; index++) {
  console.log(expressions2[index]);
}

// Reto: Ciclos

for (let index = 0; index < 51; index++) {
  console.log(`${index} Estoy aprendiendo`);
}

let count = 0
while (count < 5) {
  console.log("Hola desde el cuerpo del ciclo");
  count++;
}

let i = 0;

while (i <= 1) {
  console.log("Hola desde el cuerpo del ciclo");
  i += 1;
}

for (let i = 0; i < 5; i ++) {
  console.log("Hola mundo");
}

// Reto: Funciones

function greetings(name, lastname) {
  return `Mi nombre es ${name} y mi apellido es ${lastname}`;
}

console.log(greetings("Nayib", "Abdalá"));
console.log(greetings("Germán", "Escobar"));
console.log(greetings("Simón", "Hoyos"));

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));  // 30
console.log(sum(10, 10));  // 20
console.log(sum(40, 60));  // 100
console.log(sum(50, 200));  // 250

function sayMyName(name) {
  return ("Tu nombre es " + name);
}

var name = "Nayib";
console.log(sayMyName(name));  // Tu nombre es Nayib

// Reto: Arreglos

let names = ["Simón", "Natalia", "Nayib", "Diana", "Germán"];

for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

let numbers = [1, 2, 3, 4, 5];

console.log(`Los elementos a imprimir son ${numbers[1]} y ${numbers[3]}`);

let arr = ["Primero", "Segundo", "Tercero", "Cuarto"];

arr.push("Soy el último elemento");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let ages = [12, 3, 5, 44, 18, 2, 55, 26];
console.log(ages.filter(age => age >= 18));

// Reto: Cadenas de texto

let a = ["Hola mundo"[3], "    "[2], "Estoy aprendiendo"[7], "El azul es mi color favorito"[12], ""[0], " El cielo es azul"[20]];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

function countingEs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e') {
      count += 1;
    }
  }
  return count;
}

console.log(countingEs("Estoy ejercitándome los miércoles y jueves"));  // 6
console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")); // 6
console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")); // 8
console.log(countingEs("Ahora qué?")); // 0
console.log(countingEs("Los elefantes son enormes")) // 5

function message(arr) {
  return arr.join(' ');
}

console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendoJavaScript!
console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"])); //  El método join me permite unir elementos
console.log(message(["Java", "Script", "es", "muy", "útil"])) //JavaScript es muy útil

function generatePassword(str) {
  return str.toLowerCase().replaceAll(' ', '').replaceAll('a', '4').replaceAll('e', '3').replaceAll('i', '1').replaceAll('o', '0');
}

console.log(generatePassword("Hola") === "h0l4"); // "h0l4"
console.log(generatePassword("esta es una prueba") === "3st43sun4pru3b4"); // "3st43sun4pru3b4"
console.log(generatePassword("") === ''); // ""

// Reto: Objetos literales

let recipe = {
  "leche en polvo": "1 litro",
  "chocolate en barra": "3 barras",
  "azúcar": "30 gramos",
}

for (var key in recipe) {
  if (recipe.hasOwnProperty(key)) {
    console.log("Agrega " + recipe[key] + " de " + key);
  }
}

recipe.mixIngredients = function() {
  return "Mezclando los ingredientes ..."
}

console.log(recipe.mixIngredients());
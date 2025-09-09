// Variáveis e funções básicas
const name = "Andershow";

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4)); // 6

// Função de seta
const multiply = (a, b) => a * b;
console.log(multiply(3, 5)); // 15

// Função com valor padrão
function greet(user = "visitante") {
  return `Olá, ${user}!`;
}
console.log(greet(name)); // Olá, Andershow!
console.log(greet()); // Olá, visitante!

// Eventos
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  button.classList.toggle("active");
  console.log("Botão clicado!");
});

// Evento global
addEventListener("click", () => {
  console.log("Clique registrado no documento!");
});

// Funções matemáticas
function squareArea(side) {
  return side ** 2;
}

console.log(squareArea(2));
console.log(squareArea(4));

function pi() {
  return 3.14;
}

let total = 5 * pi();
console.log(total); // 15.7

function imc(peso, altura) {
  return peso / altura ** 2;
}

console.log(imc(80, 1.8));
console.log(imc(60, 1.7));

// Condicional
function corFavorita(cor) {
  if (cor === "azul") return "Você gosta do céu";
  if (cor === "verde") return "Você gosta de mato";
  return "Você não gosta de nada";
}

console.log(corFavorita());
console.log(corFavorita("verde"));

// Objetos
var people = {
  name: "Andershow",
  age: 26,
  worksAt: "DDMX",
  position: "Mobile Developer",
  isFormed: true,
  skills: ["JavaScript", "Flutter", "React"],
  address: {
    city: "Belo Horizonte",
    state: "MG",
  },
};

console.log(people.skills[1]); // Flutter
console.log(people.address.city); // Belo Horizonte

// Destructuring
const {
  name: personName,
  age,
  address: { city },
} = people;
console.log(personName, age, city);

// Objetos com métodos
var square = {
  sides: 4,
  area: function (side) {
    return side ** 2;
  },
  perimeter(side) {
    return this.sides * side;
  },
};

console.log("Sides: " + square.sides);
console.log("Area: " + square.area(5));
console.log("Perimeter: " + square.perimeter(5));

console.table(square);

// Arrays
let fruits = ["maçã", "banana", "laranja"];
fruits.push("abacaxi"); // adicionar no final
fruits.unshift("morango"); // adicionar no início
console.log(fruits);

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});

// Filter, map e reduce
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log("Even numbers:", evenNumbers);

const doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled);

const sumAll = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum of all:", sumAll);

// Spread e Rest
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

function showArgs(...args) {
  console.log(args);
}
showArgs(1, 2, 3, 4);

// Funções aninhadas
function outer(x) {
  return function inner(y) {
    return x + y;
  };
}
const addFive = outer(5);
console.log(addFive(10)); // 15

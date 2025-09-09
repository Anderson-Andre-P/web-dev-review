const name = "Andershow";

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4));

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  button.classList.add("active");
});

addEventListener("click", () => {
  console.log("Click");
});

function squareArea(side) {
  return side ** 2;
}

console.log(squareArea(2));
console.log(squareArea(4));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'

var people = {
  name: "Andershow",
  age: 26,
  worksAt: "DDMX",
  position: "Mobile Developer",
  isFormed: true,
};

var square = {
  sides: 4,
  area: function (side) {
    return side ** 2;
  },
  perimeter: function (side) {
    return this.sides * side;
  },
};

console.log("Sides: " + square.sides);
console.log("Area: " + square.area(5));
console.log("Perimeter: " + square.perimeter(5));

console.table(square);

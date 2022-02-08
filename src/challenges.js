// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  let string;
  for (let i = 0; i <= arrayString.length; i++) {
    if (arrayString[i] == null) {
      string = `${arrayString[i - 1]}, ${arrayString[0]}`;
    }
  }
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumers) {
  let maior = Math.max(...arrayNumers); // Math.max recebe varios argumentos e calcula o maior valor dentre eles
  let cont = 0; // (...arrayNumbers) Operador spread para espalhar o array dentro da função Math.max
  for (let i = 0; i < arrayNumers.length; i++) {
    if (maior === arrayNumers[i]) {
      cont++;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    // Math.abs extrai o valor absoluto de um numero (módulo)
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayString = [];
  for (const number of arrayNumbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (number % 3 === 0) {
      arrayString.push('fizz');
    } else if (number % 5 === 0) {
      arrayString.push('buzz');
    } else arrayString.push('bug!');
  }
  return arrayString;
}
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

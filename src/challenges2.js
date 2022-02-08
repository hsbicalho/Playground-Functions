// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let min = Math.min(...arrayNumbers);
  let max = Math.max(...arrayNumbers);
  if (arrayNumbers.length !== 11) return 'Array com tamanho incorreto.';
  if (max > 9)
    return 'não é possível gerar um número de telefone com esses valores';
  if (min < 0)
    return 'não é possível gerar um número de telefone com esses valores';
  for (let i = 0; i < arrayNumbers.length; i++) {
    let cont = 0;
    for (let j = 0; j < arrayNumbers.length; j++) {
      if (arrayNumbers[i] === arrayNumbers[j]) cont++;
    }
    if (cont > 2)
      return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  if (
    lineA < Math.abs(lineB - lineC) ||
    lineB < Math.abs(lineA - lineC) ||
    lineC < Math.abs(lineB - lineA)
  ) {
    return false;
  }
  if (
    lineA > Math.abs(lineB - lineC) ||
    lineB > Math.abs(lineA - lineC) ||
    (lineC > Math.abs(lineB - lineA) && lineA < lineB + lineC) ||
    lineB < lineA + lineC ||
    lineC < lineA + lineB
  )
    return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

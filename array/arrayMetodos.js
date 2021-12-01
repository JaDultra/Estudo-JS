const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop()// Elimina o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); //add no final do array
console.log(pilotos);

pilotos.shift()// Elimina o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton'); //add no começo
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0, 'Bottas', 'Massa');
console.log(pilotos);

//remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.splice(2);  //novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.splice(1,4);
console.log(algunsPilotos2);
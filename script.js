//1-Crea una función que retorne la potencia de un número dado, esta función 
// deberá recibir la potencia y el número a potenciar.

function potencia (num,potencia){
    resultado = Math.pow(num,potencia)
    return resultado
}
console.log(potencia(6,7))

//////////////////////////////////////////////////////////////////////////////
//2-Crea una función que tome el array números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const arrayNueros = [1,5,9]

function sumOfCubes(arrayNueros){

    let sumaCubos = 0
    for(let i = 0; i< arrayNueros.length; i++){
        sumaCubos += Math.pow(arrayNueros[i],3)
    }
    return sumaCubos
}

console.log(sumOfCubes(arrayNueros))

////////////////////////////////////////////////////////////////////////////
//3-Utilizando función arrow, crear una función que reciba como parámetros un 
// nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre 
// es sebastián yabiku y mi edad 33

function greetings (nombre, apellido, edad){
    return (`Hola soy ${nombre} ${apellido} y tengo ${edad} años`)
}
console.log(greetings("mrt", "hilar", 123))


///////////////////////////////////////////////////////////////////////////////
//4-Crear una función que reciba n cantidad de argumentos y los sume ( utilizar 
// parametros rest)

function sumar (...num){
    let total = 0
    for (let i = 0; i < num.length; i++){
        total+= num[i]
    }
    return total
}
console.log(sumar(5,5,20))

/////////////////////////////////////////////////////////////////////////////////
//5-Crear una función que reciba un array de valores y filtre los valores que no son 
// string
const arraydeValores = ["Hola" , 2323, "Como", "estas", 233, 332]

function filtrarString(arrayFilter){
    return arrayFilter.filter(function(valor){
        return typeof valor === 'string';
    });
}
console.log(filtrarString(arraydeValores))

////////////////////////////////////////////////////////////////////////
//6-Cree una función que tome una array de números y devuelva los números 
// mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const arrayNumeros = [4, 2, 3, 5, 6];

function encontrarMayorMenor(arrayNumeros) {
  let min = arrayNumeros[0];
  let max = arrayNumeros[0];

  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] < min) {
      min = arrayNumeros[i];
    }

    if (arrayNumeros[i] > max) {
      max = arrayNumeros[i];
    }
  }

  console.log("El número menor es:", min);
  console.log("El número mayor es:", max);
}

encontrarMayorMenor(arrayNumeros);

/////////////////////////////////////////////////////////////////////////////
//7-Escriba una función que tome un array de 10 enteros (entre 0 y 9) y devuelva 
// una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const arrayPhoneNumber = [1,2,3,4,5,6,7,8,9,0]

function formatPhoneNumber(arrayPhoneNumber) {
    const codigoArea = arrayPhoneNumber.slice(0, 3).join('');
    const segmento1 = arrayPhoneNumber.slice(3, 6).join('');
    const segmento2 = arrayPhoneNumber.slice(6, 10).join('');
  
    return `(${codigoArea}) ${segmento1}-${segmento2}`;
  }
  
console.log(formatPhoneNumber(arrayPhoneNumber))

//////////////////////////////////////////////////////////////////////////
//8-. Cree una función para multiplicar todos los valores de un array por la cantidad 
// de valores del array dado.
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]


function multiplyByLength(array) {
    const multiplicador = array.length;
    const resultado = [];
  
    for (let i = 0; i < array.length; i++) {
      resultado.push(array[i] * multiplicador);
    }
  
    return resultado;
  }
  
  console.log(multiplyByLength([2,3,1,0]));


//////////////////////////////////////////////////////////////////////////////////
// 9-Cree una función que tome dos argumentos (elemento, tiempos). El primer 
//  argumento (elemento) es el elemento que necesita repetirse, mientras que el 
//  segundo argumento (veces) es la cantidad de veces que se debe repetir el 
//  elemento. Devuelve el resultado en un array.
//  repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function repeat(elemento, veces) {
    const resultado = [];
  
    for (let i = 0; i < veces; i++) {
      resultado.push(elemento);
    }
  
    return resultado;
  }
  
console.log(repeat(10,3))



////////////////////////////////////////////////////////////////////////////////////
//10-Cree una función que tome un número como argumento y devuelva una matriz 
//  de números contando desde este número a cero.
//  countdown(5) ➞ [5, 4, 3, 2, 1, 0]


function countdown(numero) {
    let matriz = [];
  
    for (let i = numero; i >= 0; i--) {
      matriz.push(i);
    }
    return matriz;
  }
  console.log(countdown(10));
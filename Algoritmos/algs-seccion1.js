/* Algoritmos sección 1-A*/
// Lección 1
var a = 35;
a = a - 11;
console.log(a / 3); // Imprimirá 8

a = "Hola!";
console.log(a + " Adiós"); // Imprimirá "Hola! Adiós"

// Lección 2
for (var i = 0; i < 20; i++) {
  console.log("Dentro del bucle", i);
  /* Imprimirá
    "Dentro del bucle 0"
    "Dentro del bucle 3"
    "Dentro del bucle 6"
    "Dentro del bucle 9"
    "Dentro del bucle 12"
    "Dentro del bucle 15"
    "Dentro del bucle 18"
    */
  i = i + 2;
}
console.log("Salimos del bucle " + i); // Imprimirá "Salimos del bucle 21"

// Lección 3
function calcularTotal(arrayOfNumbers) {
  var suma = arrayOfNumbers[0];

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    suma += arrayOfNumbers[i];
    console.log("La suma actual es " + suma, "en el bucle", i);
    /* Imprimirá 
    "La suma actual es 4, en el bucle, 0"
    "La suma actual es 8, en el bucle, 1"
    "La suma actual es 14, en el bucle, 2"
    */
  }

  console.log("La suma total es " + suma); // Imprimirá "La suma total es 14"
}

calcularTotal([2, 4, 6]);

/* Algoritmos sección 1-B */
// Lección 1
var haceCalor = true;
var estáLloviendo = false;
var temperatura = 25; // supongamos que son grados Celsius
var quéCosasLlevar = "Llevaré";

if (haceCalor) {
  quéCosasLlevar += " traje de baño, toalla";
}
if (estáLloviendo) {
  quéCosasLlevar += " un paraguas";
}
if (temperatura < 20) {
  quéCosasLlevar += ", un abrigo";
}
quéCosasLlevar += " y una sonrisa!";

console.log(quéCosasLlevar); // Imprimira "Llevaré traje de baño, toalla y una sonrisa!"

// Lección 2
for (var i = 10; i > 0; i--) {
  if (i > 1) {
    console.log("¡" + i + "!");
    /* Imprimirá
      "¡10!"
      "¡9!"
      "¡8!"
      "¡7!"
      "¡6!"
      "¡5!"
      "¡4!"
      "¡3!"
      "¡2!"
       */
  } else if ((i = 1)) {
    console.log("¡Unooo!"); // Imprimirá "¡Unooo!"
  }
}

console.log("¡Feliz Año Nuevo!"); // Imprimirá "¡Feliz Año Nuevo!"

// Lección 3
var contarPares = 0;
var numeros = [6, 4, 12, 7, 15, 20, 10, 2, 5, 9, 13, 16, 17, 21];

for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    contarPares += 1;
  }
}
console.log("Hay " + contarPares + " números pares."); // Imprimirá "Hay 7 números pares."

/* Algoritmos sección 1 – C */
// Lección 1
var valor = 50;
function cambiarValor(nuevoValor) {
  valor = nuevoValor;
}
console.log(valor); // Imprimirá 50
cambiarValor(10); // Cambia valor a 10
console.log(valor); // Imprimirá 10

// Lección 2
var miVar = 5;
function sumarAmiVar(cantidad) {
  return miVar + cantidad;
}
console.log(miVar); // Imprimirá 5
var resultado = sumarAmiVar(-10);
console.log(resultado); // Imprimirá -5
console.log(miVar); // Imprimirá 5

// Lección 3
function esPalindromo(arreglo) {
  for (var izquierda = 0; izquierda < arreglo.length / 2; izquierda++) {
    var derecha = arreglo.length - 1 - izquierda;
    if (arreglo[izquierda] != arreglo[derecha]) {
      return "No es un palíndromo :(";
    }
  }
  return "¡¡¡SI es un palíndromo!!!";
}
var resultado1 = esPalindromo(["r", "a", "d", "a", "r"]);
console.log(resultado1); // Imprimirá "¡¡¡SI es un palíndromo!!!"
var resultado2 = esPalindromo(["c", "a", "s", "a"]);
console.log(resultado2); // Imprimirá "No es un palíndromo :("

/* Algoritmos sección 1 - D */
// Lección 1
var caja1 = "limones";
var caja2 = "pelotas";
caja2 = caja1;
console.log(caja2 + " y " + caja1); // Imprimirá "limones y limones"

// Lección 2
var caja1 = "limones";
var caja2 = "pelotas";
console.log(caja1 + " y " + caja2); // Imprimirá "limones y pelotas"
var temp = caja1;
caja1 = caja2;
caja2 = temp;
console.log(caja1 + " y " + caja2); // Imprimirá "pelotas y limones"

// Lección 3
var inicio = 0;
var final = 30;
while (final >= 0) {
  console.log("inicio: " + inicio + ", final: " + final);
  /* Imprimirá 
    "inicio: 0, final: 30"
    "inicio: 5, final: 25"
    "inicio: 10, final: 20"
    "inicio: 15, final: 15"
    "inicio: 20, final: 10"
    "inicio: 25, final: 5"
    "inicio: 30, final: 0"
    */
  inicio += 5;
  final -= 5;
}

// Lección 4
arreglo = [1, 2, 3, 4, 5];
arreglo.reverse();
console.log(arreglo); // [5, 4, 3, 2, 1]

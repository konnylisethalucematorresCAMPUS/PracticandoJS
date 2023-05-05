console.log("Hello my name is konny");
//1. Variables ****no comenzar con numeros
let variable = 10 ;
console.log(variable);
//1.1. Definicion de variables sin usar var, let, const
variable2 = 0;
console.log(variable2);
//1.2. Estilo de nombres de variables js :usar camel case
let saldoCuentaCorriente = 50000
console.log(50000);
let nombreGerente = "Josue"
saldoCuentaCorriente = 700000
saldoCuentaCorriente = false
console.log (saldoCuentaCorriente);
saldoCuentaCorriente = "setenta millones"
console.log(saldoCuentaCorriente);

console.log(saldoCuentaCorriente);
//1.3 Definicion de variables using VAR /*
/*podemos reasignar variables usando VAR podemos crear variable sin asignar valor con VAR*/
/*------------------------------------------------------------------------------------------ */
var saldo
saldo = 34000
console.log(saldo);

//2. Definicion de variables usando LET
/*-------------------------------------------------------------------------------------------*/
/*podemos reasignar variables usando let
  Y podemos crear variable sin asignar valor con let
*/
let saldos
saldos = 67000
console.log(saldos);

//3. Data Types
/* typeof()*/
//3.1 Number
let numeracion = 17;
console.log(numeracion);
console.log(typeof(numeracion));
//3.2 String Definition 
//3.2.1 String - Definicion simple
let cadena = "Alucema" /*RECOMENDADA*/

//3.2.2 String - Definicion using String(' ') 
let cadenas = String ('alucema con string')
console.log(cadenas);
//3.2.3 String - definition 
 let cadenasString = new String ('Alucema poo')
 console.log(cadenasString);
//3.3 Some string methods  /*METODOS*/
//3.3.0 length
let estudiante = "kaleth es un campers y sabe jugar pin pon "
console.log(estudiante.length);
//3.3.1 indexOF()
console.log(estudiante.indexOf('campers'));
//3.3.2 includes()
console.log(estudiante.includes('jugar'));
//3.3.3 concatenar Cadenas (Strings)
//3.3.3.1 concatenar string - using concat()
cadenaFist = "Vicky es una chica que hace parte de campus"
cadenaSecond = "y Vicky en el area que mejor se desempeña es en Ingles"
console.log(cadenaFist.concat(" ").concat(cadenaSecond));
//3.3.3.2 concatenar string - using +

//3.3.3.3 concatenar string using back ticks o templatre strings``

//3.3.4 quitando espacios en blanco en String- trimStart().trimEnd()

//3.3.5 replacing - reemplazando en String

//3.3.6 slice - cortando de un String

//3.3.7 substring - subcadena de un String 

//3.3.8 repeat ()

//3.3.9 split - dividir un String

//3.3.10 Mayusculas y minusculas - ToUpperCase - ToLowerCase

/* const paswordd1 = "Admin"
conts password2 = "admin"
console.log(password1 === password2); */

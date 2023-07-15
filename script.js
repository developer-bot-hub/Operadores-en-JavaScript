/*
var cadena = "hola"; //String
var numerico = 2.3; //Number
var logico = false; //Boolean
var nulo = null; //Null
var edadUsuario; //Undefined

console.log(typeof nulo)*/

/*
//STRING EN JS

var cadena1 = "hola! 23067!!"
var cadena2 = 'HOLA 23067!!'
var cadena3 = "2+4%6"
var cadena4 = new String(23)
var cadena5 = "milepeletay@bue.edu.ar"

//metodos de los String

console.log(cadena1.toUpperCase()) //"HOLA! 23067!!"
console.log(cadena2.toLowerCase()) //'hola 23067!!'
console.log("Cadena 3 tiene esta cantidad de caracteres:", cadena3.length)
console.log(cadena4.repeat(4)) //23232323
console.log(cadena5.replace("bue.edu.ar","gmail.com"))
console.log("Cadena 5 quedo de esta manera:" , cadena5)

*/

//PARSEINT, PARSEFLOAT , NUMBER

var cadena6 = " 23.3milena"
var bool1 = true
var cadena7 = "h73"
var cadena8 = ""

/*
console.log(parseInt(cadena6)) //23
console.log(typeof parseInt(cadena6)) //number

console.log(parseInt(bool1)) //NaN 

console.log(parseInt(cadena7)) //NaN
*/

/*
console.log(parseFloat(cadena6)) //23.3
console.log(typeof parseFloat(cadena6)) //number

console.log(parseFloat(bool1)) //NaN 

console.log(parseFloat(cadena7)) //NaN

console.log(parseFloat("25px"))
*/

/*
console.log(Number(cadena8)) //0
console.log(parseInt(cadena8)) //NaN
console.log(parseFloat(cadena8)) //NaN
*/

/*
console.log(Number(cadena6)) //NaN
console.log(Number(bool1)) //1
console.log(Number(false)) //0
console.log(Number(2>2)) //Number(false) --> 0*/

//////////OPERADORES ARITMETICOS


/*
console.log(2+2) //4
console.log(2-2) //0
console.log(2/2) //1
console.log(2%2) //0
console.log(2*2) //4
*/

//////OP INCREMENTO Y DECREMENTO

var num1 = 23
var num2 = 3

/*
console.log(num1) //23

++num1 //op incremento

console.log(num1) //24

console.log(num2) //3
--num2
console.log(num2) //2*/

////OPER ASIGNACION

/*
var puntaje = 100

puntaje *= 23 //puntaje = 100 * 3

console.log(puntaje) //2300
*/

//OPER RELACIONALES
/*
console.log(2>2) //false
console.log(2<2) //false
console.log(2>=2) //true
console.log(2<=2) //true
console.log(2==2) //true
console.log(2!=2) //false
*/
//LOGICOS

/*
//AND SIEMPRE NOS DEVUELVE TRUE CUANDO AMBOS OPERANDOS SON TRUE
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false 
*/
/*
//OR DEVUELVE TRUE CUANDO AL MENOS UNO DE LOS OPERANDOS ES TRUE
//OR DEVUELVE FALSE CUANDO AMBOS OPERANDOS SON FALSE
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(2!=2 || false) //false 
*/
//NOT (NEGACION)
//el operador de negacion invierte el valor logico del operando
console.log(!true) //false
console.log(!false) //true

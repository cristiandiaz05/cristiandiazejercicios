
let numero1 
console.log(numero1);
numero1 = 20
let numero2 = 10
console.log(numero2);
let numero3 = 15
console.log(numero3);

let persona1 = {
    nombre : "pedro",
    edad : 25,
    altura : 170,
}
let persona2 = {
    nombre : "juan",
    edad : 30,
    altura : 160,
}

----------------------------ejercicio1--------------------

if (numero1 >= numero2) {
    console.log("el primer numero es mayor");

}

------------------------------ejercicio2------------------------

if (numero1 === numero2 || (numero1 !== numero2) ) {
    console.log("son diferentes");

}

---------------------ejercicio3------------------------

if (numero1 > numero2 || numero1 === numero2) {
    console.log("cumple condicion de mayor");
}

-----------------------ejercicio4-------------------------

if (numero2 <= numero1 && numero2 <= numero3) {
    console.log("el menor es el 10");

}

----------------------ejercico5----------------------------

if (persona1.altura > persona2.altura) {
    console.log("pedro es mas alto que juan");

    if (persona2.edad > persona1.edad) {
        console.log("juan es mas viejo que pedro");

    }
}

------------------------ejercicio6--------------------------------

   let minombre = prompt("ingrese su nombre") 
   let miedad = prompt("ingrese su edad") 
   let mialtura = prompt("ingrese su altura") 
   let mivision = prompt("ingrese su vision") 


if (miedad >= 18 && mialtura >= 150 && mivision >= 8) {
    console.log("felicidades a sido aprobado para su licnecia");
}else if (miedad < 18) {
    console.log("debes esparar la mayoria de edad");
}else if (mialtura < 150) {
    console.log("no cumple con la estatura permitida");
}else if (mivision < 8) {
    console.log("debe hacerse examenes de la vista");    
}else{
    console.log("no califica para la licencia");
}

-----------------------ejrcicio7---------------------------------

let nombre = prompt("ingrese su nombre")
let tipoentrada = prompt("entrada general o vip")
let poseentrada = prompt("posee entrada si o no")
let deseasusarla = prompt("deseas usar entrada si o no")
let comprar = prompt("deseas comprar")
let dinero = prompt("cuanto dinero tienes")
let minombre = "cristian"
let mensajedebienvenida = "bienvenidos al evento"
let vip = "vip"
let afirmacion = "si"

if (nombre === minombre) {
        console.log(""+mensajedebienvenida+"");    
}else if(tipoentrada == vip) {
    console.log(""+mensajedebienvenida+"");  
}else if(poseentrada == afirmacion && deseasusarla == afirmacion) {
    console.log(""+mensajedebienvenida+"");
}else if(comprar === afirmacion){
    console.log(""+mensajedebienvenida+"");
}else if(comprar !== afirmacion){
    console.log("nos vemos la proxima");
}else if(dinero >= 1000){
    console.log(""+mensajedebienvenida+"");
}else{
      
    console.log("no puede entrar al evento");
}

-------------------------ejercicio11---------------------------------

let colores = prompt("que color usas")

switch (colores) {
    case "blanco" && "negro": 
        alert("falta de color")
        break;
    case "verde":
        alert("color de la naturaleza")
        break;
    case "azul":
        alert("color del agua")
        break;
    case "amarillo":
        alert("color del sol")
        break;
    case "rojo":
        alert("color del fuego")
        break;
    case "marron":
        alert("color de la tierra")
        break;
        alert("color de la tierra")
    default:
    }

-------------------------ejercicio9-----------------------------

let edad = prompt("cual es su edad")

if (edad <= 12) {
    alert("infante")
}else if (edad >= 13 && edad <= 18) {
    alert("adolecente")
}else if (edad >= 19 && edad <=45 ) {
    alert("joven")
}else if (edad >= 45) {
    alert("anciano")
}else if (edad > 100){
    alert("en realidad tienes esa edad")
}else{
    alert("intente de nuevo")
}
-------------------------ejrcicio10-------------------------
let jugador1 = prompt( "jugador1 piedra/papel/tijera")
let jugador2 = prompt( "jugardor2 piedra/papel/tijera")

if (jugador1 === jugador2) {
    console.log("empate");

}else if (jugador1 === "piedra") {
    if (jugador2 === "papel") {
        console.log("gana el jugador 2");
    }else if (jugador2 ==="tijera" ) {
        console.log("gana jugador 1");

    }else{
        console.log("el jugador 2 esta haciendo trampa");
    }
}else if (jugador1 === "papel") {
    if (jugador2 === "piedra") {
        console.log("gana el jugador 1");
    }else if (jugador2 ==="tijera" ) {
        console.log("gana jugador 2");
    }else{
        console.log("el jugador 2 esta haciendo trampa");
    }
}else if (jugador1 === "tijera") {
    if (jugador2 === "piedra") {
        console.log("gana el jugador 2");
    }else if (jugador2 ==="papel" ) {
        console.log("gana jugador 1");
    }else{
        console.log("el jugador 2 esta haciendo trampa");
    }
}else{
    console.log("el jugador 1 hace trampa");
}
-----------------------------ejercicio 12--------------------------
let numero1 = parseInt( prompt("coloca un numero1"))
let operacion = prompt("ingrese operacion (mas,menos,por,entre):")
let numero2 = parseInt( prompt("coloca un numero2"))
let resultado 

if (operacion === "mas") {
    resultado = numero1 + numero2
    alert("el resultado es: " + resultado);

}else if (operacion === "menos") {
    resultado = numero1 - numero2
    alert("el resultado es: " +resultado)

}else if (operacion === "por") {
    resultado = numero1 * numero2
    alert("el resultado es: " +resultado)

}else if (operacion === "entre") {
    resultado = numero1 / numero2
    alert("el resultado es: " +resultado)
}else if (numero2 == 0) {
    alert("ERROR")
}else{
    alert("operacion no reconocida use alguna de las opciones")
}

-------------------------ejrcicio13------------------------------

let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido");
let edad = prompt(" ingrese fecha de nacimiento");
let numeroid = prompt("ingrese su numero de identidad");
let nacionalidad = prompt("ingrese su lugar de nacimiento");
let altura = prompt("ingrese su estatura");

let mensaje = "datos ingresados: \n" +
"nombre: " + nombre + "\n" +
"apellido: " + apellido + "\n" + 
"edad: " + edad + "\n" +
"numeroid" + numeroid + "\n" +
"nacionalidad: " + edad + "\n" +
"altura: " + apellido + "\n" +
"sus datos estan correctos?";


let confirmacion = confirm(mensaje);

if (confirmacion) {
    let dni = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        numeroid: numeroid,
        nacionalidad: nacionalidad,
        altura: altura,
    };

    console.table(dni)

    console.log("registiro exitiso");
}else{
    console.log("intente una vez mas");
}


-------------------------ejercicio8--------------------

let numeroincognita = 5

let numerroingresado = parseInt(prompt("ingrese su numero"))

if (numerroingresado === numeroincognita) {
    alert("eres el ganador");

} else {
    if (numerroingresado > numeroincognita) {
        alert("su numero es mayor")
    } else {
        alert("tu numero es menor")
    }
}

numerroingresado = parseInt(prompt("ingrese su numero"))

if (numerroingresado === numeroincognita) {
    alert("eres el ganador");

} else {
    if (numerroingresado > numeroincognita) {
        alert("su numero es mayor")
    } else {
        alert("tu numero es menor")
    }
}

numerroingresado = parseInt(prompt("ingrese su numero"))

if (numerroingresado === numeroincognita) {
    alert("eres el ganador");

} else {
    if (numerroingresado > numeroincognita) {
        alert("su numero es mayor")
    } else {
        alert("tu numero es menor")
    }

}






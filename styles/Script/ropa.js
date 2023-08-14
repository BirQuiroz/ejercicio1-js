const pregunta1 = prompt( "Hace frio")
const pregunta2 = prompt( "Hace aire")
const pregunta3 = prompt( "Quieres abrigarte")
const pregunta4 = prompt( "Estas en un lugar con ventilador")
const pregunta5 = prompt( "Te gusta estar abrigada")

console.log("Veamos las respuestas".slice(2))
var contadorDePuntos = 0


if(pregunta1 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}

if(pregunta2 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}
if(pregunta3 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}
if(pregunta4 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}
if(pregunta5 === "si".trim().toLowerCase() ){
  contadorDePuntos = contadorDePuntos + 1
}


console.log(contadorDePuntos)

if(contadorDePuntos == 5){
    document .write("<img src=' https://friendlystock.com/es/LOS-PRODUCTOS/mujer-temblando-de-fr%C3%ADo-invernal'></img ")
}else if(contadorDePuntos == 4 && pregunta5 !== "si".trim().toLowerCase() ){
    document.write("Usa sueter")
  }

// Ejercicio 1
const edades = [25, 19, 25, 20, 26, 23]
let i = 0
while (i < edades.length) {
    console.log(edades[i])
    i++
}

// Ejercicio 2
const edades = [25, 19, 25, 20, 26, 23]
for(i = 0; i < edades.length; i++){
    if(edades[i] % 2 === 0) {
        console.log(edades[i])
    }
}

// Ejercicio 3
function numeroMasBajo(array){
    menor = array[0]
    for(let i = 0; i < 10; i++){
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    console.log("El numero más bajo del array es: " + menor)
}
const numeros = [23,4,10,12,34,23,8,4,9,10]
numeroMasBajo(numeros)

// Ejercicio 4
function numeroMasAlto(array){
    mayor = array[0]
    for(let i = 0; i < 10; i++){
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    console.log("El numero más alto del array es: " + mayor)
}
const numeros = [23,4,10,12,13,23,8,4,9,11]
numeroMasAlto(numeros)

// Ejercicio 5
function imprimirIndice(){
    const array = [4,6,2,75,2,46,7,2,]
    var indice = 3
    console.log(array[indice])
}
imprimirIndice()

// Ejercicio 6
function numeroRepetidos(){
    const array = [1,4,6,3,45,63,1,4,45,6]
    for(i = 0; i < 10; i++){
        for(j = i+1; j < 10; j++){
            if(array[i] === array[j]){
                console.log(array[j])
            }
        }
    }
}
numeroRepetidos()

// Ejercicio 7
function unirComa(array){
    return array.join(', ')
}
const myColor = ["Red", "Green", "White", "Black"]
const unir = unirComa(myColor)
console.log(unir)

// Ejercicio 8
function invertirOrden(){
    const array = [3,5,2,1]
    console.log("Array: " + array)
    var invertido = array.reverse()
    console.log("Array invertido: " + invertido)
}
invertirOrden()

// Ejercicio 9
function cadenaInvertida(){
    var cadena = "software"
    console.log(cadena.split('').sort().join(''))
}
cadenaInvertida()

// Ejercicio 10
function letrasMayusculas(oracion){
    const palabras = oracion.split(" ")
    const mayusculas = palabras.map(palabra =>{
        return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    })
    console.log(mayusculas.join(" "))
}
letrasMayusculas("desarollo de software")

// Ejercicio 11
function palabraMasLarga(frase){
    var palabras = frase.split(" ")
    var palabraMasLarga = ""
    palabras.forEach(function(palabra){
        if(palabra.length > palabraMasLarga.length){
            palabraMasLarga = palabra
        }
    })
    return palabraMasLarga;
}
var frase = prompt("Tutorial de desarrollo web")
var palabraMasLargaFrase = palabraMasLarga(frase)
console.log("La palabra más larga en la frase es: " + palabraMasLargaFrase)
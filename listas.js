//1 Generar lista generica

let listaGenerica=[];

//2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" 

let lenguajesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin','Python'];

// 3 Agregamos los siguientes elementos 'Java','Ruby' y 'GoLang' a la lista con push

lenguajesDeProgramacion.push('Java','Ruby','GoLang');

// 4 Creamos una funcion que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion"

function mostrarLista(){

    for (let i=0; i<lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}

// 5 Creamos una función para mostrar la lista en orden inverso

function mostrarListaInversa(){

    for (let i= lenguajesDeProgramacion.length -1; i>=0; i-- ){
        console.log(lenguajesDeProgramacion[i]);
    }
}

// Creamos una lista de números para pruebas de cálculo

let listaNumerosA=[15,30,45,53,60];
let listaNumerosB=[5,18,21,33,48];

// 6 Creamos una funcion para calcular el promedio de una lista de números

function calcularPromedio(){

    let suma=0;
    for (let i=0; i<listaNumerosA.length; i++){
        suma += listaNumerosA[i];
    }
    let promedio= suma / listaNumerosA.length;
    console.log("Promedio:", promedio);
    return promedio;
}

// 7 creamos una función para encontrar el número más grande y el más pequeño de una lista

function encontrarMinMax(){
    let min=listaNumerosA[0];
    let max=listaNumerosA[0];

    for (let i=1; i<listaNumerosA.length; i++) {
        if (listaNumerosA[i]< min) {
            min=listaNumerosA[i];
        }
        if (listaNumerosA[i]> max){
            max=listaNumerosA[i];
        }
    }
    console.log("Número más pequeño", min);
    console.log("Número más grande", max);
}

// 8 Creamos una función para sumar todos los elementos en una lista

function sumarLista(){
    let suma=0;
    for (let i=0; i<listaNumerosA.length; i++){
        suma +=listaNumerosA[i];
    }
    console.log("Suma total:", suma);
    return suma;
}

// 9 creamos una función para encontrar la posición de un elemento en una lista
function encontrarPosicion(elemento){
    for (let i=0; i<listaNumerosA.length; i++){
        if (listaNumerosA[i]===elemento){
            console.log("Posicion de", elemento, ":", i);
            return i;
        }
    }
    console.log("Elemento", elemento, "no encontrado");
    return -1;
}

// 10 Creamos una función para sumar 2 listas de igual tamaño elemento a elemento
function sumarListas(){
    let nuevaLista=[];
    for (let i=0; i<listaNumerosA.length; i++){
        nuevaLista.push(listaNumerosA[i] + listaNumerosB[i];)
    }
    console.log("Suma de listas:", nuevaLista);
    return nuevaLista;
}
 // 11 Creamos una función para devolver una nueva lista con el cuadrado de cada número
 Function cuadradoDeLista(){
    let nuevaLista=[];
    for (let i=0; i<listaNumerosA.length; i++){
        nuevaLista.push(listaNumerosA[i] * listaNumerosA[i]);
    }
    console.log("Cuadrado de la lista:", nuevaLista);
    return nuevaLista;
 }
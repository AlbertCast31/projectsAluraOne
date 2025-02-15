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



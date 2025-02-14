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





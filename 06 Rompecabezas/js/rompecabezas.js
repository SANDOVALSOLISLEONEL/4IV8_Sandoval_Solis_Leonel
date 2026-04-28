var instrucciones = [
    "utiliza las flechas de navegacion para mover las flechas",
    "para ordenar las flechas guiate por la imagen objetivo"
];

//para guaradar los movimietos necesitamos un arreglo
var movimientos = [

];

//tengo que saber cuales son las posiciones del rompecabezas
var rompe = [
    [1.2,3],
    [4,5,6],
    [7,8,9]
];
//necesito otra variable para saber que el orden del rompecabezas es el correcto

var rompe = [
    [1.2,3],
    [4,5,6],
    [7,8,9]
];

//necesito conocer la posicion de la ficha o pieza vacia

var filavacia = 2;
var columnavacia = 2;

//necesito una funcion que se encargue de mostrar la lista de instrucciones
function mostrarinstrucciones(instrucciones){
    for(var i = 0, i < instrucciones.leght; i++){
        mostrarinstruccioneslista(instrucciones[i],  "lista-instrucciones")
    }
}

function mostrarinstruccioneslista(instruccion, idlista){
    var ul = document.getElementById(idlista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}
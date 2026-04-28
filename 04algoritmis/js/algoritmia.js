// PROBLEMA 1
function problema1(){

    var texto = document.querySelector("#p1-input").value.trim();

    if(texto === ""){
        document.querySelector("#p1-output").textContent = "Error: debes ingresar al menos una palabra";
        return;
    }

    if(texto.includes(",")){
        document.querySelector("#p1-output").textContent = "Error: solo se permiten espacios, no comas";
        return;
    }

    var palabras = texto.split(" ").filter(p => p !== "");

    if(palabras.length === 0){
        document.querySelector("#p1-output").textContent = "Error: formato inválido";
        return;
    }

    var invertidas = palabras.reverse();

    document.querySelector("#p1-output").textContent = invertidas.join(" ");
}



// PROBLEMA 2
function problema2(){

    var v1 = [
        document.querySelector("#p2-x1").value,
        document.querySelector("#p2-x2").value,
        document.querySelector("#p2-x3").value,
        document.querySelector("#p2-x4").value,
        document.querySelector("#p2-x5").value
    ];

    var v2 = [
        document.querySelector("#p2-y1").value,
        document.querySelector("#p2-y2").value,
        document.querySelector("#p2-y3").value,
        document.querySelector("#p2-y4").value,
        document.querySelector("#p2-y5").value
    ];

    
    for(var i = 0; i < v1.length; i++){
        if(v1[i] === "" || v2[i] === ""){
            document.querySelector("#p2-output").textContent = "Error: todos los campos deben tener valores";
            return;
        }
    }

    
    v1 = v1.map(Number);
    v2 = v2.map(Number);

    
    for(var i = 0; i < v1.length; i++){
        if(isNaN(v1[i]) || isNaN(v2[i])){
            document.querySelector("#p2-output").textContent = "Error: solo se permiten números";
            return;
        }
    }

    
    v1 = v1.sort(function(a,b){return b-a});
    v2 = v2.sort(function(a,b){return b-a});

    v2 = v2.reverse();

    var producto = 0;

    for(var i = 0; i < v1.length; i++){
        producto += v1[i] * v2[i];
    }

    document.querySelector("#p2-output").textContent =
    "El producto escalar mínimo es: " + producto;
}



// PROBLEMA 3
function problema3(){

    var texto = document.querySelector("#p3-input").value.trim();

    if(texto === ""){
        document.querySelector("#p3-output").textContent = "Error: debes ingresar palabras";
        return;
    }

    if(texto.includes(" ")){
        document.querySelector("#p3-output").textContent = "Error: no se permiten espacios";
        return;
    }

    var palabras = texto.split(",");

    if(palabras.length === 0){
        document.querySelector("#p3-output").textContent = "Error: formato inválido";
        return;
    }

    var max = 0;
    var mejor = "";

    for(var i = 0; i < palabras.length; i++){

        var palabra = palabras[i].toUpperCase();

        
        if(!/^[A-Z]+$/.test(palabra)){
            document.querySelector("#p3-output").textContent = "Error: solo letras A-Z sin acentos";
            return;
        }

        var unicos = new Set(palabra);

        if(unicos.size > max){
            max = unicos.size;
            mejor = palabra;
        }
    }

    document.querySelector("#p3-output").textContent =
    mejor + " tiene " + max + " caracteres unicos";
}
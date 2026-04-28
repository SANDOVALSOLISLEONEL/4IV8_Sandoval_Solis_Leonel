//vamos  a hacer un viaje en el tiempo y ahora vamos a programar todo bajo el esquema ES6

/*
para javascript ya conocemos el concepto de variable
var
no tipado

se sustituye por las nuevas variables 
let --> es una variable de tipo "protegida" ya que solo funciona dentro de uun fragmento de codigo

const--> si es constante



if(true){
const x = "x";
console.log(x);

let x = "y";
console.log(x);
}


//para declarar en javascript las funciones hay una forma mas efectiva para declararlas y a partir de una funcion flecha

//una funcion flecha en JS a diferencia de una funcion normal, no genera su propio contexto (this), necesita ser declarada antes de ser usada y no necesita un return

//funcion cosa(String hola) {this.hola = hola}

//vamos a hacer una funcion que sume 2 numeros
function sumarnumeros(n1, n2){
    return n1 + n2;
}

const sumardosnumeros = (n1, n2) => n1+n2;
console.log(`la suma de la funcion es: (2,3): ${sumarnumeros(2,3)}`)
console.log(`la suma de la funcion es: (2,3): ${sumardosnumeros(4,3)}`)

//para armar una funcion flecha debemos entender su estructura 
//vamos a tener si o si "cadena" (el tipo de variable el nombre de la funcion y los argumentos) => operacion

*/

const razadeperros = [
"gran danes",
"doverman",
"chihuahua",
"pator aleman",
"pitbull",
"san bernando",
"xoloscuincle"
];
/*
for(let i = 0; i <= razadeperros.length; i++){
    console.log(razadeperros[i]);
}
for(const raza of razadeperros){
console.log(raza);
}

for(const indice in razadeperros){
    console.log(razadeperros[indice])
}

forEach
iterar sobre elementos de arreglos que devuelven nada


razadeperros.forEach((raza, indice, arreglooriginal) => console.log(raza));

por ejemplo necesitamos una funcion para buscar la raza chihuahua y si no existe agregarla


//funcion map eata funcion itera sobre los elemtos del arreglo y regresar un arreglo diferente con el podemos hacer lo que queramos sin necesidad de modificar el arreglo original
const razadeperrosenmayusculas = razadeperros.map((raza, indice, arreglooriginal)=> console.log(razadeperros.toUpperCase()))

*/

if(razadeperros.find(raza => raza === "chihuahua")){
    console.log("la raza si se encontro y es chihuahua")
    console.log(razadeperros);
}else{
    razadeperros.push("chihuahua");
    console.log("se agrego chihuahua al arreglo");
    console.log(razadeperros)
}
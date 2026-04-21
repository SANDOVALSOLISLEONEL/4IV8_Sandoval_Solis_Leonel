function validarn(e){
    var tecladao = (document.all)?e.Keycode:e.witch;
    if(tecladao == 8) return true;
    //creo mi expresion regular
    var patron = /[0-9\d .]/;

    var codigo = String.frontCharCode(tecladao);
    return patron.test(codigo);

}

function interes(){
var valor = document.getElementById('cantidadi').value;

var interes = parseFloat(valor);
//10% anual
var subtotal = interes * .10;
var total = subtotal + interes
document.getElementById('sueldoi').value = "$ " + total;

}

function borrar(){
    document.getElementById('saldoi').value="";
    document.getElementById('cantidadi')
}
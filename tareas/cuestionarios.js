function validarn(e){
    let tecla = e.key;
    return /[0-9.]/.test(tecla) || tecla === "Backspace";
}

// 1
function interes(){
    let v = document.getElementById('cantidad1').value;
    if(v=="" || isNaN(v)) return alert("Solo números");
    let total = parseFloat(v) * 1.10;
    document.getElementById('res1').value = "$ " + total.toFixed(2);
}
function borrar1(){
    cantidad1.value=""; res1.value="";
}

// 2
function sueldoTotal(){
    let s=v1=v2=v3=0;
    s = sueldo.value; v1=v1.value; v2=v2.value; v3=v3.value;
    if([s,v1,v2,v3].some(x=>x==""||isNaN(x))) return alert("Solo números");
    let total = parseFloat(s) + ((v1*1+v2*1+v3*1)*0.10);
    res2.value="$ "+total.toFixed(2);
}
function borrar2(){sueldo.value=v1.value=v2.value=v3.value=res2.value="";}

// 3
function descuento(){
    let c = compra.value;
    if(c==""||isNaN(c)) return alert("Solo números");
    let total = c - (c*0.15);
    res3.value="$ "+total.toFixed(2);
}
function borrar3(){compra.value=res3.value="";}

// 4
function calificacion(){
    let p=parcial.value, e=examen.value, t=trabajo.value;
    if([p,e,t].some(x=>x==""||isNaN(x)||x<0||x>10)) return alert("0-10");
    let f = (p*0.55)+(e*0.30)+(t*0.15);
    res4.value=f.toFixed(2);
}
function borrar4(){parcial.value=examen.value=trabajo.value=res4.value="";}

// 5
function porcentaje(){
    let h=hombres.value, m=mujeres.value;
    if([h,m].some(x=>x==""||isNaN(x))) return alert("Solo números");
    let total = h*1 + m*1;
    res5.value = "H:"+((h/total)*100).toFixed(1)+"% M:"+((m/total)*100).toFixed(1)+"%";
}
function borrar5(){hombres.value=mujeres.value=res5.value="";}

// 6
function edad(){
    let f = new Date(fecha.value);
    if(fecha.value=="") return alert("Selecciona fecha");

    let hoy = new Date();
    let edad = hoy.getFullYear()-f.getFullYear();

    let m = hoy.getMonth()-f.getMonth();
    if(m<0 || (m===0 && hoy.getDate()<f.getDate())) edad--;

    if(edad<8 || edad>120) return alert("Edad 8-120");

    res6.value=edad+" años";
}
function borrar6(){fecha.value=res6.value="";}

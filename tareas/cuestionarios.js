function esNumero(valor, input, errorDiv) {
    if (valor === "" || isNaN(valor)) {
        input.classList.add("error");
        errorDiv.innerText = "Solo debes introducir números";
        return false;
    } else {
        input.classList.remove("error");
        errorDiv.innerText = "";
        return true;
    }
}

// 1
function calcularInversion() {
    let input = document.getElementById("capital");
    let error = document.getElementById("error1");

    if (!esNumero(input.value, input, error)) return;

    let capital = parseFloat(input.value);
    let ganancia = capital * 0.02;

    document.getElementById("res1").innerText = "Ganancia: $" + ganancia.toFixed(2);
}

// 2
function calcularSueldo() {
    let s = document.getElementById("sueldo");
    let v1 = document.getElementById("v1");
    let v2 = document.getElementById("v2");
    let v3 = document.getElementById("v3");
    let error = document.getElementById("error2");

    if (!esNumero(s.value, s, error) ||
        !esNumero(v1.value, v1, error) ||
        !esNumero(v2.value, v2, error) ||
        !esNumero(v3.value, v3, error)) return;

    let totalVentas = parseFloat(v1.value) + parseFloat(v2.value) + parseFloat(v3.value);
    let comision = totalVentas * 0.10;
    let total = parseFloat(s.value) + comision;

    document.getElementById("res2").innerText = "Total: $" + total.toFixed(2);
}

// 3
function calcularDescuento() {
    let input = document.getElementById("compra");
    let error = document.getElementById("error3");

    if (!esNumero(input.value, input, error)) return;

    let total = parseFloat(input.value);
    let final = total - (total * 0.15);

    document.getElementById("res3").innerText = "Total a pagar: $" + final.toFixed(2);
}

// 4
function calcularCalificacion() {
    let p = document.getElementById("parcial");
    let e = document.getElementById("examen");
    let t = document.getElementById("trabajo");
    let error = document.getElementById("error4");

    if (!validarRango10(p.value, p, error) ||
    !validarRango10(e.value, e, error) ||
    !validarRango10(t.value, t, error)) return;
    
    function validarRango10(valor, input, errorDiv) {
    if (valor === "" || isNaN(valor) || valor < 0 || valor > 10) {
        input.classList.add("error");
        errorDiv.innerText = "Ingresa un número entre 0 y 10";
        return false;
    } else {
        input.classList.remove("error");
        errorDiv.innerText = "";
        return true;
    }
}

    let final = (p.value * 0.55) + (e.value * 0.30) + (t.value * 0.15);

    document.getElementById("res4").innerText = "Calificación final: " + final.toFixed(2);
}

// 5
function calcularPorcentaje() {
    let h = document.getElementById("hombres");
    let m = document.getElementById("mujeres");
    let error = document.getElementById("error5");

    if (!esNumero(h.value, h, error) ||
        !esNumero(m.value, m, error)) return;

    let total = parseFloat(h.value) + parseFloat(m.value);
    let ph = (h.value / total) * 100;
    let pm = (m.value / total) * 100;

    document.getElementById("res5").innerText =
        "Hombres: " + ph.toFixed(2) + "% | Mujeres: " + pm.toFixed(2) + "%";
}

// 6
function calcularEdad() {
    let input = document.getElementById("fechaNacimiento");
    let error = document.getElementById("error6");

    if (input.value === "") {
        input.classList.add("error");
        error.innerText = "Selecciona una fecha";
        return;
    }

    let fechaNac = new Date(input.value);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNac.getFullYear();

    let mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    //  VALIDACIÓN 8 - 120
    if (edad < 8 || edad > 120) {
        input.classList.add("error");
        error.innerText = "La edad debe estar entre 8 y 120 años";
        document.getElementById("res6").innerText = "";
        return;
    }

    input.classList.remove("error");
    error.innerText = "";

    document.getElementById("res6").innerText = "Edad: " + edad + " años";
}

function myFunction() {
    /*----------------------------INICIA LA PARTE QUE KEB PUEDE EDITAR----------------------------*/
    alert("Has perdido");
    setTimeout(perdisteMinijuego, 2000);
    /*----------------------------TERMINA LA PARTE QUE KEB PUEDE EDITAR----------------------------*/
}

/*----------------------------INICIA EL TEMPORIZADOR----------------------------*/
window.onload = myVar = setTimeout(myFunction, 15010);
cuentaRegresiva();

function cuentaRegresiva() {
    setTimeout(myTimeout1, 1000)
    setTimeout(myTimeout2, 2000)
    setTimeout(myTimeout3, 3000)
    setTimeout(myTimeout4, 4000)
    setTimeout(myTimeout5, 5000)
    setTimeout(myTimeout6, 6000)
    setTimeout(myTimeout7, 7000)
    setTimeout(myTimeout8, 8000)
    setTimeout(myTimeout9, 9000)
    setTimeout(myTimeout10, 10000)
    setTimeout(myTimeout11, 11000)
    setTimeout(myTimeout12, 12000)
    setTimeout(myTimeout13, 13000)
    setTimeout(myTimeout14, 14000)
    setTimeout(myTimeout15, 15000)
}

function myTimeout1() {
    document.getElementById("tiempoRestante").innerHTML = "14 segundos";
}

function myTimeout2() {
    document.getElementById("tiempoRestante").innerHTML = "13 segundos";
}

function myTimeout3() {
    document.getElementById("tiempoRestante").innerHTML = "12 segundos";
}

function myTimeout4() {
    document.getElementById("tiempoRestante").innerHTML = "11 segundos";
}

function myTimeout5() {
    document.getElementById("tiempoRestante").innerHTML = "10 segundos";
}

function myTimeout6() {
    document.getElementById("tiempoRestante").innerHTML = "9 segundos";
}

function myTimeout7() {
    document.getElementById("tiempoRestante").innerHTML = "8 segundos";
}

function myTimeout8() {
    document.getElementById("tiempoRestante").innerHTML = "7 segundos";
}

function myTimeout9() {
    document.getElementById("tiempoRestante").innerHTML = "6 segundos";
}

function myTimeout10() {
    document.getElementById("tiempoRestante").innerHTML = "5 segundos";
}

function myTimeout11() {
    document.getElementById("tiempoRestante").innerHTML = "4 segundos";
}

function myTimeout12() {
    document.getElementById("tiempoRestante").innerHTML = "3 segundos";
}

function myTimeout13() {
    document.getElementById("tiempoRestante").innerHTML = "2 segundos";
}

function myTimeout14() {
    document.getElementById("tiempoRestante").innerHTML = "1 segundo";
}

function myTimeout15() {
    document.getElementById("tiempoRestante").innerHTML = "Tiempo agotado";
}
/*----------------------------TERMINA EL TEMPORIZADOR----------------------------*/

/*----------------------------INICIA EL CONTADOR DE CLICKS----------------------------*/
window.onload = function() {
        var contador = 0;
        document.getElementById("boton").onclick = function() {
            contador++;
            document.getElementById("mostrarClicks").innerHTML = contador;
            if (contador === 100) {
                /*----------------------------ESTA PARTE SE EDITA POR KEB PARA LA INTERFAZ----------------------------*/
                alert("ganaste! YEY!");
                setTimeout(ganasteMinijuego, 2000);
                /*----------------------------HASTA AQUI SE PUEDE EDITAR POR KEB----------------------------*/
                clearTimeout(myVar)
            }
        }
    }
    /*----------------------------TRMINA EL CONTADOR DE CLICKS----------------------------*/
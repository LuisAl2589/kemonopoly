var preguntas = ["¿A qué se dedica Kemonito?", "¿Cuánto mide Kemonito?", "¿Dónde nació kemonito?", "¿Cuándo nació kemonito?"];
var respuestas = ["Manager y luchador profesional", "Vende elotes", "Es una botarga", "Cuenta chistes", "Menos de un metro", "Más de dos metros", "Entre 2 y 1 metro y medio", "Entre 1 metro y medio y 1 metro", "Jalisco", "Puebla", "En la selva con unos monos de especie desconocida", "En el ring", "1967", "1976", "1953", "1960"];

var incisos = [];
for (var i = 0; i < preguntas.length; i++) {
    var inciso = [preguntas[i], respuestas[i * 4]];
    var extras = []

    for (var j = 0; j < 3; j++) {
        extras.push(respuestas[j + 1 + (i * 4)])
    }

    inciso.push(extras);
    incisos.push(inciso);
}
var inciso;

(function() {
    var contedor = document.getElementById("inciso");
    var pregunta = document.createElement('div');
    inciso = Math.round(Math.random() * (incisos.length - 1));


    var respuestasI = [];
    respuestasI.push(incisos[inciso][1]);
    respuestasI.push(incisos[inciso][2][0]);
    respuestasI.push(incisos[inciso][2][1]);
    respuestasI.push(incisos[inciso][2][2]);
    pregunta.className = "pregunta";


    var respuesta1 = Math.round(Math.random() * (respuestasI.length - 1));
    var respuesta2;
    do {
        respuesta2 = Math.round(Math.random() * (respuestasI.length - 1));
    } while (respuesta1 === respuesta2);
    var respuesta3;
    do {
        respuesta3 = Math.round(Math.random() * (respuestasI.length - 1));
    } while (respuesta2 === respuesta3 || respuesta3 === respuesta1);
    var respuesta4;
    if (respuesta1 != 0 && respuesta2 != 0 && respuesta3 != 0) {
        respuesta4 = 0;
    } else if (respuesta1 != 1 && respuesta2 != 1 && respuesta3 != 1) {
        respuesta4 = 1;
    } else if (respuesta1 != 2 && respuesta2 != 2 && respuesta3 != 2) {
        respuesta4 = 2;
    } else if (respuesta1 != 3 && respuesta2 != 3 && respuesta3 != 3) {
        respuesta4 = 3
    }

    pregunta.innerHTML = incisos[inciso][0];
    contedor.appendChild(pregunta);

    for (var i = 0; i < 4; i++) {
        var respuesta = document.createElement('input');
        respuesta.type = 'button';
        respuesta.className = 'boton';
        switch (i) {
            case 0:
                respuesta.value = respuestasI[respuesta1];
                break;
            case 1:
                respuesta.value = respuestasI[respuesta2];
                break;
            case 2:
                respuesta.value = respuestasI[respuesta3];
                break;
            case 3:
                respuesta.value = respuestasI[respuesta4];
                break;
        }

        respuesta.id = 'r' + (i + 1);
        contedor.appendChild(respuesta);
    }

    document.getElementById('r1').addEventListener('click', evaluarGaner1);
    document.getElementById('r2').addEventListener('click', evaluarGaner2);
    document.getElementById('r3').addEventListener('click', evaluarGaner3);
    document.getElementById('r4').addEventListener('click', evaluarGaner4);
})();

function evaluarGaner1() {
    var respuesta = document.getElementById('r1').value;
    var respuestaC = incisos[inciso][1];
    if (respuesta == respuestaC) {
        setTimeout(ganasteMinijuego, 2000);
        alert('Respuesta correcta')
    } else {
        setTimeout(perdisteMinijuego, 2000);
        alert('Respuesta incorrecta')
    }
}

function evaluarGaner2() {
    var respuesta = document.getElementById('r2').value;
    var respuestaC = incisos[inciso][1];
    if (respuesta == respuestaC) {
        setTimeout(ganasteMinijuego, 2000);
        alert('Respuesta correcta')
    } else {
        setTimeout(perdisteMinijuego, 2000);
        alert('Respuesta incorrecta')
    }
}

function evaluarGaner3() {
    var respuesta = document.getElementById('r3').value;
    var respuestaC = incisos[inciso][1];
    if (respuesta == respuestaC) {
        setTimeout(ganasteMinijuego, 2000);
        alert('Respuesta correcta')
    } else {
        setTimeout(perdisteMinijuego, 2000);
        alert('Respuesta incorrecta')
    }
}

function evaluarGaner4() {
    var respuesta = document.getElementById('r4').value;
    var respuestaC = incisos[inciso][1];
    if (respuesta == respuestaC) {
        setTimeout(ganasteMinijuego, 2000);
        alert('Respuesta correcta')
    } else {
        setTimeout(perdisteMinijuego, 2000);
        alert('Respuesta incorrecta')
    }
}
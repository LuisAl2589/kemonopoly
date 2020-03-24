(function() {
    document.getElementById('btn_tirarDado').addEventListener("click", minijuego);
    cambiarCasilla();
    alguienGano();
})()

function alguienGano() {
    for (var i = 0; i < puntos.length; i++) {
        if (puntos[i] >= maxPuntos) {
            alert('Gano el jugador ' + (i + 1))
            setTimeout(function() { location.href = 'index.html' }, 3000);

        }
    }
}

function tirarDado() {
    var numero = Math.round((Math.random() * 5) + 1);
    document.getElementById('btn_tirarDado').removeEventListener("click", minijuego);
    animarDado(numero);
    return numero;
}

function animarDado(numero) {
    var ruta;
    for (var i = 0; i < 4; i++) {
        setTimeout(cambiarDado, 500);
    }
    ruta = 'img/dado/' + (numero) + '.png';
    document.getElementById('img_dado').src = ruta;
}

function cambiarDado() {
    var nDado = (Math.round(Math.random() * 5) + 1);
    var ruta = 'img/dado/' + (nDado) + '.png';
    document.getElementById('img_dado').src = ruta;
}

function cambiarCasilla() {
    for (var i = 0; i < jugadores; i++) {
        switch (i) {
            case 0:
                var j1 = document.getElementById('jugador1');
                switch (posiciones[0]) {
                    case 0:
                        j1.style.top = "160px";
                        j1.style.left = '40px';
                        break;
                    case 1:
                        j1.style.top = '180px';
                        j1.style.left = '229px';
                        break;
                    case 2:
                        j1.style.top = '200px';
                        j1.style.left = '310px';
                        break;
                    case 3:
                        j1.style.top = '240px';
                        j1.style.left = '370px';
                        break;
                    case 4:
                        j1.style.top = '430px';
                        j1.style.left = '440px';
                        break;
                    case 5:
                        j1.style.top = "515px";
                        j1.style.left = "250px";
                        break;
                    case 6:
                        j1.style.top = "340px";
                        j1.style.left = "200px";
                        break;
                }
                break;
            case 1:
                var j1 = document.getElementById('jugador2');
                switch (posiciones[1]) {
                    case 0:
                        j1.style.top = "210px";
                        j1.style.left = '100px';
                        break;
                    case 1:
                        j1.style.top = "120px";
                        j1.style.left = '200px';
                        break;
                    case 2:
                        j1.style.top = '70px';
                        j1.style.left = '380px';
                        break;
                    case 3:
                        j1.style.top = '220px';
                        j1.style.left = '500px';
                        break;
                    case 4:
                        j1.style.top = '350px';
                        j1.style.left = '360px';
                        break;
                    case 5:
                        j1.style.top = "470px";
                        j1.style.left = "205px";
                        break;
                    case 6:
                        j1.style.top = "360px";
                        j1.style.left = "130px";
                        break;
                }
                break;
            case 2:
                var j1 = document.getElementById('jugador3');
                switch (posiciones[2]) {
                    case 0:
                        j1.style.top = "250px";
                        j1.style.left = '150px';
                        break;
                    case 1:
                        j1.style.top = "40px";
                        j1.style.left = '200px';
                        break;
                    case 2:
                        j1.style.top = '100px';
                        j1.style.left = '300px';
                        break;
                    case 3:
                        j1.style.top = '220px';
                        j1.style.left = '440px';
                        break;
                    case 4:
                        j1.style.top = '390px';
                        j1.style.left = '400px';
                        break;
                    case 5:
                        j1.style.top = "440px";
                        j1.style.left = "270px";
                        break;
                    case 6:
                        j1.style.top = "390px";
                        j1.style.left = "60px";
                        break;
                }
                break;
            case 3:
                var j1 = document.getElementById('jugador4');
                switch (posiciones[3]) {
                    case 0:
                        j1.style.top = "230px";
                        j1.style.left = '40px';
                        break;
                    case 1:
                        j1.style.top = "40px";
                        j1.style.left = '130px';
                        break;
                    case 2:
                        j1.style.top = '100px';
                        j1.style.left = '400px';
                        break;
                    case 3:
                        j1.style.top = '260px';
                        j1.style.left = '500px';
                        break;
                    case 4:
                        j1.style.top = '470px';
                        j1.style.left = '410px';
                        break;
                    case 5:
                        j1.style.top = "350px";
                        j1.style.left = "250px";
                        break;
                    case 6:
                        j1.style.top = "400px";
                        j1.style.left = "100px";
                        break;
                }
                break;
        }
    }
}

function cambiarPosicion() {
    var suerte = tirarDado();
    for (var i = 0; i < suerte; i++) {
        posiciones[turno]++;
        if (posiciones[turno] >= 7) {
            posiciones[turno] = 0;
        }
    }
    cambiarCasilla()
}

function minijuego() {
    cambiarPosicion();
    switch (posiciones[turno]) {
        case 0:
            pasarTurno();
            (function() { document.getElementById('btn_tirarDado').addEventListener("click", minijuego); })()
            break;
        case 1:
            setTimeout((pasarVariables('adivina.html', 'jugadores,puntos,turno,posiciones,maxPuntos')), 2000);
            break;
        case 2:
            setTimeout((pasarVariables('buscaminas.html', 'jugadores,puntos,turno,posiciones,maxPuntos')), 2000);
            break;
        case 3:
            setTimeout((pasarVariables('kememorama.html', 'jugadores,puntos,turno,posiciones,maxPuntos')), 2000);
            break;
        case 4:
            setTimeout((pasarVariables('ppt.html', 'jugadores,puntos,turno,posiciones,maxPuntos')), 2000);
            break;
        case 5:
            setTimeout((pasarVariables('pressboton.html', 'jugadores,puntos,turno,posiciones,maxPuntos')), 2000);
            break;
        case 6:
            setTimeout((pasarVariables('trivia.html', 'jugadores,puntos,turno,posiciones,maxPuntos')), 2000);
            break;
    }
}
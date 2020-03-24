(function() {
    document.getElementById('nJ2').addEventListener('click', jugar2);
    document.getElementById('nJ3').addEventListener('click', jugar3);
    document.getElementById('nJ4').addEventListener('click', jugar4);
})();

function jugar2() {
    jugadores = 2;
    maxPuntos = (document.getElementById('maxPuntos').value) ? document.getElementById('maxPuntos').value : 5;
    crearJugadores()
    pasarVariables('kemonopoly.html', 'jugadores,maxPuntos,puntos,posiciones,turno');
}

function jugar3() {
    jugadores = 3;
    maxPuntos = (document.getElementById('maxPuntos').value) ? document.getElementById('maxPuntos').value : 5;
    crearJugadores()
    pasarVariables('kemonopoly.html', 'jugadores,maxPuntos,puntos,posiciones,turno');
}


function jugar4() {
    jugadores = 4;
    maxPuntos = (document.getElementById('maxPuntos').value) ? document.getElementById('maxPuntos').value : 5;
    crearJugadores()
    pasarVariables('kemonopoly.html', 'jugadores,maxPuntos,puntos,posiciones,turno');
}

function crearJugadores() {
    switch (jugadores) {
        case 2:
            puntos = [0, 0];
            posiciones = [0, 0];
            break;
        case 3:
            puntos = [0, 0, 0];
            posiciones = [0, 0, 0];
            break;
        case 4:
            puntos = [0, 0, 0, 0];
            posiciones = [0, 0, 0, 0];
            break;
    }
    turno = 0;
}
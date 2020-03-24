(function() {
    var texto = document.createElement('div');
    texto.innerHTML = 'Turno: ' + (turno + 1) + '° jugador'
    document.getElementById('turno').appendChild(texto);
})();
(function crearKemonitos() {
    for (var i = 1; i <= jugadores; i++) {
        var kemonito = document.createElement('div');
        kemonito.id = ('jugador' + i);
        kemonito.className = ('jugador j' + i);
        var img_jugador = document.createElement('img');
        img_jugador.src = 'img/jugadores/' + i + '.png';
        img_jugador.id = ('img_jugador' + i);
        img_jugador.className = 'img_jugador';
        kemonito.appendChild(img_jugador);
        document.getElementById("tablero").appendChild(kemonito);
    }
})();

(function() {
    var contenedor = document.createElement('div');
    contenedor.id = 'puntuaciones';
    contenedor.className = 'puntuaciones'

    var encabezado = document.createElement('h1');
    encabezado.innerHTML = 'Puntuaciones';
    contenedor.appendChild(encabezado);

    var listaPuntos = document.createElement('ul');
    listaPuntos.className = 'listaPuntos'

    for (var i = 0; i < jugadores; i++) {
        var elemento = document.createElement('li');
        elemento.innerHTML = 'Jugador ' + (i + 1) + ': ' + puntos[i];
        listaPuntos.appendChild(elemento);
    }

    contenedor.appendChild(listaPuntos);
    document.getElementById('info').appendChild(contenedor)
})();
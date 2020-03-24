var jugadores,
    puntos,
    turno,
    posiciones,
    maxPuntos;


(function() {
    var cadVariables = location.search.substring(1, location.search.length);
    var arrVariables = cadVariables.split("&");
    for (i = 0; i < arrVariables.length; i++) {
        var arrVariableActual = arrVariables[i].split("=");
        if (arrVariableActual[0] == 'puntos' || arrVariableActual[0] == 'posiciones') {
            eval(arrVariableActual[0] + '=[' + unescape(arrVariableActual[1]) + '];')
        } else {
            if (isNaN(parseFloat(arrVariableActual[1]))) {
                eval(arrVariableActual[0] + "='" + unescape(arrVariableActual[1]) + "';");
            } else {
                eval(arrVariableActual[0] + "=" + arrVariableActual[1] + ";");
            }
        }
    }
})();
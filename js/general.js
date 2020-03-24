function pasarTurno() {
    if (turno >= jugadores - 1) {
        turno = 0;
    } else {
        turno++;
    }
}

function pasarVariables(pagina, nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for (i = 0; i < nomVec.length; i++)
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i])) + "&";
    pagina = pagina.substring(0, pagina.length - 1);
    location.href = pagina;
}

function ganasteMinijuego() {
    puntos[turno]++;
    pasarTurno();
    pasarVariables("kemonopoly.html", 'jugadores,puntos,turno,posiciones,maxPuntos');
}

function perdisteMinijuego() {
    pasarTurno();
    pasarVariables("kemonopoly.html", 'jugadores,puntos,turno,posiciones,maxPuntos');
}
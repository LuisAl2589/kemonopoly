<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KEMONOPOLI</title>
    <link rel="stylesheet" type="text/css" href="css/estilo_principal.css">
    <script src="js/gInicializar.js"></script>
</head>

<body onpaste="return false">
    <div id="tablero" class="tablero">
        <img class="img_tablero" src="img/tablero.png">
        <div class="inicio">INICIO</div>

    </div>

    <input type="button" id="btn_tirarDado" class="boton btn_dado" value="Tirar dado">
    <div class="img_dado">
        <img id="img_dado" src="img/dado/1.png">
    </div>
    <div id="info" class="info">
        <div id="turno">
        </div>
        <img src="img/kemono.gif" alt="kemonito_gif" height="300" width="300">
    </div>



    <script src="js/kemono.js"></script>
    <script src="js/general.js"></script>
    <script src="js/kemonopoly.js"></script>
</body>

</html>
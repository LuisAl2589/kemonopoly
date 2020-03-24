<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kemonopoly</title>
    <link rel="stylesheet" href="css/estilo_principal.css">
    <script src="js/gInicializar.js"></script>
</head>

<body onpaste="return false">
    <h1>Escoje el número de jugadores para empezar</h1>
    <div class="botones">
        <input type="button" class="boton" id="nJ2" value="2 jugadores">
        <input type="button" class="boton" id="nJ3" value="3 jugadores">
        <input type="button" class="boton" id="nJ4" value="4 jugadores">
    </div>
    <div>
        <table>
            <tr>
                <td>Introduce el máximo de puntos</td>
                <td><input type="number" id="maxPuntos" onkeypress="return false" maxlength="2" min="1" max="20"></td>
            </tr>
        </table>
    </div>


    <script src="js/general.js"></script>
    <script src="js/index.js"></script>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="css/estilo_ppt.css">
    <title>Piedra papel tijeras</title>
    <meta charset="utf-8">
    <script src="js/gInicializar.js"></script>
</head>

<body onpaste="return false">
    <script src="js/ppt.js"></script>
    <div class="contenedor">
        <table>
            <tr>
                <th colspan="3">
                    <div class="text">Choose wisely</div>
                </th>
            </tr>
            <tr>
                <th colspan="3">
                    <div class="imagenes"></div>
                </th>
            </tr>
            <tr>
                <th>
                    <div class="piedra"><button><img class="zoom" src="img/piedra.jpg" alt="piedra_xd" width="100" height="100" onclick="tijeras('1')"></button></div>
                </th>
                <th>
                    <div class="papel"><button><img class="zoom" src="img/papel.jpg" alt="papel_xd" width="100" height="100" onclick="tijeras('2')"></button></div>
                </th>
                <th>
                    <div class="tijeras"><button><img class="zoom" src="img/tijera.jpg" alt="tijera_xd" width="100" height="100" onclick="tijeras('3')"></button></div>
                </th>


            </tr>
            <tr>
                <th>
                    <div class="piedra"><img width="100" height="100" id="selected"></div>
                </th>
                <th>
                    <div class="papel"><img width="100" height="100" id="vs"></div>
                </th>
                <th>
                    <div class="tijeras"><img width="100" height="100" id="against"></div>
                </th>
            </tr>
            <tr>
                <th colspan="3">
                    <div class="sol"><img id="sol" width="150" height="200"></div>
                </th>
            </tr>
        </table>
    </div>
    <script src="js/general.js"></script>
</body>

</html>
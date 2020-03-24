<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¿Puedes adivinar el numero?</title>
    <link rel="stylesheet" type="text/css" href="css/estilo_principal.css">
    <script src="js/gInicializar.js"></script>
    <script src="js/general.js"></script>
    <script>
        //keb todo lo vpy a hacer aquí para que no te revuelvas a la hora de juntarlos
        //Ingresar su nombre 
        //Que encuentre un numero entre el 1 y el 20
        var min = 1;
        var max = 10;
        var numero;
        var no_intentos = 0;
        //var nombre = prompt("Hola, has llegado hasta esta casilla, podras pasar a la siguiente si adivinas el número. Primero, ¿Cuál es tu nombre?")
        var num_aleatorio = Math.round(Math.random() * (max - min) + 1);



        for (no_intentos; no_intentos < 7; no_intentos++) {
            numero = parseInt(prompt(', Ingresa un número entre el' + min + ',y el número' + max));

            function validadNumero(numero) {
                if (!/^([0-9])*$/.test(numero)) {
                    return false;
                } else {
                    return true;
                }
            }

            if (numero >= min && numero <= max) {
                if (numero < num_aleatorio) {
                    alert('El número que ingreso es menor que el numero que debe encontrar unu');
                } else if (numero > num_aleatorio) {
                    alert('El número que ingreso es mas grande que el numero que debe encontrar unu')
                } else if (numero == num_aleatorio) {
                    break;
                }
            } else {
                alert('Debe ingresar un numero entre' + min + ',y el numero' + max);
            }
        }
        if (numero == num_aleatorio) {
            alert('Felicidades uwu, ya encontraste el numero! uwu encontraste el número en,' + no_intentos + ',intentos.');
            ganasteMinijuego();
        } else {
            alert("Se acabaron tus intentos unu, perdiste, vuelve a intentarlo uwu");
            perdisteMinijuego();
        }
    </script>

</head>

<body onpaste="return false">

</body>

</html>
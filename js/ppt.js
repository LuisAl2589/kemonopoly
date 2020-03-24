function tijeras(select) {
    // body...
    var tijeras = 2;
    var contr = Math.round(Math.random() * (1 - 3) + 3);
    //alert(contr)
    if (select == 1) {
        var selection = document.getElementById("selected");
        selection.src = "img/piedra.jpg";
        var versus = document.getElementById("vs");
        versus.src = "img/versus.jpg"
        if (contr == 1) {
            var contra = document.getElementById("against");
            contra.src = "img/tijera.jpg"
        } else {
            if (contr == 2) {
                var contra = document.getElementById("against");
                contra.src = "img/piedra.jpg"
            } else {
                var contra = document.getElementById("against");
                contra.src = "img/papel.jpg"
            }
        }
    } else {
        if (select == 2) {
            var selection = document.getElementById("selected");
            selection.src = "img/papel.jpg";
            var versus = document.getElementById("vs");
            versus.src = "img/versus.jpg"
            if (contr == 1) {
                var contra = document.getElementById("against");
                contra.src = "img/piedra.jpg"
            } else {
                if (contr == 2) {
                    var contra = document.getElementById("against");
                    contra.src = "img/papel.jpg"
                } else {
                    var contra = document.getElementById("against");
                    contra.src = "img/tijera.jpg"
                }
            }
        } else {
            if (select == 3) {
                var selection = document.getElementById("selected");
                selection.src = "img/tijera.jpg";
                var versus = document.getElementById("vs");
                versus.src = "img/versus.jpg"
                if (contr == 1) {
                    var contra = document.getElementById("against");
                    contra.src = "img/papel.jpg"
                } else {
                    if (contr == 2) {
                        var contra = document.getElementById("against");
                        contra.src = "img/tijera.jpg"
                    } else {
                        var contra = document.getElementById("against");
                        contra.src = "img/piedra.jpg"
                    }
                }
            }
        }
    }


    if (tijeras > contr) {
        //alert("ganaste ")
        var conclusion = document.getElementById("sol")
        conclusion.src = "img/ganar.jpg"
        setTimeout(ganasteMinijuego, 2500)
            //	conteo(1);
    } else {
        if (tijeras < contr) {
            //alert("Perdiste")
            var conclusion = document.getElementById("sol")
            conclusion.src = "img/perder.jpg"
            setTimeout(perdisteMinijuego, 2500)
                //	conteo(2);
        } else {
            //alert("Nadie ganó jaja")
            var conclusion = document.getElementById("sol")
            conclusion.src = "img/empate.gif"
        }
    };

}

/*function conteo(result) {
	// body...
	var vict = 0;
	var der = 0;
	if (vict<3 || der<3){
		if (result==1) {
			vict++;
			alert("victorias: "+ vict);
			result= 3
		}else{if (result==2) {
			der++;
			alert("derrotas: "+ der);
			result=3
		}}
	}
	
}*/
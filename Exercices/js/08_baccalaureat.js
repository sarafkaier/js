// alert("okay");

var moy1 = parseFloat(prompt("Quel est votre note"));

    if (moy1 < 10) {
        document.write("Vous êtes recalé");
    }
    else if ((moy1 >= 10) && (moy1 < 12)) {
        document.write("Vous êtes reçu");
    }
    else if ((moy1 >= 12) && (moy1 <= 20)){
        document.write("Votre avez la mention");
    }
    else {
        document.write("Je ne comprend pas votre requête");
    }

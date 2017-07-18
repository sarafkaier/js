// alert("coucou");

var nombre1 = parseInt(prompt("saisissez un nombre"));
var nombre2 = parseInt(prompt("saisissez un second nombre"));

if ( (!isNaN(nombre1)) && (!isNaN(nombre2)) ) {
    if (nombre1 < nombre2) {
        document.write("Votre 1er nombre : " + nombre1 + " est plus petit que votre 2nd : " + nombre2);
    } else if (nombre1 > nombre2){
        document.write("Votre 1er nombre : " + nombre1 + " est plus grand que votre 2nd : " + nombre2);
    }
    else {
        document.write("Votre 1er nombre : " + nombre1 + " est égal à votre 2nd : " + nombre2);
    }
} else {
    alert("vous n'avez pas saisi de nombre(s)");
}

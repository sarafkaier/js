// alert('oui');

var choix = "";
var choix2 = 0;

while ((choix !== "oui") && (choix !== "non")) {
choix = prompt("Jouons au ni oui ni non");
document.write(choix + " pour la " + choix2 + "° fois, dis moi oui et non !<br/>");
choix2++
}
document.write("<h1 style='background-color:cyan; text-align;'>Fini ;-) !</h1>");

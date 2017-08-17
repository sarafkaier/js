// alert("salut !");

var jourSemaine = prompt("Indiquez le jour");

if (jourSemaine == "lundi") {
    document.write("Demain nous serons mardi");
} else if (jourSemaine == "mardi") {
    document.write("Demain nous serons mercredi");
} else if (jourSemaine == "mercredi") {
    document.write("Demain nous serons jeudi");
} else if (jourSemaine == "jeudi") {
    document.write("Demain nous serons vendredi");
} else if (jourSemaine == "vendredi") {
    document.write("Demain nous serons samedi");
} else if (jourSemaine == "samedi") {
    document.write("Demain nous serons dimanche");
} else if (jourSemaine == "dimanche") {
    document.write("Bon courage :)");
} else {
    alert("jour inconnu...");
}

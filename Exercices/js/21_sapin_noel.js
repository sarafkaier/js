// demande à l'utilisateur le nombre d'étage du sapin
var taille = prompt ("Choisis le nombre d'étage du sapin");

// on met les étages du sapin
for (var etage = 1; etage <= taille; etage++) {
    // 1- pour chaque étage mon compteur est égal à l'étage + 3
    for(var i = 0; i < etage + 3 ; i++) {
        // 2- pour cahque ligne j'ai => ((eatge + ligne)*2)-1 étoile
        for(var nb_etoile = 1; nb_etoile <= ((etage + i)*2)-1 ; nb_etoile++) {
            document.getElementById('sapin').innerHTML += '*';
        }// fin nombre d'étoiles par ligne
        document.getElementById('sapin').innerHTML += '<br>';
    }// fin lignes
} // fin étape

// on affiche le pied qui dépend du nombre d'étages du sapin
for (var pied = 1;  pied <= taille; pied++) {
    document.getElementById('sapin').innerHTML += '|';
    document.getElementById('sapin').innerHTML += '<br>';
}

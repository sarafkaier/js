/*
1- VARIABLES qui stockent un élément du DOM( document object model)
*/
// cible le bouton afficher /cacher dans le DOM
var bouton = document.getElementById('toggle-rectangle');

// cible le rectangle dans le DOM
var rectangle = document.querySelector('.rectangle');

/*
2- FONCTION
*/

/*
a- fonction au click sur le boutton
*/
// La méthode ou fonction .toogle() va ajouter ou supprimer la CSS (comme un interrupteur)
function surClickBouton(){
    rectangle.classList.toggle('hide');// correspond à .hide en css qui à la propriété display : none;
}
/*
b- fonction au survol de la souris
*/
function auSurvolRectangle(){
    rectangle.classList.add('important');
}
/*
c- fonction à la sortie du survol du rectangle
*/
function aSortieRectangle(){
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');
}
/*
d- fonction au double-click*/
function auDoubleClic(){
    rectangle.classList.toggle('good');
}

/*
3- ECOUTEUR D'EVENEMENT
*/
/*L'écouteur prend 2 paramètres => écouteur(paramètre_1, paramètre_2)
en 1er => l'évènement
en 2nd => la fonction à éxécuter à cet évènement
*/

/*
a- installe UN gestionnaire d'évènement au clic sur le bouton ciblé dans ma variable BUTTON*/
bouton.addEventListener('click', surClickBouton);
/*
b- installe mon écouteur au survol sur le rectangle*/
rectangle.addEventListener('mouseover', auSurvolRectangle);
/*
c- installe l'écouteur sur la sortie de la souris*/
rectangle.addEventListener('mouseout', aSortieRectangle);
/*
d- écouteur au double clic*/
rectangle.addEventListener('dblclick', auDoubleClic);

// alert("hé !");

/*
L'opérateur ET : && ou AND
*/
// -- Si je cumule 2 conditions :
// => prenom === prenomLogin
// => monAge === ageLogin
//  pour que les 2 correspondent pour être validés il faut les associés
if ( (prenomLogin === prenom) && (ageLogin === monAge) ) {
    /*... code ...*/
    /*je ne rentre que si les conditions sont vraies*/
}
if((A) && (B)){...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI

/*
L'opérateur OU : || ou OR (| pipe => alt gr + 6)
*/
if ( (C) || (D) ){...}
=> si C est FAUX ou D est FAUX => FAUX
=> si C est FAUX ou D est VRAI => VRAI
=> si C est VRAI ou D est FAUX => VRAI
=> si C est VRAI ou D est FAUX => VRAI

/*
L'opérateur "!" signifie : le contraire de
*/
var utilisateurLog = true;
if(!utilisateurLog){
    // si l'utilisateur n'est pas loggé.
}
// ce qui revient à écrire :
if (utilisateurLog == false) {
    // si l'utilisateur n'est pas loggé.
}

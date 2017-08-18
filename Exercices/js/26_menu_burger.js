// alert('slt');

(function() {
    /*
    1- VARIABLES
    */
    // cible le bouton
    var bouton = document.querySelector(".c-hamburger");
    // cible le panneau glissant
    var panneau = document.querySelector("#menu-panel");

    /*
    2- FONCTION
    */
    // au clic le bouton => 2 actions :
    // - animation du menu (les barres => la croix)
    // - glissement du panneau vers la droite
    bouton.addEventListener("click", function(evenement) {
        evenement.preventDefault();
        this.classList.toggle("is-active");
    // on ajoute la class .show à ma div#menu-panel
    // en fait en CSS on applique un trransform: translateX(0)
    // on utilise l'écriture ternaire '? :' <=> 'if else'
    (this.classList.contains('is-active') === true) ?
        panneau.classList.toggle('show'):
        panneau.classList.remove('show');
    });
})();

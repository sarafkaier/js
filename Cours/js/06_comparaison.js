// alert("hello");

// L'opérateur de comparaison == signifie 'égal à'
// il permet de vérifier que les VALEURS de 2 variables sont identiques
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2);//retourne TRUE

// L'opérateur de comparaison === signifie 'strictement égal à'
// il permet de vérifier la VALEUR et le type
console.log(nb1===nb2);//retourne FALSE

// -- L'opérateur != signifie 'différent de ... en VALEUR'
console.log(nb1 != nb2);//retourne FALSE

// -- L'opérateur !== signifie 'strictement différent de ... en VALEUR et en TYPE'
console.log(nb1 !== nb2);//retourne TRUE

// // Exercice :
// var prenom = "Sara";
//
// var prenomLogin = prompt("Quel est votre prénom ?");
// console.log(prenom);
//
// var Majorite = 22;
//
// var age = parseInt(prompt("Quel est votre âge ?"));
// if (age >=Majorite) {
//     alert("Bienvenue, vous êtes majeur");
// } else {
//     alert("Vous êtes trop jeune, attendez encore un peu");
// }

// Corrigé :
var prenom, monAge;
prenom = "Sara";
monAge = 999;
mdp = "bibi";
// 1 -- Demander son prénom à l'utilisateur avec un prompt
var prenomLogin = prompt("Quel est votre prénom ?");
// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
if (prenomLogin === prenom) {
    //alert("test");

// 2a. Si tout est ok, je continue la vérification avec l'âge
// 2a1. Demande à mon utilisateur son âge via un prompt
    var ageLogin = parseInt(prompt("Votre âge ?"));
    if (ageLogin === monAge) {

        var mdpLogin = prompt("Le mot de passe ?");
        if (mdpLogin === mdp) {
        alert("Bienvenue" + prenomLogin);
        } else {
            // 2a2. Si les Ages ne correspondent pas, je lance une ALERT.
            alert("Pb de mot de passe !");
        }
    } else {
        alert("Erreur d'age");
    }
} else {
    // 2b. Sinon, les prenoms ne correspondent pas, je lance une alert
    alert("Attention, prénom non reconnu");
}

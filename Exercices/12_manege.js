// alert('test');

// 1-- boucle FOR
// for (manège = 1; manège < 11; manège++) {
// document.write("<h3>C'est le tour de manège n° " + manège + "</h3>");
// }

// document.write("<hr />");
// document.write("<hr />");

// 1-- boucle WHILE
// var manège = 1;
// while (manège < 11) {
// document.write("<h3>C'est le tour de manège n° " + manège + "</h3>");
// manège++;
// }

/* 2-- boucle WHILE */
var question = parseInt(prompt("Vous êtes au tour combien ?"));
var compteur = 0;
while (compteur < question) {
document.write("<h3>C'est le tour de manège n° " + compteur + "</h3>");
compteur++;
}

/* 2-- boucle FOR */
var question = parseInt(prompt("Vous êtes au tour combien ?"));
for ( compteur = 0 ; compteur < question; compteur++) {
document.write("<h3>C'est le tour de manège n° " + compteur + "</h3>");
}

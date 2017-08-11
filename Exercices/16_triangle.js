// alert('coucou');

// for ( i = 0; i < 7; i++) {
//    for ( j = 0; j <= i; j++) {
//       document.write("#");
//    }
//    document.write("<br>");
// }

// correction :

//boucle For
console.log("FOR");
var diese = "";

for(var i = 1; i < 8; i++){
    diese += "#";//diese = diese + "#";
    console.log(diese);
    document.write(diese + '<br>');
}

//boucle WHILE
console.log("WHILE");
var ligne = "";
var j = 1;//initialisation du compteur

while (j <= 7) {
    ligne = ligne +'$';
    console.log(ligne);
    document.write(ligne + '<br>');
    j++;
} 
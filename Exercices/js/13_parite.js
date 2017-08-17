// alert("cuoc");

for (var i = 1; i <= 10; i++){
    if (i % 2 === 0) {
        document.write("<h4>" +i + " est pair</h4> ");}
    else if(i % 2 === 1) {
        document.write("<h4>" +i + " est impair</h4>");}
}
document.write("<hr/>");

// var chiffre = parseInt(prompt("Saisissez un chiffre"));
// var chiffreMax = (chiffre + 10);
// while (chiffre <= chiffreMax) {
//     if (chiffre % 2 === 0) {
//         document.write("<h4>" + chiffre + " est pair</h4>");
//     } else {
//         document.write("<h4>" + chiffre + " est impair</h4>");
//     }
//     chiffre++;
// }
// document.write("<hr/>");

var nbUser = parseInt(prompt("Ton chiffre ?"));
var nbUserMax = (nbUser + 10);
for (var tour = nbUser; tour <= nbUserMax; tour++) {
    if (tour % 2 ===0) {
        document.write( tour + " est pair" + "<br />");
    }
    else{
        document.write( tour + " est impair" + "<br />");
    }
}

console.log("01 - Fonctions");

var nb1 = 10;
var nb2 = 20;

function additionner(nb1, nb2){
return nb1 + nb2;
}

var resultat1 = additionner(nb1, nb2);
console.log("resultat1 " + resultat1);

var somme = additionner;
resultat2 = somme(nb1, nb2);
console.log("resultat2 " + resultat2);

var multiplication = function(nb1,nb2){
    return nb1*nb2;
}
var resultat3 = multiplication(nb1,nb2);
console.log("resultat3 " + resultat3);

var afficherOperation = function(nomOperation, operation,nb1,nb2){
    console.log(nomOperation + "(" + nb1 + "," + nb2 + ") = " + operation(nb1, nb2));
}
afficherOperation("somme",somme,20,40);
afficherOperation("multiplication",multiplication,10,20);

afficherOperation("soustraction",function(nb1,nb2){
    return nb1-nb2
},15,5);
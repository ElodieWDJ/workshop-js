var villes = ["nantes", "paris","saint-nazaire","angers","le mans"];

//afficher tableau
    villes.forEach(Element =>console.log(Element));


//verry
var a = "a";
function contientA(ville){
    if(ville.includes(a)){   
    return true
}
}
console.log("lettreADansToutesLesVilles = " + villes.every(contientA));

// filter
var tiret = "-";
var espace = " ";
function contientTiretOuEspace(ville){
    if(ville.includes(tiret) || ville.includes(espace)){   
    return false;
}else{
    return true;
}
}
var villesSansTiretSansEspace = villes.filter(contientTiretOuEspace);
villesSansTiretSansEspace.forEach(element => console.log(element));

// chainer les fonctions

function villeMaj(ville){
    return ville.toUpperCase();
}
function terminantParS(ville){
    return ville.endsWith('s');
}

var villesTerminantParS = villes.filter(terminantParS);
var villesMajusculeSeTerminantParS = villesTerminantParS.map(villeMaj);
villesMajusculeSeTerminantParS.forEach(element => console.log(element));
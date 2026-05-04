let Hist = 13
let FR = 11
let Geo = 11
let Mus = 14

let moyenne = (Geo + FR + Hist + Mus) / 4

console.log(moyenne)

//Rôle: écrire Bonjour dans la console
// parametre: prenom de la personne à saluer
//retourner: rien 

function direBonjour(prenom){
    console.log ( `Bonjour ${prenom}` );
}


//J'appel / je lance ma fontion
direBonjour("Antonin")

//Rôle: additionner deux chiffres
//parametre: deux chiffres
//return: résultat

function addition(a,b){
    return a+b;
}

console.log(`Le résultat est ${addition(123,300)}`)


/*
//role: affiche la table de multiplication d'un nbr passé 
//parametre:nbr passé
//return: rien il affiche

function afficheTable(nbrPasse, somme) {
    for (let i = 1; i <= 10; i++)
        console.log(`${nbrPasse}x${i} = ${nbrPasse * i}`)
}


//role: compter et afficher le nombre de lettre dans le mot programmation
//parametre: le mot 
//return: rien il affiche 

function nbrDeLettre(mot) {
    console.log(`le mot: ${mot} contient ${mot.length} caractère`)
}



//EXO BART

//role: afficher 50x la phrase de BART
//parametre:
//return: rien elle affiche

function phraseBart() {

    //créer une boucle qui tournera 50x
    for (let i = 1; i <= 50; i++)
        console.log("I will not waste chalk")
}


//EXO 6

//role: epeller un mot lettre par lettres
//parametre:le mot
//return: rien elle affiche


function epellerMot(mot5) {
    console.log(`Le mot ${mot5} contient ${mot5.length} lettres`)

    for (let i = 0; i < mot5.length; i++) {
        console.log(mot5.charAt(i))
    }
}


//PANIER DE FRUITS


let fruits = ["pastèque", "pomme", "fraise", "kiwi", "framboise", "poire"]

console.log(`le premier fruit du tableau est ${fruits[0]} le dernier fruit du tableau est ${fruits[fruits.length - 1]}`)

fruits.push("ananas")
console.log(fruits)



fruits.forEach(fruit => {

    console.log(fruit)
    
});



//EXO moyenne v2

const lesNotes = [15, 9, 15, 16, 11]

//role: calculer la moyenne
//parametre: notes, un tableau de notes
//return: la moyenne 

function calculateurMoyenne(notes){
    let somme=0;
    notes.forEach(note => {
    
        somme = somme + note;
        
    })

    

    let maMoyenne = somme/notes.length;

    return maMoyenne
}

function afficheMaMoyenne(moyenne){

    console.log(`la moyenne de l'élève est : ${moyenne}`)
}



let moyenneEleve = calculateurMoyenne(lesNotes)
afficheMaMoyenne(moyenneEleve)

*/


//EXO 2

let tabFruits = ["cerises", "pommes", "cerises", "pommes", "banane", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"];


//role: calculer le nombre de fruits
//parametre: le tableau avec les fruits
//return: le nombre de chaque fruit

function nbrFruits(tabfruits) {

    let nbrPommes = 0
    let nbrCerises = 0
    let nbrPoires = 0
    let nbrBanane = 0
    let fruitsInconnue = 0

    //piochez dans le tableau combien de fois sont présent chaque fruit
    tabFruits.forEach(fruit => {

        //si c'est une pomme il la range avec les pommes
        if (fruit === "pommes") {
            nbrPommes++
        }
        //si c'est une cerises il la range avec les cerises
        else if (fruit === "cerises") {
            nbrCerises++
        }
        //si c'est une poire il la range avec les poires
        else if (fruit === "poires") {
            nbrPoires++
        }
        //le reste
        else if (fruit === "bananes") {
            nbrBanane++
        }
        else {

            fruitsInconnue++
        }

    });

    return `
    il y a ${nbrPommes} pommes,
    il y a ${nbrCerises} cerises,
    il y a ${nbrPoires} poire et
    il y a ${nbrBanane} bananes.
    `
}



//EXO 5

//Créer une machine à jackpot

let tabEmojis = ["🍕", "🍔", "🌭"]

//role: choisir aléatoirement 3 emojis 
//parametre:les emojis
//return: les 3 emojis tiré au hasard


//Fonction pour piocher aléatoirement 3 emojis

function nbrAlea() {

    let nbrAlea = Math.floor(Math.random() * tabEmojis.length)

    return nbrAlea
}


//Fonction qui annonce le jackpot ou perdu 

//role: Comparer les 3 emojis et dire si jackpot ou perdu
//parametre: les nbr tiré avant
//return: jackpot ou perdu 


function compareEmojis(emojisAleatoire) {

    let emojis1 = tabEmojis[nbrAlea()]
    let emojis2 = tabEmojis[nbrAlea()]
    let emojis3 = tabEmojis[nbrAlea()]

    //Si mes 3 emojis sont identique alors j'ai le jackpot
    if (emojis1 === emojis2 && emojis2 === emojis3 && emojis3 === emojis1) {
        alert(`JACKPOT !!`)
    } else {
        alert(`PERDU !!`)
    }

    return emojis1 + emojis2 + emojis3
}

//Fonction pour annoncer si c'est jackpot ou perdu
//parametre:resultat
//return: rien elle affiche

function ecrireDansBody(trucAEcrire) {
    document.querySelector("body").innerHTML += trucAEcrire

}


//scénario

function scenar() {

   let nombreAlea = nbrAlea()
let emojisFinal = compareEmojis(nombreAlea)
ecrireDansBody(emojisFinal) 
}








//EXO Code Cesar




function codeCesar(motAencoder) {

    //Alphabet
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let motEncode = "";
    //recupérer les lettres une par une 
    for (let i = 0; i < motAencoder.length; i++) {
         let lettreEncode = "";

        //on stock la lettre à la position i 
        let lettreActuelle = motAencoder.charAt(i)

        if(lettreActuelle === "z"){
            lettreEncode = "a"
        }else{

        }

        console.log(lettreActuelle)
       
        //quand il aura la lettre il va chercher sa position dans l'alphabet et la stock dans une variable  
        let poseLettreActuelle = alphabet.indexOf(lettreActuelle)

        console.log(poseLettreActuelle)

       //va chercher la lettre à la position suivante 
        lettreEncode = alphabet[poseLettreActuelle + 1]

        console.log(lettreEncode)
    
        //stock dans une variable pour recomposer le mot encoder
       motEncode = motEncode + lettreEncode
       console.log(motEncode)
    }

    //return le mot encoder
    return motEncode

}

//roloe: afficher le mot encoder
//parametre: mot encoder
//return: rien

function ecrireDansBody(trucAEcrire){
    document.querySelector("body").innerHTML += `<p> ${trucAEcrire} </p>`
}


function scenariO(motAencoder){
    let motEncode = codeCesar(motAencoder)
    ecrireDansBody(motEncode)
}






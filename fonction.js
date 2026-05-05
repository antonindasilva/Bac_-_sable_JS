

/*
//rôle: calculer la moyenne
//parametres: 4 notes pour 1 moyenne
//return: resultat

function moyenne2(a,b,c,d){
    return (a+b+c+d)/4;
}

console.log(`La moyenne de l'élève est de ${moyenne2(12,13,10,18)}`);


//rôle: décrementer le stock
//parametre: rien
//return: rien

let stock = 4

function decremente(){
    return stock--;
}

decremente()
decremente()

console.log(`Dans le stock il reste ${stock}`);


//rôle: afficher la dernière lettre de nimporte qu'elle mot
//parametre: le mot
//return: rien



function affichage(mot){
    let pos = mot.length-1
    console.log (mot[pos])
}

affichage("elephant")


//rôle: mettre à jour l'offre
//parametre: list initial + nouveau produits 
//return:


function nouvelleOffre(nouveauProduit, listeInitial){ 
    console.log(listeInitial.replace("bubble tea", nouveauProduit))
}

nouvelleOffre("Kombucha","café,thé,tisane,bubble tea")


//rôle: Afficher des balises sur mon HTML
//parametre: la balise
//return: rien

function ajouteeBalise(balise){

    document.querySelector("body").innerHTML+= balise
}

ajouteeBalise("<h1> Coucou toi !</h1>")

ajouteeBalise("<p class='toto'>Un paragraphe random</p>")

ajouteeBalise(`<img class='w-45' src="https://images.pexels.com/photos/33862483/pexels-photo-33862483.jpeg" alt"">`)


//rôle: afficher l'addition de deux chiffres
//parametre: les chiffres
//return: rien

function afficherAddition(a,b){
    ajouteeBalise(`<p class='toto'> ${a+b} </p>`)
}

afficherAddition(7,5)


//rôle:afficher le prenom et nom 
//parametre: prenom et nom
//return: rien

function afficherNomPrenom(nom, prenom){
    ajouteeBalise(`<p> Bonjour ${nom + prenom}, comment vas tu ?`)
}

afficherNomPrenom("Antonin", " Da Silva")


//rôle: afficher si l'adresse email contient @
//parametre: adresse mail
//return: rien

function verifierEmail(email){
    console.log(email.includes("@"))
}

verifierEmail("antonin@gmail.com")

verifierEmail("antonin.com")


//rôle: retourner la somme de deux valeurs
//parametre: somme des deux valeurs
//return: resultat

function addition(a,b){
    return a+b
}

let resultat6 = addition(10,22)

console.log(`le resultat est ${resultat6}`)


//role: poser une question 
//parametre: la question
//return: la réponse

function poserQuestion(question){
    return prompt(question)
}

let reponse = poserQuestion("Est ce que ça va ?")

console.log(reponse)

//role: convertir de euros a dollars
//parametre: le prix et le taux
//return: le prix convertis

function convertion(prix,taux){
    return prix*taux;

}

let resultat = convertion(300, 1.17)

console.log(resultat)

//role: demander un prix et un taux de change et convertit
//parametre:
//return: prix convertit

function convertisseur(){

    //demande le prix
   let prix1 = parseFloat(prompt(`Qu'elle est le prix ?`))


    //demande le taux
    let taux1 = parseFloat(prompt(`Qu'elle est le taux ?`))

    //convertit
    return prix1*taux1

    //return le resultat
    
}

let prixConvertit = convertisseur()

alert(`Le prix convertit est de ${prixConvertit}`)



//role: calculer une moyenne et demande les note de FR, GEO, MATH, HIST
//parametre: rien
//return: moyenne general

function calculMoyenne(){

    //note FR convertit en number
    let noteFR = parseFloat(prompt(`Qu'elle est la note de Français ?`))

    //note GEO convertit en number
    let noteGEO = parseFloat(prompt(`Qu'elle est la note en Géographie ?`))

    //note MATH convertit en number
    let noteMATH = parseFloat(prompt(`Qu'elle est la note en Mathématiques ?`))

    //note HIST convertit en number
    let noteHIST = parseFloat(prompt(`Qu'elle est la note en Histoire ?`))

    //calculer la moyenne et la return 
    return (noteFR+noteGEO+noteMATH+noteHIST)/4
}

let moyenneGeneral = calculMoyenne()

alert(`La moyenne général est de ${moyenneGeneral}`)

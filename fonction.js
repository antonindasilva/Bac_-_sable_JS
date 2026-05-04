


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

function 
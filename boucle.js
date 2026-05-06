


//role: affiche la table de multiplication d'un nbr passé 
//parametre:nbr passé
//return: rien il affiche

function afficheTable(nbrPasse,somme){
    for(let i=1; i<=10; i++)
        console.log(`${nbrPasse}x${i} = ${nbrPasse*i}`)
}


//role: compter et afficher le nombre de lettre dans le mot programmation
//parametre: le mot 
//return: rien il affiche 

function nbrDeLettre(mot){
    console.log(`le mot: ${mot} contient ${mot.length} caractère`)
}
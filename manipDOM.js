
//Trois manière de selectionner des éléments dans mon document c à d ma feuille innerHTML

//selectionner le body
document.querySelector("body")

//selectionner l'element avec l'id "boite"
document.querySelector("#boite")

//selectionner tout les elements qui ont la classe "en solde"
document.querySelector(".solde")

//selectionner l'element avec l'id "boite"
document.getElementById("boite")


//selectionner le body et ajouter une div
document.querySelector("body").innerHTML += `

<div> 
    <p> Lorem ipsum </p> 
</div>`




let bouton = document.querySelector("#btn")

bouton.addEventListener("click", ajouteUnP)

function aujouteUnP(){
    document.querySelector("#grosseBoite").innerHTML += `<p> lorem ipsum </p>`
}
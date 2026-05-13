/*
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




//EXO 1

function changeRouge(){
    const h1 = document.querySelector("h1");

    h1.style.color = "red";
}



//EXO 2

function cacherAfficher(cache){
    const h2cache = document.querySelector("#cache");
    
    h2cache.classList.toggle("none")
} */

//EXO 3


    let borders = document.querySelectorAll(".border")

    borders.forEach(border => {
        border.addEventListener("click", remplisRouge)
    
        function remplisRouge(){
        reset()
        border.classList.toggle("bg-red")
        }
    
    });

    function reset(){
        let borders = document.querySelectorAll(".border")

        borders.forEach(border=>{
            border.classList.remove("bg-red")
        })
    }


    //EXO 4


/*
const bouton= document.querySelector("#btn2")

let compteur = document.querySelector("#compteur")

//role: compter le nombre de clic
//parametre: aucun
//return: rien 
let nombre=0

    bouton.addEventListener("click",function ajouterCompteur(){
        nombre++;
        compteur.innerHTML = nombre
    })
*/


//EXO 5

//Je recup le header
let header = document.querySelector("header")
//Je recup le hero
let hero = document.querySelector(".hero")
// j'ecoute le scroll:
window.addEventListener("scroll",function(){
    

    //si l'utilisateur a scrollé plus bas que le hero:
    if(window.scrollY > hero.clientHeight){
        header.classList.add("bg-bleu")
    // je donne au header une classe qui change le bg
    }else{
        header.classList.remove("bg-bleu")

    }
})        



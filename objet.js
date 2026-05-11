//EXO OBJ

let promo11 = [

    {
        prenom : "Alexis",
        age : 19,
        ville : "St Etienne",
        job : "gagner de l'argent"
    },
    {
        prenom : "Romain",
        age : 27,
        ville : "St Etienne", 
        job : "data scientist"
    },
    {
        prenom : "Ludivine",
        age : 29,
        ville : "St Etienne", 
        job : "formatrice"
    },
    {
        prenom : "Nico",
        age : 42,
        ville : "St Etienne", 
        job : "eleveur de poulet"
    },
]



function ficheEleveDansDOM(tabPromo11){

    tabPromo11.forEach(eleve => {
        ecrireDansBody(` 
            

            
                <div class="bg-bleu mb-50 w-45 text-center">

                    <h2>${eleve.prenom}</h2> 
                    <p>${eleve.age} ans</p> 
                    <p>habite à ${eleve.ville}</p> 
                    <p>veut devenir ${eleve.job}</p>

                </div>`
           

        )
    
    });
}


function ecrireDansBody(trucAEcrire){

    document.querySelector("body").innerHTML += trucAEcrire 
}


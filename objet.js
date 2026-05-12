
/*
//EXO OBJ

let promo11 = [

    {
        prenom: "Alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
]



function ficheEleveDansDOM(tabPromo11) {

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


function ecrireDansBody(trucAEcrire) {

    document.querySelector("body").innerHTML += trucAEcrire
}



//EXO RECETTE 1

let recette = {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
}

console.log(`${recette.nom} 
            
difficulté: ${recette.difficulte} 
            
temps de préparation: ${recette.tempPreparation} min
            
temps de cuisson: ${recette.tempCuisson} 
            
nombre de portions: ${recette.nbrPortions} 
            
liste des ingrédients : ${recette.ingredients}`)


//EXO RECETTE 2



let recettes = [
    {
        nom: "Poulet rôti au thym et à l'ail",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "1h 15 min",
        nbrPortions: 6,
        ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
    },
    {
        nom: "Spaghetti à la bolognaise",
        difficulte: "Moyenne",
        tempPreparation: "20 min",
        tempCuisson: "40 min",
        nbrPortions: 4,
        ingredients: ["spaghetti", "viande hachée", "oignon", "carotte", "tomate concassée", "ail", "huile d'olive", "sel", "poivre"]
    },
    {
        nom: "Salade César",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "0 min",
        nbrPortions: 2,
        ingredients: ["laitue romaine", "croûtons", "parmesan râpé", "filet de poulet", "sauce César", "sel", "poivre"]
    }
];


//role:Afficher mes recette dans le body
//parametre: tableau recettte
//return: rien elle affiche 




function listeRecettes(tableauRecettes) {
    recettes.forEach(recette => {
        
        let ingredientsListe = "";

        recette.ingredients.forEach(ingredient => {

            ingredientsListe += `<li>${ingredient}</li>`
            console.log(ingredientsListe)
            
        });
        
        
        
        
        
        
        ecrireDansBody(`
            
        <div class="bg-bleu mb-50 w-45 pl-16">

            <h2 class="text-center"> Recette: ${recette.nom} </h2>
            
            <p> Difficulté: ${recette.difficulte} </p>
            
            <p> Temps de préparation: ${recette.tempPreparation} </p>
            
            <p> Temps de cuisson: ${recette.tempCuisson} </p>
            
            <p> Nombre de portions: ${recette.nbrPortions} </p>
            
            <h3 class="text-center"> Liste des ingrédients : </h3>

            <ul>
                ${ingredientsListe}

            </ul>

        </div>

    `)});

    function ecrireDansBody(trucAEcrire) {

        document.querySelector("body").innerHTML += trucAEcrire
    }
}
    */
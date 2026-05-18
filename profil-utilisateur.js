
 fetch("user.json")
.then(rep=> {
return rep.json()
})
.then(data=>{
// a ce niveau on devrait avoir dans la console les données renvoyé par l'API
    console.log(data)
    afficheUtilisateur(data.users)
});


//role: recuperer les utilisateur 1/1 et de les afficher dans le DOM
//parametre: tableau user
//return: rien elle affiche

function afficheUtilisateur(tableauUtilisateur){

    tableauUtilisateur.forEach(utilisateur => {
        
        let utilisateurCard = `

        <div class="card large-30">

            <div class="flex space-between align-center">

                <img class="large-30 border-radius-15" src="asset/${utilisateur.image}" alt="">

             <div class="large-60">
                <h3>${utilisateur.nom}</h3>
                <h3>${utilisateur.prenom}</h3>

                <p>${utilisateur.age} ans</p>
                <p>${utilisateur.poste}</p>

             </div>

            </div>
        
            <p class="mt-20 flex align-center gap-12"><i class="ph ph-envelope"></i>${utilisateur.email}</p>

        </div>`  
        
        document.querySelector("#userContainer").innerHTML += utilisateurCard;

    });




}
//EXO 1
/*
console.log(9 === 10)

//EXO 2
console.log("hello" !== "Hello")

//EXO 3
console.log(8>12)

let b = 5
let c = 5

if(b === c){
    console.log("c'est pareil")
}else if(b>c){
    console.log("b est supérieur à c")
}else {
    console.log("b est inférieur à c")
}


let connect = true

if(connect === true){
    console.log("l'utilisateur est connecté")
}else{
    console.log("l'utilisateur n'est pas connecté")
}


//EXO 4



let nombre = 75

if(nombre%2 === 0){
    console.log("le nombre est paire")
}else{
    console.log("le nombre est impaire")
}

//EXO 5

let soleil = 0
let pluie = 1
let neige = 2

let meteo = 2

if(meteo === 0){
    console.log("Prend une casquette")
}else if(meteo === 1){
    console.log("N'oublie pas ton parapluie")
}else if(meteo === 2){
    console.log("Met des bottes")
}


//EXO 6

let Age = 10

if(Age<12){
    console.log("Enfant")
}else if(12<=Age && Age<=18){
    console.log("Adolescent")
}else{
    console.log("Adultes")
}


//EXO 7

let A = 10
let B = 13
let C = 12

if(A===B && B===C){
    console.log("equilatéral")
}else if(A!==B && A!==C && B!==C){
    console.log("quelconque")
}else{
    console.log("isocèle")
}



//EXO 8 

//role:determine si l'utilisateurs est eligible à une réduction
//parametre: avoir plus de 18 ans et être membre fidélité ou avoir fait un achat de <100$
//return:réduction accorde ou non



function reduction(Age4,membre,achat){

    //si elle a plus de 18 ans
    if(Age4>18){

        
        if(membre === true || achat > 100){
            return "reduction accordé"
           
        }else{
       
            return "Réduction refusé"
           
        }
    }else{
        return "Reduction refusé"
    }
    
}

let ticket = reduction(19,false, 180)

console.log(ticket)



//role: demander à l'utilisateur la couleur du feu tricolore
//parametre: rien
//return: afficher le comportement a aborder

function feuTricolore(){
    let reponse = prompt(`De qu'elle couleur est le feu ?`)

    if(reponse==="vert"){
        console.log("Je passe !")
    }else if(reponse==="orange"){
        console.log("Je freine !")
    }else if(reponse==="rouge"){
        console.log("Je m'arrête !")
    }else{
        console.log("Danger ! Feu défectueux")
    }

    
}

let message = feuTricolore()

*/


//EXO 2

//role: Calculer la moyenne
//parametre: les notes
//return: La moyenne

function calculMoyenne3(a,b,c,d){
    return (a+b+c+d)/4;
}





//role: genere un commentaire
//parametre: la moyenne general
//return: rien

function Commentaire(m){
    if(m<10){
        return(`Il faut travailler !`)
    }else if(m>10 && m<=13){
        return(`Poursuivez vos efforts !`)
    }else if(m>13 && m<=15){
        return(`Bon travail !`)
    }else if(m>15 && m<=17){
        return(`Bravo !`)
    }else{
        return(`Félicitations`)
    }
}




//role: afficher un bulletin
//parametre: moyenne général + commentaire
//return: rien elle affiche

function construireBulletin(moyenneGeneral3,Commentaire){
    alert (`La moyenne général de l'élève est ${moyenneGeneral3} ${Commentaire}`)
}


//scénario

function scenario(a,b,c,d){
let moyenneGeneral3 = calculMoyenne3(a,b,c,d)
let commentaire=Commentaire(moyenneGeneral3)
construireBulletin(moyenneGeneral3,commentaire)
}

scenario(12,10,10,10)
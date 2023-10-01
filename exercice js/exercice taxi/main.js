


var music = ["Anissa by Wejdene", "Shape of you by Ed Sheeran", "Tourner dans le vide by Indila", "Stayin' Alive by Bee Gees", "Santé by Stromae"]


class Personnage{
    constructor(name, sanity){
        this.name = name
        this.sanity = sanity
    }


trajet(playlist){
    var changeTaxi = 0
    var redLight = 0

function getRandomItem(arr){

    var randomIndex = Math.floor(Math.random() * arr.length)
    var item = arr[randomIndex]
    return item
}

    while(redLight < 30 && this.sanity > 0){
        redLight += 1
        var result = getRandomItem(music);
        console.log("La musique "+result+ " passe à la radio")
        console.log("Vous avez atteint le feu numéro "+redLight+ ". Plus que "+ (30-redLight)+" feu avant d'arriver.")  

    if(result === playlist[0]){
        this.sanity --
        changeTaxi ++

        console.log("Malheuresement la musique à impacté John, faisant passer sa mentalité à "+john.sanity + "/10")
        console.log("Vous avez changé "+changeTaxi + " fois de taxi")
        console.log("")
    }

    else{
        console.log("")
    }
    if(this.sanity === 0 || this.sanity <= 0 && redLight >= 30 || redLight >= 30){
        break
    }
    }

    if(this.sanity <= 0 && redLight >= 30){
        console.log("C'est pas de chance John a explosé en passant le dernier feu rouge, il hors de sa vue.")
        console.log("")
        console.log("Vous avez au total changé "+ changeTaxi+ " fois de taxi")
        console.log("Il vous reste "+ this.sanity+ "/10 en santé mentale")
        console.log("Vous avez passé "+ redLight+ "/30 feu")
    }

    else if(this.sanity === 0){
        console.log("John a explosé en cours de route, son corp n'a pas pu résister à l'offensive d'Anissa.")
        console.log("")
        console.log("Vous avez au total changé "+ changeTaxi+ " fois de taxi")
        console.log("Il vous reste "+ this.sanity+ "/10 en santé mentale")
        console.log("Vous avez passé "+ redLight+ "/30 feu")
    }


    else if(redLight >= 30){
        console.log("Anissa n'a pas su venir à bout de John dans les temps impartis. John est maintenant rentré chez lui.")  
        console.log("")
        console.log("Vous avez au total changé "+ changeTaxi+ " fois de taxi")
        console.log("Il vous reste "+ this.sanity+ "/10 en santé mentale")
        console.log("Vous avez passé "+ redLight+ "/30 feu")
    }



}

}

let john = new Personnage("John", 10)
john.trajet(music)





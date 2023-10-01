/*, "Shape of you by Ed Sheeran", "Tourner dans le vide by Indila", "Stayin\' Alive by Bee Gees", "Santé by Stromae"]
var playlist = "Anissa by Wejdene"

class Personnage{
constructor(name, sanity){
    this.name = name
    this.sanity = sanity


    Trajet(Personnage){
        var taxiChange = 0
        var redLightNumber = 0

        if(taxiChange >= 0)
        return taxiChange+1
        
        if(redLightNumber >= 0)
        return redLightNumber+1

        else 
        return false
    }

    Cars(music){
        if (music === "Anissa by Wejdene"){
            let (this.sanity - 1) 
        }
    }


}         
}     
        


console.log(taxiChange+ " Nombre de changement de taxis") 
console.log(redLightNumber+" Nombre de feux rouge passés")   

        while(redLightNumber < 30 && John.sanity < 10){
             redLightNumber + 1
             return music      
        }
        console.log("John a passé "+ redLightNumber+ "feux rouge")
        console.log("La musique qui passe à la radio est : "+ music)           
    }
}

let john = new Personnage("John", 10)
*/
let tableau = []
tableau.push("WejDene" , "Staying Alive" , "I'm Still Standing" , "Wati B BIGALIIIIIII" , "Ne me quitte pas")


class Personnage {
    constructor(name , sanity){
        this.name = name
        this.sanity = sanity
    }
    trajet(playlist){
        var taxiChange = 0
        var redLight = 0

            while(redLight < 30 && this.sanity > 0){
                redLight += 1
                console.log(playlist[0])
                if(playlist[0] = "WejDene"){
                   this.sanity --
                   taxiChange ++ 

                   console.log(this.sanity)
                   console.log(taxiChange)
                }
                


            }
            

    }
}

let Jonh = new Personnage ("John" , 10)
Jonh.trajet(tableau)


/*class hero{
    constructor(name, pv, atk, def){
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
    }   
    attackMonster(monster){
        monstrer.hp -= this.atk

    }
}

class monster{
    constructor(name, hp){
        this.name
        this.hp
    }
}

let samy = new hero("Samy", 100, 5 , 7)
let sofiane = new hero("Sofiane", 120, 2, 12 )

let gnome = new monster("Gnome", 100)

samy.attackMonster(gnome)
*/


/*class Pokemon{
    constructor(name, attack, defense, hp){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }

    attackPokemon(pokemon){
        pokemon.hp -= this.attack
    }
}

let pikachu = new Pokemon("Pikachu", 21, 15, 540)
let salameche = new Pokemon("Salamèche", 17, 26, 425)

while(pikachu.hp > 0 || salameche.hp > 0){
    pikachu.attackPokemon(salameche)
    console.log("La vie de salamèche est de : ", salameche.hp)
if(pikachu.hp <= 0){
    console.log("Pikachu est mort, Salamèche remporte le combat")
    break
}

    salameche.attackPokemon(pikachu)
    console.log("La vie de pikachu est de : ",pikachu.hp)
if(salameche.hp <= 0){
    console.log("Salamèche est mort, Pikachu remporte le combat")
    break
}
   

}

*/


/*class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
}

    damagePokemon(pokemon){
        let damage = this.attack - pokemon.defense
        
        if (damage >= 0)
            return damage
 
        else 
        return 0
    }

    attackPokemon(pokemon){
        pokemon.hp -= this.damagePokemon(pokemon)
    }
}

let pikachu = new Pokemon("Pikachu", 36, 15, 540)
let salameche = new Pokemon("Salamèche", 28, 28, 425)

    console.log("Que le combat entre Pikachu et Salamèche commence !")
    console.log("")

while(pikachu.hp > 0 || salameche.hp > 0){
    pikachu.attackPokemon(salameche)
    console.log("Pikachu utilise Éclair !")
    console.log("Salamèche a perdu", pikachu.attack - salameche.defense, "hp. Il reste" , salameche.hp, "hp à Salamèche.")
    console.log(" ")
if(pikachu.hp <= 0){
    console.log("Pikachu est K.O. !")
    console.log("Salamèche remporte le combat !")
    console.log("Salamèche a gagné 39 points Exp. !")
    break
}

    salameche.attackPokemon(pikachu)
    console.log("Salamèche utilise Flammèche !")
    console.log("Pikachu a perdu", salameche.attack - pikachu.defense, "hp. Il reste", pikachu.hp, "hp à Pikachu")
    console.log(" ")
if(salameche.hp <= 0){
    console.log("Salamèche est K.O. !")
    console.log("Pikachu remporte le combat !")
    console.log("Pikachu a gagné 42 points Exp. !")
    break
}
   

}
*/    


class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }


    damagePokemon(pokemon){
        let randomValue = Math.random()
        
        if (randomValue >= this.luck){
            let damage = this.attack - pokemon.defense
        

            if (damage >= 0)
                return damage
 
            else 
            return 0
        }

        else 
        return 0
    }


    attackPokemon(pokemon){
        var degat = this.damagePokemon(pokemon)

        if(this.name === "Pikachu" && this.hp > 0){
            console.log("Pikachu utilise Éclair")
        }

        if(this.name === "Salamèche" && this.hp > 0){
            console.log("Salamèche utilise Flammèche")
        }

        if (degat === 0){
            console.log(this.name + " rate son attaque !")
            console.log(" ")   
        }

        else {
            pokemon.hp -= degat
            if(pokemon.hp < 0){
                pokemon.hp = 0
            }

            console.log(pokemon.name+" a perdu "+ degat +"hp. Il reste "+ (pokemon.hp)  +"hp à "+ pokemon.name)
            console.log(" ")
        
        }
        
    }
}


let pikachu = new Pokemon("Pikachu", 36, 15, 540, 0.1)
let salameche = new Pokemon("Salamèche", 28, 27, 380, 0.1)

    console.log("Que le combat entre Pikachu et Salamèche commence !")
    console.log(" ")

while(pikachu.hp > 0 || salameche.hp > 0){
    salameche.attackPokemon(pikachu)
//    console.log("Pikachu utilise Éclair !")
//    console.log("Salamèche a perdu", pikachu.attack - salameche.defense, "hp. Il reste" , salameche.hp, "hp à Salamèche.")
//    console.log(" ")
if(pikachu.hp <= 0){
    console.log("Pikachu est K.O. !")
    console.log("Salamèche remporte le combat !")
    console.log("Salamèche a gagné 39 points Exp. !")
    alert("Félicitations à Salamèche, le nouveau champion !")
    break
}

    pikachu.attackPokemon(salameche)
//    console.log("Salamèche utilise Flammèche !")
//    console.log("Pikachu a perdu", salameche.attack - pikachu.defense, "hp. Il reste", pikachu.hp, "hp à Pikachu")
//    console.log(" ")
if(salameche.hp <= 0){
    console.log("Salamèche est K.O. !")
    console.log("Pikachu remporte le combat !")
    console.log("Pikachu a gagné 42 points Exp. !")
    alert("Félicitations à Pikachu, le nouveau champion !")
    break
}
   

}
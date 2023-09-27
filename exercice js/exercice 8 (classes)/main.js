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


class Pokemon{
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


    

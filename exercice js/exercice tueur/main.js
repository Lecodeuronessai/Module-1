/* class survivants{
    constructor(name, hp, die, dodge, suicide){
        this.name = ["Nina", "Lucas", "Olivia", "Mason", "Ava", "Liam", "Emma", "Noah", "Isabella", "Elijah", "Sophia", "Carter", "Mia", "Jackson", "Aiden", "Amelia", "Grayson", "Evelyn", "Logan", "Harper", "Oliver", "Abigail", "Avery", "Benjamin", "Charlotte", "Caleb", "Ella", "William", "Scarlett"]
        this.characteristics = ["Timide", "Aventureux", "Optimiste", "Sérieux", "Extraverti", "Introverti", "Rêveur", "Pragmatique", "Généreux", "Egoïste", "Loyal", "Indépendant", "Curieux", "Consciencieux", "Détendu", "Stressé", "Créatif", "Logique", "Impulsif", "Réfléchi"]
        this.hp = hp
        this.die = die
        this.dodge = dodge
        this.suicide = suicide
    }

    cavale(team){

        function getRandomItem(arr){
        
            var randomIndex = Math.floor(Math.random() * arr.length)
            var item = arr[randomIndex]
            return item
        }
        
        let survivant1 = getRandomItem(survivants);
        console.log(survivant1)

        
        
        //    while(jason.hp <= 0){
        //        this.name
        
        
        //}
        }  

    
        
}

class tueur{
    constructor(name, hp){
    this.name = name
    this.hp = hp
} 
}



let jason = new tueur("Jason", 100)



survivants.cavale(jason)
*/

 class Personnage{
    constructor(name, caracteristics, probabilityDie, probabilityDamage, probabilityKamikaze, hp){
        this.name = name
        this.caracteristics = caracteristics
        this.probabilityDie = probabilityDie
        this.probabilityDamage = probabilityDamage
        this.probabilityKamikaze = probabilityKamikaze
        this.hp = hp
    }
 }

class Tueur extends Personnage{
    constructor(){
        super("Jason", "Killer", 0, 0, 0 , 100)
    }


attaqueSurvivant(survivants){
        let randomValue = Math.random()

        if(randomValue < survivants.probabilityDie){ 
            survivants.hp = 0    
            console.log(this.name +" a tué" + survivants.name)    
        }
        
        else if(randomValue < survivants.probabilityDamage){
            this.hp -= 10
            console.log(survivants.name+ " a réussi à esquiver l'attaque et en a profité pour infliger 10 dommages au tueur")
        }

        else{
            this.hp -= 15
            console.log(survivants.name+ " s'est fait tuer mais a réussi avant de mourir à infliger 15 dommages au tueur")
}
}
}

let nomsSurvivant = ["Nina", "Lucas", "Olivia", "Mason", "Ava", "Liam", "Emma", "Noah", "Isabella", "Elijah", "Sophia", "Carter", "Mia", "Jackson", "Aiden"]
let caracteristicsSurvivant = ["Timide", "Aventureux", "Optimiste", "Sérieux", "Loyal", "Indépendant", "Curieux"]
let jason = new Tueur()

let survivants = (nomsSurvivant+caracteristicsSurvivant+0.3+0.5+0.2+20) 



while(jason.hp > 0 && survivants.hp > 0){
    jason.attaqueSurvivant(survivants)
}

if(jason.hp <= 0){
    console.log(jason.name+" est mort, les survivants l'ont vaincu")
}

else {
    console.log("Tout les survivants ont été tué par Jason")
}



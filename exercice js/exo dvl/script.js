



let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach(user => {
    if (countCharacter(user) > 5) {
        console.log(user+" c'est un prénom long de plus de 5 lettres.")
    } else {
        console.log(user+"  ce n'est pas du tout un prénom long.")
    }
})





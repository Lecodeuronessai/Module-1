



let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach(users => {
    if (countCharacter(users) <= 5) {
        console.log(users+" ce n'est pas du tout un prénom long.")
    } else {
        console.log(users+" c'est un prénom long de plus de 5 lettres.")
    }
})






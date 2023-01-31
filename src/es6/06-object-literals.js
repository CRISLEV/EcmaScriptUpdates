// enahced object literals

function newUser(user, age, country, uid){
    return {
        user,
        age,
        country,
        id: uid
    }
}

console.log(newUser("Levi", 32, "GT", 10))
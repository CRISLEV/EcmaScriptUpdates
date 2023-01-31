function newUser(name, age, country){
    var name = name|| "Oscar";
    var age = age|| 34;
    var country = country || "GT";
    console.log(name, age, country);
}
newUser();
newUser("Christian", 32, "GT");

function newAdmin(name= "Oscar", age=32, country="MX"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("Levi", 32, "GT");
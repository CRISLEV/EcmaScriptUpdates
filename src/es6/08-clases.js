//instancia de una clase
// const newUser = User();

class User{
    //metodos
    greeting(){
        return 'hello';
    }
};

const gndx = new User();
console.log(gndx.greeting());


const bebeloper = new User();
console.log(bebeloper.greeting());

//constructor

class User{
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }

    greeting(){
        return 'hello';
    }
}

const david = new User();

// this 

class user{
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user("Ana");
console.log(ana.greeting());


// setters getters

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=20);
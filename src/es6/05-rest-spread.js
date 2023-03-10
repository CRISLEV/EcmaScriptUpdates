//array destructuring

let fruits = ["apple", "banana"];

let [a, b] = fruits;

console.log(a, fruits[1]);

//Object destructuring

let user = {username: "Levi", age:32};
let {username, age} = user;
console.log(username, user.age);

//spread operator

let person = {name:"Christian", age:32};
let country = "GT";

let data = {id:1, ...person, country}

console.log(data);

// rest
function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3)
const user = {username:'crislev', age:32, country:'GT'};
const {username, ...values}= user;
console.log(username);
console.log(values);
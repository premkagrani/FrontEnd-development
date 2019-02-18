"use strict";
exports.__esModule = true;
console.log("It works!");
/*var age:number;
age=10;

const a=10;
let b=10;//the implicit type of b is now number
//b=true;//flagged as an error

// let should be preferred over var because it helps us to define block level scope

let user={
    name:'Prem',
    age:23
};

//Assigned objects can be reassigned only same no of properties(not less,not more)
user={name:'Ajay',
age:23};*/
// -------classes--------
var user_1 = require("./entities/user");
/*class User{
    name:String;
    age:number;
    constructor(name:String,age:number){
        this.name=name;
        this.age=age;
    }
    walk(){
        console.log(this.name+' is walking');
        this.sleep();
        return this.name;
    }
    private sleep(){
        console.log(this.name+' is sleeping');
    }
}*/
/*let u1=new User('Ajay');
console.log(u1.name);
u1.walk();*/
//Function to generate 10 users with name and age
function generateUsers() {
    var users = [];
    for (var count = 0; count < 10; count++) {
        var user = new user_1.User('User' + count, 10 - count);
        users.push(user);
    }
    return users;
}
var result = generateUsers();
result.sort(function (user1, user2) {
    return user2.age - user1.age;
});
console.log(result);

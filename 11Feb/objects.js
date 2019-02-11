//Creating a custom object and adding properties to it
/* var user = new Object(); */

//Assigning property name to an object
/* user.name="Prem";
console.log(user); */

//Deleting property assigned to an object
/* delete user.name;
console.log(user); */

//another way to create an object(JSON way)
/* var user={
    name:'Prem',
    age:23
};
user.location='blr';
console.log(user); */

//Write a function(generateUsers) that will return an array of 10 user objects that have name and age attribute
/* function generateUsers(){
    var users=[];
    for(var count=0;count<10;count++)
    {
        var user={
            name:"User"+count,
            age:30*Math.random()
        };
        users.push(user);
    }
    return users;
} 
var users=generateUsers();
console.log(users);*/

//Sorting array by age
/* users.sort(compare);
function compare(user1,user2){
    return user2.age-user1.age;
} */


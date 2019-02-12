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

//Composite objects(only state)
/*var user={
    name:"Ram",
    age:34,
    //here addresses is an array of objects
    addresses:[{
        street:'100/6',
        zip:226003
    },{
        street:'d/8',
        zip:225221
    }]
}
console.log(user.addresses[1].street)*/

//Composite objects(with behaviour as well)
/*var user={
    name:"Ram",
    age:34,
    addresses:[{
        street:'100/6',
        zip:226003
    },{
        street:'d/8',
        zip:225221,
        change:function(){
            console.log(this);
        }
    }],
    //here walk is a property assigned with a function
    walk:function(){
        console.log(this.name +' is walking');
    }//anonymous function used here
}
console.log(user.addresses[1].street)
user.walk();
user.addresses[1].change();*/

//Window object
/*function foo(){
    console.log(this);
}
foo();*/

//Last function called in default case(replaces first definition)
/*function foo(){
    console.log('1');
}
function foo(){
    console.log('2');
}
foo();*/

//Avoiding can be done through namespace
/*var com={
    sapient:{

    }
};
com.foo=function(){
    console.log('1');
}
com.sapient.foo=function(){
    console.log('2');
}
function foo(){
    console.log('3');
}
foo();
com.sapient.foo();
com.foo();*/

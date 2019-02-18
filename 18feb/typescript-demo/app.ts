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
import {User} from './entities/user';
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

function generateUsers():User[]{
    const users:User[]=[];
    for(let count=0;count<10;count++){
        const user=new User('User'+count,10-count);
        users.push(user);
    }
    return users;
}

const result:User[]=generateUsers();
result.sort((user1:User,user2:User)=>{
    return user2.age-user1.age;
});
console.log(result);
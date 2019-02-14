function User(name, age) {
    //var name = name; //private variable  
    this.name = name;
    this.age = age; //public variable
}
//Prototypal inheritance
User.prototype.walk = function () {
    console.log(this.name + ' is walking');
}
var u1 = new User('Prem', 23);
u1.walk();
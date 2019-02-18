"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.walk = function () {
        console.log(this.name + ' is walking');
        this.sleep();
        return this.name;
    };
    User.prototype.sleep = function () {
        console.log(this.name + ' is sleeping');
    };
    return User;
}());
exports.User = User;
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;

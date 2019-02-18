export class User{
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
}

export class Address{

}
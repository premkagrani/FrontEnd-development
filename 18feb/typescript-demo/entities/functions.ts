function add(param1: number, param2: number=10): number {
    return param1 + param2;
}

add(2,3);
add(2);//this works because the default value of param2 is specified

//Function Overloading is not possible in JS
// function add():number{
//     return 2;
// }


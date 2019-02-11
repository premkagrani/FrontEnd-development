var age = 30;//global variable
age=40;
var c=20;
function add(a,b){
    var c=3;//local variables
    console.log(c);
  //  console.log(arguments);
    // if(arguments.length!=2){
    //    throw new Error("exactly 2 params expected");
    // }
    return a+b;
}
//add(3,4,7)
var result=add(3,7,'sapient');
console.info(add.toString())
console.log(result,c);
var numbers = [3, 4, 42, 1, 2, 'prem'];
console.log(numbers.length)

numbers.push(212);
console.log(numbers.length)

numbers.pop()
console.log(numbers.length)

console.log("----------")
numbers.splice(5, 1)
console.log(numbers.length)

//Sorts on basis of ASCII codes
/* numbers.sort()
console.log("----------") */

//Own sorting function for sorting in ascending order
/*numbers.sort(function(a,b){
    return a-b;
})
console.log(numbers)*/

//Using callback function in a separate function
/* function compare(a, b) {
    return a - b;
}
numbers.sort(compare) */

//Filter all even elements
/* console.log(numbers)
var even = numbers.filter(function (element, index) {
    console.log(index, element);
    return !(element % 2);
})
console.log(even) */

//Incrementing the value of elements of array by 1(similar to for loop)
/* var result = numbers.map(function (element, index) {
   return element + 1;
})
console.log(result); */

//Same job Incrementing but now using for loop
/* var incrementedNumbers=[];
for(var count=0;count<numbers.length;count++){
    incrementedNumbers.push(numbers[count]+1);
}
console.log(incrementedNumbers); */



console.log(`***************Ternary Operator Assignment*******************`);
console.log("\n");

console.log(`1. ------------------Find The Greatest Number--------------------`);

var greaterNumber=function(value1,value2){

    var result=value1>value2 ? `${value1}`:`${value2}`;
    console.log(`The Greatest Number amonget ${value1} and ${value2} is : ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("\n");
console.log(`2. ------------------Check Given Number is Even or Odd--------------------`);

var isEvenOrOdd=function(value){

    var result=value%2==0 ? "Even" :"Odd"
    return result;
}   
 console.log(`The Given Number "29" is" : ${isEvenOrOdd(29)}`);
 console.log(`The Given Number "44" is" : ${isEvenOrOdd(44)}`);
 console.log(`The Given Number "0" is" : ${isEvenOrOdd(0)}`);
 console.log(`The Given Number "101" is" : ${isEvenOrOdd(101)}`);
 console.log("\n");
 console.log(`3. ------------------Check the length of given string is Even or Odd--------------------`);

 var isEvenOrOddlength=function(value){
    var len=value.length;
    var res=len%2==0 ? "Even" : "Odd"
    return res;
 }
 console.log(`The Length of "JavaScript" is : ${isEvenOrOddlength("JavaScript")}`);
 console.log(`The Length of "developer" is : ${isEvenOrOddlength("developer")}`);
 console.log(`The Length of "Google" is : ${isEvenOrOddlength("Google")}`);
 









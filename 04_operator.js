var num1=10;
var num2=5;
var addResult=num1+num2;
var subResult=num1-num2;
var mulResult=num1*num2;
var divresult=num1/num2;
var moduloResult=num1%num2;

console.log(`===================Unary Operators==========================`);
var num3=10;
var result=++num3; //num3+1
console.log(`Increment Operator result is : ${result}`);
var num4=5;
var result=--num4; //num4-1
console.log(`Decerement Operator result is : ${result}`);

console.log(`===================Arthmatic Operators======================`);
console.log(`Addition is :${addResult}`);
console.log(`Substraction is : ${subResult} `);
console.log(`Multiplication is : ${mulResult}`);
console.log(`Division is : ${divresult}`);
console.log(`Modulus is : ${moduloResult}`);

console.log(`=====================Assignment Operators====================`);
var num1=10;
var num2=5;
num1 += num2;
console.log(`Compound Addition is : ${num1}`);
var num1=10;
var num2=5;
console.log(`Compound Substraction is : ${num1-=num2}`); //15-5 

console.log(`=======================Comparasion Operator===================`);
var num1=10;
var num2=5;
var num3=10;
var result=num1>num2;
console.log(`Is This Greater Number : ${result}`);
var result=num1<num2;
console.log(`Is This greater Number : ${result}`);
var result=num1>num2;
console.log(`Is This Greater Number : ${result}`);
var result=num1>=num3;
console.log(`Is This Greater Than equal : ${result}`);
var result=num1<=num3;
console.log(`is This Less Than Equal : ${result}`);




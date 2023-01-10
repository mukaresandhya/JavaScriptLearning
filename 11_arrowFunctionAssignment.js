
console.log(`1. With no args and no return value, log message on console inside arrow function`);

var message=()=>{
    console.log(`"Good Morning, Today is Monday"`);
}
message();
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`2. With 3 args and no return value for received 3 parameteres perform the multiplication`);
var mul=(num1,num2,num3)=>{
    var mulResult=num1*num2*num3;
    console.log(`Multiplication of ${num1},${num2},${num3} is :`,mulResult);
}
mul(5,5,2);
mul(10,4,1);
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`3. With 5 args and return value such as, for received parameters it should do addition`);
var add=(num1, num2, num3, num4, num5)=>{
    var addResult=num1+num2+num3+num4+num5; 
    return addResult;
}

    var addition=add(100,100,200,349,756); 
    console.log(`The Addition is :`,addition);
    var additionString=add("I am","learning", "ES6","Features","in depth");
    console.log(`The Addition is :`, additionString);
    

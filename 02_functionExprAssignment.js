console.log("1.Function Expression for find the square og given Values");
var square=function (num){
  var result=num*num;
  //console.log("Square of 5 is :",result);
  return result;
}
var finalResult=square(5);
console.log("Square of 5 is :",finalResult);
var finalResult=square(6);
console.log("Square of 6 is :",finalResult);
var finalResult=square(25);
console.log("Square of 25 is :",finalResult);
var finalResult=square(100);
console.log("Square of 100 is :",finalResult);
console.log("---------------------------------------------------------------------------------------");

console.log("2.Type of variable");
console.log("Variable Type is :",typeof square);
console.log("---------------------------------------------------------------------------------------");
console.log("3.Function for find the area of Rectengle");

var rectengle=function(length,width){
    var result=length*width;
    console.log("Area Of Rectangle is :",result);
}
rectengle(499,917);
console.log("---------------------------------------------------------------------------------------");

console.log("4. Function for swap the values");

var swapValues=function(value1,value2){
    console.log("Before Swap :",value1,value2);
    var temp=value1;
    var value1=value2;
    var value2=temp;
    console.log("After Swap :",value1,value2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("---------------------------------------------------------------------------------------");
console.log("5.String Functions");

var string=function(){
    var str1="JS the most popular language";
    console.log(str1);
    console.log("Total Characters in the string is :",str1.length);
    console.log("Character at index 6 is :",str1.charAt(6));
    console.log("Character at index 11 is :",str1.charAt(11));
    var totalLength=str1.length;
    console.log("Character At last index :",str1.charAt(totalLength-1));
    console.log("First Character in the String is :",str1.charAt(0));
    console.log("Square length of given string is :",totalLength*totalLength);
}
string();




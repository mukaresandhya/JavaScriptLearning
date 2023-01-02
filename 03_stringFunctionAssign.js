
var stringhandsOn=function(){
    var string="     Hey You are doing good, keep it up     ";
console.log(`1. The Given String is : ${string}`);
console.log(`------------------------------------------------`);

var stringLength=string.length;
console.log(`2. length Of String is : ${stringLength}`);
console.log(`------------------------------------------------`);

var stringTrim=string.trim();
console.log(`3. After Removing the Leading and Trailing extra Spaces : ${stringTrim}`);
console.log(`------------------------------------------------`);

var stringLengthAfterTrim=stringTrim.length;
console.log(`String Length After trim : ${stringLengthAfterTrim}`);
var count=stringLength - stringLengthAfterTrim;
console.log(`4. Count Of extra spaces that is removed is: ${count}`);
console.log(`------------------------------------------------`);

var firstCharacter=stringTrim.charAt(0);
var lastCharacter=stringTrim.charAt(33);
console.log(`5. The First Character of String is ${firstCharacter} and last Character of String is ${lastCharacter} `);
console.log(`------------------------------------------------`);

var wordsInSentence=stringTrim.split(" ");
var wordCount=wordsInSentence.length;
console.log(`6. Total Words in the String Are : ${wordCount}`);
console.log(`------------------------------------------------`);

var indexOfWord=stringTrim.indexOf("good");
console.log(`7. Index Of Word Good is : ${indexOfWord}`);
console.log(`------------------------------------------------`);

var subString=stringTrim.substring(22);
console.log(`8. (Using Subscript) SubString Starting From index 22 is : ${subString}`);
var sliceString=stringTrim.slice(22,33);
console.log(`8. (Using Slice) SubString Starting From index 22 is : ${sliceString}`);
console.log(`------------------------------------------------`);

var endsWith=stringTrim.endsWith("up");
console.log(`Is String ends with word "up" : ${endsWith}`);
console.log(`------------------------------------------------`);

var startWith=stringTrim.startsWith("Hey");
console.log(`Is String Start with word "Hey" : ${startWith}`);


var str2="I am Snehal";
var lengthstr=str2.length;
var splitString=str2.split(" ");
console.log(splitString);
console.log(lengthstr);
var length=splitString.length;
console.log(length);






}
stringhandsOn();

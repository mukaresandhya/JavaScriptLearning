
function squareOfWordLength(language){
    var lengthOfWord=language.length;
    var square=lengthOfWord*lengthOfWord;
    console.log(`The Length of word ${language} is : ${lengthOfWord} and it's Square is : ${square}`);
}
console.log(`1.`);
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`------------------------------------------------------------------------`);

var stringFunction=function(){
    var str="I am Angular Developer";
    var length=str.length;
    var wordsInString=str.split(" ");
    var totalWords=wordsInString.length;
    console.log(`2.1 String Length is : ${length} Total words in string are : ${totalWords}`);
    var div=length/totalWords;
    console.log(`After Dividing length By total words : ${div}`);

    var mul=length*totalWords;
    console.log(`2.2 Multiplying String by length with total word are : ${mul}`);
}
console.log(`2.`);
stringFunction();

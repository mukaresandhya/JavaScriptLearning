let sentence = `"I am very good IT Developer"`;
let counter = 0;
for (let index = 0; index <= sentence.length; index++) {
  let char = sentence.charAt(index);
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    counter = counter + 1;
  }
}
console.log(`Total Numbers of vowels in the given string is : ${counter}`);
console.log(
  `----------------------------------------------------------------------`
);
function numbersCube(num) {
  var sum = 0;
  for (let i = 0; i <= num; i++) {
    var cube = i * i * i;
    var sum = sum + cube;
  }
  console.log(`The sum of cube of numbers from 1 to 5 is : ${sum}`);
}
numbersCube(5);
console.log(
  `----------------------------------------------------------------------`
);

function oddPositionedChars(sentence) {
  console.log(`The Given String is : ${sentence}`);
  var emptyString = "";
  var myString = sentence.split(" ").join(" ");
  //console.log(myString);
  for (let index = 0; index < myString.length; index++) {
    if (index % 2 != 0) {
      emptyString = emptyString + myString[index];
    }
  }
  console.log(`Odd positioned char in the string is : ${emptyString}`);
}
oddPositionedChars(`Hard work always pays back`);
oddPositionedChars(`Soon I will be Angular IT cham`);

console.log(
  `----------------------------------------------------------------------`
);
function factorialNumbers(num) {
  var fact = 1;
  for (let index = 1; index <= num; index++) {
    fact = fact * index;
  }
  console.log(`Number is ${fact}`);
}
factorialNumbers(5);
factorialNumbers(7);
factorialNumbers(8);
factorialNumbers(12);

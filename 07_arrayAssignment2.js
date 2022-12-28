const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Array is : ${arrayNumbers}`);
console.log("\n");
let length = arrayNumbers.length;
console.log(`1. Total Length of the given array is : "${length}"`);
console.log(
  `--------------------------------------------------------------------------------------------------------`
);

let firstElement = arrayNumbers[0];
let lastElement = arrayNumbers.slice(-1);
console.log(
  `2. The First element in the array is :"${firstElement}" and the last Element in the array is : "${lastElement}"`
);
console.log(
  `---------------------------------------------------------------------------------------------------------`
);

let thirdLastNumber = arrayNumbers[arrayNumbers.length - 3];
console.log(`3. The third last number in the array is : "${thirdLastNumber}"`);
console.log(
  `---------------------------------------------------------------------------------------------------------`
);

let evenNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    evenNumArray = evenNumArray.concat(element);
  }
}
console.log(`4. The even numbers in the given array is : ${evenNumArray}`);
console.log(
  `---------------------------------------------------------------------------------------------------------`
);

let oddNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    oddNumArray = oddNumArray.concat(element);
  }
}
console.log(`5. The odd numbers in the given array is : ${oddNumArray}`);
console.log(
  `---------------------------------------------------------------------------------------------------------`
);

let position = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    position = position.concat(arrayNumbers[index]);
  }
}
console.log(`6. All even positioned Numbers are : ${position}`);

console.log(
  `---------------------------------------------------------------------------------------------------------`
);
let pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 != 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(`7. All Odd Positioned Numbers are : ${pos}`);

console.log(
  `---------------------------------------------------------------------------------------------------------`
);
let sumOfElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumOfElements = sumOfElements + element;
}
console.log(`8. Sum of all the elements in the array is : ${sumOfElements}`);

console.log(
  `---------------------------------------------------------------------------------------------------------`
);
let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple = multiple.concat(element);
  }
}
console.log(`9. Number which is multiple 5 are : ${multiple}`);

console.log(
  `---------------------------------------------------------------------------------------------------------`
);
let numvalue = arrayNumbers.includes(115);
console.log(`Is 115 is available in the array : ${numvalue}`);

console.log(
  `---------------------------------------------------------------------------------------------------------`
);
let numValues = arrayNumbers.includes(23);
console.log(`Is 23 is available the array : ${numValues}`);

console.log(
  `---------------------------------------------------------------------------------------------------------`
);
console.log(`Before Adding 55,66 at index 3 : ${arrayNumbers}`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(`After Adding 55,66 at index 3 : ${arrayNumbers}`);
console.log(
  `---------------------------------------------------------------------------------------------------------`
);

console.log(`Before deleting 3 numbers from index 4 : ${arrayNumbers}`);
arrayNumbers.splice(4, 3);
console.log(`After deleting 3 numbers from index 4 : ${arrayNumbers}`);

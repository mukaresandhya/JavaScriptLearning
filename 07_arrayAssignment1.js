

const fruits_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"];

console.log(`Given Array is : ${fruits_seasonal}`);
console.log("\n");
console.log(`1. Find First and Last element in the array`);
//let firstElement=fruits_seasonal[0];
let lastElement=fruits_seasonal.slice(-1);
console.log(`First Element in the array is : "${fruits_seasonal[0]}" and last element in the array is : "${lastElement}"`);
//var firstElement=fruits_seasonal.slice(0,1);
// console.log(`First Element in the array is :${firstElement}`);

console.log(`------------------------------------------------------------------------`);
console.log(`2. Add Element Papaya before Banana in the array`);
console.log(`Before Adding Papaya : ${fruits_seasonal}`);
fruits_seasonal.splice(0,0,'Papaya');
console.log(`After Adding Papaya :${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------`);

console.log(`3. Remove Mango from the array`);
console.log(`Before Removing Mango : ${fruits_seasonal}`);
fruits_seasonal.splice(4,1);
console.log(`After Removing Mango : ${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------`);

console.log(`4. Add element or insert an element "Pineapple" at the last position`);
console.log(`Before Adding Pineapple : ${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(`After Adding Pineapple :${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------`);

console.log(`5. Insert an element "Dragon Fruit" before "WaterMelon"`);
console.log(`Before Adding Dragon Fruit : ${fruits_seasonal}`);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`After Adding Dragon Fruit : ${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------`);

console.log(`6. Replace "Orange" with "Kiwi"`);
console.log(`Before Replacing : ${fruits_seasonal}`);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(`After replacing : ${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------`);

console.log(`7. Log the elements starting from 1 to 4`);
console.log(`given Array : ${fruits_seasonal}`);
let sliceResult=fruits_seasonal.slice(1,5);
console.log(`Elements From index 1 to 4 are : ${sliceResult}`);
console.log(`------------------------------------------------------------------------`);

console.log(`8. Only Select last 3 elements and log on console : use the length property `);
console.log(`Given Array : ${fruits_seasonal}`);
let lastThreeElements=(fruits_seasonal.slice(fruits_seasonal.length-3));
console.log(`Last three elements in the array is : ${lastThreeElements}`);



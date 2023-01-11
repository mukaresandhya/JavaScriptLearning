
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Given Array is :`,arrayNumbers);
console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`1. Log the array element with it's index using forEach and arrow Function`);
arrayNumbers.forEach((value,index)=>{
    console.log(`Index: ${index} and its value: ${value}`);

});
console.log(`-------------------------------------------------------------------------------------------------------------------------`);

console.log(`2. Find the Positive Numbers and log on console `);
const arrayPositive=[];
arrayNumbers.forEach((value)=>{
    if(value >= 0){
    arrayPositive.push(value);
    //console.log(value);
    
}
});
console.log(arrayPositive);
console.log(`-------------------------------------------------------------------------------------------------------------------------`);

console.log(`3. Find The Negative Numbers add into new array and log new array on console using arrow function `);
const res = [];
arrayNumbers.forEach((value)=>{
    if(value < 0){
        res.push(value);
    }
});
console.log(res);
console.log(`-------------------------------------------------------------------------------------------------------------------------`);

console.log(`4. Find the Even Numbers and log on console using forEach loop and arrow function `);
const arrayEvenNumbers=[];
arrayNumbers.forEach((value)=>{
    if(value%2 == 0 ){
        arrayEvenNumbers.push(value);
        //console.log(value);
    }
});
console.log(arrayEvenNumbers);
console.log(`-------------------------------------------------------------------------------------------------------------------------`);

console.log(`5. Find the sum of all elements from array and log on sum value on console`);
let sum = 0;
arrayNumbers.forEach((value)=>{
    sum+=value;
});
console.log(`Sum of all elemnts of given array is: ${sum}`);
console.log(`------------------------------------------------------------------------------------------------------------------------`);

console.log(`6. Log the only even positioned array value on console foreach with arrow function `);
const arrayEvenPosition=[];
arrayNumbers.forEach((value,index)=>{
    if(index%2 == 0){
        arrayEvenPosition.push(value);
        //console.log(value);
    }
});
console.log(arrayEvenPosition);

const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`Given Array Is :`);
console.log(array_roll_numbers);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`1. Reverse The Array`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`2. Use sort() method without using any custom method`);
array_roll_numbers.sort();
console.log(array_roll_numbers);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`3. Sort the array in ascending order using custom method`);
array_roll_numbers.sort((num1,num2)=>{
    return num1>num2 ? 1 : -1;
});
console.log(array_roll_numbers);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`4. Find the greatest number from the array`);
const array_greates=array_roll_numbers.slice(-1);
console.log(array_roll_numbers);
console.log(`The Greatest Number is :`,array_greates);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`5. Find the Smallest number from the array`);
const array_smallest = array_roll_numbers.slice(0,1);
console.log(array_roll_numbers);
console.log(`The Smallest Number is :`,array_smallest);

console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`5. Remove Duplicate elements from the array`);
const new_array=[...new Set(array_roll_numbers)];
console.log(new_array);

    

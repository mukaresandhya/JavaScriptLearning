const mapOfNumbers = new Map(); // Creating an Map
mapOfNumbers.set(11, "Eleven"); // Adding element in key value pair
mapOfNumbers.set(22, "Twenty two");
mapOfNumbers.set(2, "Two");
mapOfNumbers.set(11, "Ten + One");
mapOfNumbers.set(33, "Eleven");
mapOfNumbers.set(44, "Fourty Four");
mapOfNumbers.set(50, "Fifty");
console.log(mapOfNumbers);

const valueForKey22 = mapOfNumbers.get(22);
console.log(valueForKey22);

const valueForKey11 = mapOfNumbers.get(11);
console.log(valueForKey11);

console.log(mapOfNumbers);
console.log(mapOfNumbers.size);

mapOfNumbers.delete(11);
console.log(mapOfNumbers);
const isKeyAvailable=mapOfNumbers.has(22);
console.log(isKeyAvailable);

const isKeyAvailables=mapOfNumbers.has(111);
console.log(isKeyAvailables);

console.log(`-----------------------------Traversing over set----------------------------------`);
const keyOfMaps=mapOfNumbers.keys();
console.log(keyOfMaps);
for (const key of keyOfMaps) 
{
    console.log(key,mapOfNumbers.get(key));
}


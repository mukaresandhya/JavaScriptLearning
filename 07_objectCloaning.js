var isMarried = true;

let name = "John";
let frdName = "Tom";
name = frdName;

const age = 23;
// const frdAge = 25;
// age = frdAge;// Not allowed

const anil = {
  age: 23,
  name: "Anil",
  company: "Microsoft",
};
Object.freeze(anil);
anil.country = "India";
anil.age = 27;
delete anil.company;
console.log(anil);

const sunil = {
  age: 24,
  name: "Sunil",
  company: "Apple",
};
// anil = sunil; // Not allowed

// Array freezing
const arrayNumbers = [2, 4, 5, 8];
// arrayNumbers = []; /// Not allowed
// Freeze array
//Object.freeze(arrayNumbers);
arrayNumbers.push(10);
console.log(arrayNumbers);

// Merging two objects
const sunilAddress = {
  city: "Pune",
  pin: "431202",
};

// Spread Operator
let empSumit = {
  empName: "Sumit",
  empSalary: "70K",
};
// ... Spread Operator
// console.log(empSumit);
// console.log({... empSumit});
let empMohit = { ...empSumit }; // Deep Cloning using spread operator (... )
empMohit.empName = "Mohit";
console.log(empMohit);
console.log(empSumit);

// 2. Deep clone using JSON.stringfy
console.log("===== Deep clone using JSON.stringfy ======");
const empStew = {
  name: "Stew Jobs",
  age: 50,
  marks: {
    science: 70,
    math: 90,
    english: 87,
  },
};
let empBill = JSON.parse(JSON.stringify(empStew));
empBill.marks.science = 90;
empBill.name = "Bill Gates";
console.log(empStew);
console.log(empBill);
console.log(empStew.marks.science);
console.log(empBill.marks.science);

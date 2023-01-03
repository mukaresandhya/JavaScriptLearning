const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`Given Array is :`, arrayNums);
console.log(
  `==========================================================================================================`
);
console.log(`1. Perform shallow clone on arrayNums`);
const array = arrayNums;
array.push(55, 66);
console.log(`Original Array is :`, arrayNums);
console.log(`Cloned Updated Array is :`, array);
console.log(
  `==========================================================================================================`
);
console.log(`2. Perform Deep Clone Using Spread Operator`);
let arrayClone = [...arrayNums];
console.log(`Cloned Array is :`, arrayClone);
console.log(`-------------------------------------------------------`);
arrayNums.push(10, 25);
console.log(`Original Updated Array is :`, arrayNums);
console.log(`Cloned Array is :`, arrayClone);
console.log(
  `==========================================================================================================`
);
console.log(`3. Merge and concat array using spread operator`);
const arrayEven = [2, 30, 14, 8];
console.log(`Given array is :`, arrayEven);
let mergeArray = [...arrayNums, ...arrayEven];
console.log(`Merged Array is :`, mergeArray);
console.log(
  `==========================================================================================================`
);
console.log(`4. Creating the employee_info Objec`);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  Salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"],
};
console.log(employee_info);
console.log(
  `==========================================================================================================`
);
console.log(`5. Employee Details are`);
console.log(
  `5A. The Address is :`,
  `${employee_info.address.locality.colony},`,
  `${employee_info.address.locality.street},`,
  `${employee_info.address.city},`,
  `${employee_info.address.state},`,
  `${employee_info.address.country}.`
);
console.log(`5B. The Mobile Number is :`, `${employee_info.mobiles}`);
console.log(
  `==========================================================================================================`
);
console.log(`6. perform Deep Copy Using JSON.stringfy()`);
let empDetails = JSON.parse(JSON.stringify(employee_info));
console.log(`6A. Update Property july_month salary to cloned Object`);
console.log(`Before Update Salary :`, empDetails.Salary);
empDetails.Salary.july_month = "80,0000INR";
console.log(`After Update Salary : `, empDetails.Salary);
console.log(
  `==========================================================================================================`
);
console.log(`6A. Update Property Counry to Original Object`);
console.log(`Before Update John Doe Country : `, employee_info.address.country);
employee_info.address.country = "United Kingdom";
console.log(`After Update John Doe  Counry : `, employee_info.address.country);
console.log(
  `==========================================================================================================`
);
console.log(`7A. Logging Updated Values of original Object`);
console.log(employee_info.emp_id);
console.log(employee_info.emp_name);
console.log(employee_info.Salary);
console.log(employee_info.address);
console.log(employee_info.mobiles);
console.log(`7B. Logging Updated Values of Cloned Objects`);
console.log(empDetails.emp_id);
console.log(empDetails.emp_name);
console.log(empDetails.Salary);
console.log(empDetails.address);
console.log(empDetails.mobiles);


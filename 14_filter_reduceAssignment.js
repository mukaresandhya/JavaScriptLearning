class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");


const array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`1. All employee from "Wipro Company"`);
var wiproEmployee=array_emps.filter((currentValue)=>{
    return currentValue.emp_company=="Wipro";

});
wiproEmployee.forEach((currentValue)=>{
    console.log(currentValue);
});
console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`2. All the employess from "IT" or "Hr" Department`);
var department=array_emps.filter((currentValue)=>{
   return(currentValue.emp_dept=="IT" || currentValue.emp_dept=="HR")
   
});
department.forEach((currentValue)=>{
    console.log(currentValue);
});

console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`3. All Employess having emp_id is greater than 50`);
var empId=array_emps.filter((currentValue)=>{
    return currentValue.emp_id>50;
});
empId.forEach((currentValue)=>{
    console.log(currentValue);
});

console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`4. All the employess whose name start with "A" or "V" or "M"`);
var empName=array_emps.filter((currentValue)=>{
    if(currentValue.emp_name.startsWith("A")||currentValue.emp_name.startsWith("V")||currentValue.emp_name.startsWith("M"))
    {
        console.log(currentValue.emp_name);
    }
});

console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`5. Avarage Salary`);
const sal=array_emps.reduce((runningTOtal,value)=>{
    return runningTOtal+value.emp_salary;
} ,0);
console.log(`Avarge Salary is : ${sal/array_emps.length}`);

console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`6. Avarge Salary for It Department`);
var empDepartment=array_emps.filter((currentValue)=>{
    return currentValue.emp_dept=="IT";
});
const salItDept=empDepartment.reduce((runningTOtal,value)=>{
    return runningTOtal+value.emp_salary;
},0);
console.log(`Avarge Salary is : ${salItDept/empDepartment.length}`);











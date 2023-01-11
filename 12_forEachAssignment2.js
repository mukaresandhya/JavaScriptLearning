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

console.log(`1. Find out the TCS Employee details and log only name and company on console`);;
const arrayEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
arrayEmployee.forEach( (currentValue) =>{
    if(currentValue.emp_company=="TCS")
    {
        console.log(`Employee Name :${currentValue.emp_name} and Employee Company : ${currentValue.emp_company}`);
    }
    
});
console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`2. Find the Employee with salary greater than or equal to 50000 and log employee details on console`);
arrayEmployee.forEach( (currentValue)=>{
    if(currentValue.emp_salary>=50000)
    {
        //console.log(`${currentValue.emp_id,currentValue.emp_name,currentValue.emp_dept,currentValue.emp_salary,currentValue.emp_company}`);
        console.log(currentValue);
    }
});
console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`3. Find the sum of all employee salary and log on console `);
var totalSalary=0;
arrayEmployee.forEach((currentValue)=>{
    totalSalary+=currentValue.emp_salary;
});
console.log(`${totalSalary}`);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`4. Find the Avarge Salary and log on console`);
var avarageSalary=0;
arrayEmployee.forEach((currentValue)=>{
    avarageSalary=totalSalary/arrayEmployee.length;
});
console.log(`${avarageSalary}`);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`5. Find the "IT" or "HR" department employess whose salary is >=75000`);
arrayEmployee.forEach((currentValue)=>{
    if((currentValue.emp_dept=="IT"||currentValue.emp_dept=="HR")&&(currentValue.emp_salary>=75000))
    {
        console.log(currentValue);
    }
});



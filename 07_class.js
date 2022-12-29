
class Employee{
    constructor(name,id,age,city){
        this.name=name;
        this.id=id;
        this.age=age;
        this.city=city;
    }
}

let empSmith=new Employee("Smith",101,23,"Pune");
empJay=new Employee("Jay",102,26,"Mumbai");
empBill=new Employee("Billgates",103,25,"nagpur",)
console.log(empSmith);
console.log(empSmith.name,empSmith.id,empSmith.age,empSmith.city);
console.log(empJay.name,empJay.id,empJay.age,empJay.city);
console.log(empBill.name,empBill.id,empBill.age,empBill.city);
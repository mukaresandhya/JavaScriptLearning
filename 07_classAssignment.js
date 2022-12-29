class Vehicle{
    constructor(name,color,type,model)
    {
        this.name=name;
        this.color=color;
        this.type=type;
        this.model=model;
    }
}
let vehicleAudi=new Vehicle("Audi","Black","4 Wheeler","Audi A4");
let vehicleAlto=new Vehicle("Alto","White","4 Wheeler","maruti Alto");
let vehicleKTM=new Vehicle("KTM","Red","2 Wheeler","KTM RC 390");
let vehicleBMW=new Vehicle("BMW","Orange","4 Wheeler","BMW X5");
let vehicleErtiga=new Vehicle("Ertiga","Gray","4 Wheeler","Maruti Suzuki");
console.log(`1. Define class Vehicle with data members and constructor`);
// console.log(vehicleAudi.name,vehicleAudi.color,vehicleAudi.type,vehicleAudi.model);
// console.log(vehicleAlto.name,vehicleAlto.color,vehicleAlto.type,vehicleAlto.model);
// console.log(vehicleKTM.name,vehicleKTM.color,vehicleKTM.type,vehicleKTM.model);
// console.log(vehicleBMW.name,vehicleBMW.color,vehicleBMW.type,vehicleBMW.model);
// console.log(vehicleErtiga.name,vehicleErtiga.color,vehicleErtiga.type,vehicleErtiga.model);
console.log(vehicleAudi);
console.log(vehicleAlto);
console.log(vehicleKTM);
console.log(vehicleBMW);
console.log(vehicleErtiga);
console.log(`----------------------------------------------------------------------------------------------------`);
console.log(`2. Define class college with data member,constructor and member function`);
class College{
    constructor(name,department,location,rank)
    {
        this.name=name;
        this.department=department;
        this.location=location;
        this.rank=rank;
    }
    showDetails()
    {
        console.log(this.name,this.department,this.location,this.rank);
    }
}
let college1=new College("SSWP","Engineering","Solapur",20);
let college2=new College("TKIET","Medical","Kolhapur",18);
let college3=new College("Sangmeshwar","BCS","Pune",25);
let college4=new College("Walchand","Science","Mumbai",15);
college1.showDetails();
college2.showDetails();
college3.showDetails();
college4.showDetails();
console.log(`----------------------------------------------------------------------------------------------------`);
console.log(`3. Traverse Object with one Argument`);
function traverseObject(college1)
{
    for (const key in college1) {
        if (Object.hasOwnProperty.call(college1, key)) {
            const element = college1[key];
            console.log(`${key} : ${element}`);
        }
    }
}
traverseObject(college1);
console.log(`==========================================`);
traverseObject(college2);
console.log(`==========================================`);
traverseObject(college3);
console.log(`==========================================`);
traverseObject(college4);

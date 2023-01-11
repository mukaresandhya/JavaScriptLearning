class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal");
console.log("====== Set of Vehicles =======");
    const setOfVehicles = new Set();
    setOfVehicles.add(audiA3);
    setOfVehicles.add(audiQ3);
    setOfVehicles.add(mahindra);
    setOfVehicles.add(honda);
    setOfVehicles.add(hero);
    setOfVehicles.forEach( (itemVehicle)=> {
        console.log(itemVehicle.model);
    } );

    console.log("====== Map of Vehicles =======");
    let mapOfVehicles = new Map();
    mapOfVehicles.set("REG_11", audiA3);
    mapOfVehicles.set("REG_22", audiQ3);
    mapOfVehicles.set("REG_33", mahindra);
    mapOfVehicles.set("REG_44", hero);
    mapOfVehicles.set("REG_55", honda);

    mapOfVehicles.forEach((vehicleObject, regNo) => {
        console.log(vehicleObject.model, regNo);
    } );

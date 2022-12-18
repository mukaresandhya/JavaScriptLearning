
console.log(`1.`);

var maleMarriageEligibility=function(gender,age,boyName){
   var result= gender=="Male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are not  eligible for Marriage`;
   return result;
}
console.log(`${maleMarriageEligibility("Male",25,"Billgates")}`);
console.log(`${maleMarriageEligibility("Male",17,"Stew Jobs")}`);

console.log(`----------------------------------------------------------`);

console.log(`2.`);

var femaleMarriageEligibility=function(gender,age,girlName){
    var result=gender=="Female" && age>=18 ? `Hey ${girlName} you are eligible for Marriage` : `Hey ${girlName} you are not  eligible for Marriage`;
    return result;
}
console.log(`${femaleMarriageEligibility("Female",16,"Jenifer")}`);
console.log(`${femaleMarriageEligibility("Female",27,"Malinda gates")}`);
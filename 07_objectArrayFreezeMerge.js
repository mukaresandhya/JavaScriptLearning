const personalDetails={
    personName:"Sandhya",
    //age:25,
    //gender:"Female",
    education:"BE-CSE",
    city:"Solapur"
}
console.log(`1. Creating Object of Personal Details`);
console.log(`Personal Details are :`,personalDetails);
console.log(`======================================================================================================================`);
const collegeDetails={
    collegeName:"SSWP",
    university:"Solapur University",
    location:"Solapur"
}
console.log(`2. Creating Object of college details`);
console.log(`College Details are :`,collegeDetails);
console.log(`======================================================================================================================`);
const mergeObject=Object.assign({},personalDetails,collegeDetails);
console.log(`3. After merging two objects`);
console.log(mergeObject);
console.log(`======================================================================================================================`);
const frndName=["Anuja","Snehal","Monika","Pooja"];
console.log(`4. Creating an array of friend names and freeze it `);
console.log(frndName);
Object.freeze(frndName);
console.log(`======================================================================================================================`);
console.log(`5. Iterating step 4 using for of loop and log friends name`);
for (const iterator of frndName) {
    console.log(iterator);
}
console.log(`======================================================================================================================`);
console.log(`6. Reverse String`);
var myString="Codemind Technology";
var emptyString=" ";
for(let index=myString.length-1;index>=9;index--)
{
    var myString1=myString.charAt(index);
    emptyString=emptyString+myString1;
}
var newString="Codemind";
var concatString=newString+""+emptyString;
console.log(`Original String is : `,myString);
console.log(`Reverse String is :`,concatString);
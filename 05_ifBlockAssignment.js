console.log(`**********Check whether eligible for voting or not**********`);
var ageForVoting=function(age){
    if(age>=18 && age <=120)
    {
        console.log(`Your age is ${age} : You are eligible for vote`);
    }
    if(age<18 && age>1)
    {
        console.log(`your age is ${age} : You are not eligible for vote`);
    }
    if(age<1 || age >120)
    {
        console.log(`Your age is ${age} : Invalid Data`);
    }

}
ageForVoting(45);
ageForVoting(17);
ageForVoting(8);
ageForVoting(20);
ageForVoting(-10);
ageForVoting(200);
ageForVoting(0);

console.log("----------------------------------------------------------------");
console.log("**********Grade Calculation**********");

function gradeCalculation(marks){
    if(marks >=90 && marks<=100)
    {
        console.log(`Fantastic Marks ${marks} : Your grade is A++`);
    }
    if(marks >=75 && marks<90)
    {
        console.log(`Excellent Marks ${marks} :Your grade is A`);
    }
    if(marks>=50 && marks<75)
    {
        console.log(`Good Marks ${marks} : Your grade is B`);
    }
    if(marks>=35 && marks <50)
    {
        console.log(`Mark is ${marks} : Your grade is c,Need improvement`);
    }
    if(marks<=0 && marks>100)
    {
        console.log(`Please provide the valid marks`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);


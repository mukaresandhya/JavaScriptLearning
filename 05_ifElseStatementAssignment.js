
console.log(`-------------------Check Whether eligible for voting or not-------------`);
var ageForVoting=function(age){
    if (age<=0 || age>120) {
        console.log(`Your age is ${age} : Invalid Data`);
    } else {
    //    console.log(`Valid data`); 
       if (age>=18) {
        console.log(`Your  age is ${age} : You are eligible for voting`);
       }else{
        console.log(`Your age is ${age} : You are not eligible for voting`);
       }
    }
}
ageForVoting(45);
ageForVoting(17);
ageForVoting(8);
ageForVoting(20);
ageForVoting(-10);
ageForVoting(200);
ageForVoting(0);


console.log(`-------------------Grade Calculation-------------`);

function gradeCalculation(marks){
    if(typeof marks=="number"){
        if(marks<=0 || marks>100){
            console.log(` Your mak is : ${marks} Please provide the valid marks`);
        }else{
            if(marks>=90 && marks <=100){
            console.log(`Fantastic Marks : ${marks} Your grade is A+`);
            }else{
                if(marks >=75 && marks<90){
                    console.log(`Excellent Marks : ${marks} Your Grade is A`);
                }else{
                    if(marks>=50 && marks<75){
                        console.log(`Good Marks : ${marks} Your grade is B`);
                    }else{
                        if(marks>=35 && marks<50)
                        {
                            console.log(`Marks is :${marks} Your grade is C ,Need Improvement.`);
                        }else{
                            console.log(`Mark is :${marks}, You are Fail`);
                        }
                    }
                }
            }
        }
    }else{
            console.log(` Your mark is : ${marks} Invalid data, Enter Marks in number format`);
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
gradeCalculation("91");
gradeCalculation("Eighty");
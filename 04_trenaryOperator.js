// If SSC marks greater than equal to 35 then pass or fail

var sscMarks;
// var resultPassOrFail=sscMarks>=35 ? "Pass" : "Fail";
// console.log(`Result is : ${resultPassOrFail}`);

var sscResult=function(sscMarks){
    var resultPassOrFail=sscMarks>=35 ? "Pass" : "Fail";
    return resultPassOrFail;
}
console.log(`Result is : ${sscResult(34)}`);
console.log(`Result is : ${sscResult(99)}`);


//For Gender male check marriege eligibility with value age=23

var age=23;
var result=age<23 ? "" : ""
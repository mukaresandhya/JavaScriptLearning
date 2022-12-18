
var graduationScoreForInterview=function(gradScore,hscScore,sscScore,candidateName){
    var interviewGrade=gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congrates! ${candidateName} You are eligible for TCS interview. `
     :`Unfortunately ${candidateName} You are not eligible for TCS interview.`;
//     return interviewGrade;
        console.log(`${interviewGrade}`);
 }
// console.log(`${graduationScoreForInterview(80,86,90,"Sandhya")}`);
// console.log(`${graduationScoreForInterview(70,65,55,"Akash")}`);
// console.log(`${graduationScoreForInterview(60,79,88,"Sneha")}`);

graduationScoreForInterview(80,86,90,"Sandhya");
graduationScoreForInterview(70,65,55,"Akash");
graduationScoreForInterview(60,79,88,"Sneha");

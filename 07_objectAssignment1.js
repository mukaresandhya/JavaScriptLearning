const professor = {
  name: "patil",
  age: 40,
  height: 5,
  gender: "Male",
  city: "Pune",
  degrees: {
    engineering: "CSC",
    PHD: "Adv Computing",
    Medical: "MBBS",
    add: function () {
      return this.engineering + `  ` + this.PHD + `  ` + this.Medical;
    },
  },

  certificates: {
    first: "Hacker rank Participation",
    second: "Certificate in IFE course",
    third: "Certificate in Adv Programming",
  },
};

console.log(`1. All the properties of professor`);
console.log(Object.keys(professor));
console.log(professor);
console.log(`----------------------------------------------------------------------------------------------------`);
console.log(`2. Adding Nested object as degree`);
console.log(Object.keys(professor));
console.log(professor.degrees);
console.log(`----------------------------------------------------------------------------------------------------`);
console.log(`3. Adding Nested object as Certificates`);
console.log(Object.keys(professor));
console.log(professor.certificates);
console.log(`-----------------------------------------------------------------------------------------------------`);
const totalDegree = professor.degrees.add();
console.log(professor.degrees);
console.log(`4. Total Degrees are : ${totalDegree}`);
console.log(`-----------------------------------------------------------------------------------------------------`);
console.log(`5. Adding new Property in professor object`);
professor.mobileNo=8485018066;
console.log(Object.keys(professor));
console.log(professor);
console.log(`-----------------------------------------------------------------------------------------------------`);
console.log(`6. Modifying age property of object`);
professor.age=55;
console.log(Object.keys(professor));
console.log(professor);
console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`7. Deleting one certificate from object`);
delete professor.certificates.second;
console.log(Object.keys(professor.certificates));
console.log(professor.certificates);
console.log(`-------------------------------------------------------------------------------------------------------`);
console.log(`8. Adding one certificate in object`);
professor.certificates.fourth="programming Language Certificate";
console.log(Object.keys(professor.certificates));
console.log(professor.certificates);
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`9. Log the nested object certificates on console`);
console.log(professor.certificates);


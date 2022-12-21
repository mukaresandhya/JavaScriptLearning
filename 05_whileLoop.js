
// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var i=0;  // i = 0 1 2  10  11
while (i<=10) {  // true true 
   console.log(i);  //0 1 2   10
   i++; // 1 2  10  11
}
console.log(`----------------------------------------------------------------`);

// Print numbers from 50 to 5
// initialization 50   condition >=5   update expre = i+5
var i=50;
while (i>=5) {
    console.log(i);
    i=i-5
}
console.log(`----------------------------------------------------------------`);
// Print the table of 10
// initialization 10   condition <=100   update expre = i+10
var i=10;
while (i<=100) {
    console.log(i);
    i=i+10
}
console.log(`----------------------------------------------------------------`);
//Print the numbers from 5 to 15 by incrementing 1
//initilization 5 condition i<=15 update expre i++
var i=5;
while (i<=15) {
    console.log(i);
    i++
}
console.log(`----------------------------------------------------------------`);
//Print the numbers from 50 to 40 by decrementing by 1
//initilization 50 condition i>=40 update expre i--
var i=50;
while (i>=40) {
    console.log(i);
    i--
}
console.log(`----------------------------------------------------------------`);
//WAP to print first 15 odd numbers
//initilization 1 condition i<=15 update expre i=i+2
var i=1;
while (i<=15) {
    console.log(i);
    i=i+2
}
console.log(`----------------------------------------------------------------`);
//WAP to find first 10 even Numbers
//initilization 2 condition i<=20 update expre i=i+2
var i=2;
while (i<=20) {
    console.log(i);
    i=i+2
}
console.log(`----------------------------------------------------------------`);
//WAP to print table of 5 like --> 5,10,15,.........50
//initilization 5 condition i<=50 update expre i=i+5
var i=5;
while (i<=50) {
    console.log(i);
    i=i+5
}
console.log(`----------------------------------------------------------------`);
//WAP to print table of 10 like 10,20,30,......100
//initilization 10 condition i<=100 update expre i=i+10
var i=10;
while (i<=100) {
    console.log(i);
    i=i+10
}
console.log(`----------------------------------------------------------------`);
//WAP to print table of 10 in reverse order -->100,90,80---------10
//initilization 100 condition i>=10 update expre i=i-10
var i=100;
while (i>=10) {
    console.log(i);
    i=i-10
}
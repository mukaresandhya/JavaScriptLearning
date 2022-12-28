const sbiBank={
    bankName:"SBI Bank",
    location:"Pune",
    accountNo:1234875664,
    ifsc:'SBI000042',
    interestRate: '8%', 
    showDetails : function()
    {
        console.log(`1. SBI Bank details by invoking the function`);
        console.log(Object.keys(sbiBank));
        console.log(sbiBank);
    }
    
}
sbiBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------`);
const axisBank={
    bankName:"Axis Bank",
    location:"Nagpur",
    accountNo:2345617886,
    ifsc:'AX0000456',
    interestRate:'10%',
    showDetails:function()
    {
        console.log(`2. Axis Bank details by invoking the function`);
        console.log(Object.keys(axisBank));
        console.log(axisBank);
    }
}
axisBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------`);
const hdfcBank={
    bankName:"HDFC Bank",
    location:"Nashik",
    accountNo:2312456523,
    ifsc:'HDB0000453',
    interestRate:'12%',
    showDetails :function()
    {
        console.log(`3. HDFC Bank details by invoking the function`);
        console.log(Object.keys(hdfcBank));
        console.log(hdfcBank);
    }
}
hdfcBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------`);
const yesBank={
    bankName:"YES Bank",
    location:"Mumbai",
    accountNo:3245678654,
    ifsc:'YESB000432',
    interestRate:"15%",
    showDetails:function()
    {
        console.log(`4. YES Bank details by invoking the function`);
        console.log(Object.keys(yesBank));
        console.log(yesBank);
    }
}
yesBank.showDetails();


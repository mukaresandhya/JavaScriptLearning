class Bank {
  constructor(bank_name, location, account_no, ifsc, interest_rate) {
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;
  }
}
console.log(`1. Created the class and initilize data member using constructor`);
console.log(
  `=========================================================================================================================`
);
console.log(`2. Created The Objects`);
const axis_bank = new Bank("AXIS Bank", "Hydrabad", 25678945, "AXB4567", "10%");
const sbi_bank = new Bank("SBI Bank", "Pune", 26879545, "SBI4321", "8%");
const icici_bank = new Bank(
  "ICICI Bank",
  "Nagpur",
  29854534,
  "ICICI4123",
  "12%"
);
const kotak_bank = new Bank("Kotak Bank", "Mumbai", 28754675, "KOT4987", "7%");
const hdfc_bank = new Bank("HDFC Bank", "Nashik", 26459867, "HDF4198", "5%");
const panjab_bank = new Bank("Punjab Bank", "Wakad", 27564567, "PUN4785", "9%");
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_bank);
console.log(
  `=========================================================================================================================`
);
console.log(
  `3. Created an array and traverse using for of loop and log bank name and location`
);
const newArray = [
  axis_bank,
  sbi_bank,
  icici_bank,
  kotak_bank,
  hdfc_bank,
  panjab_bank,
];
for (const elements of newArray) {
  // console.log(`${bank_name}, ${location}`);
  console.log(`${elements.bank_name},${elements.location}`);
}
console.log(
  `=========================================================================================================================`
);
console.log(`4. Find the object which has name "Kotak Bank" using for of loop`);
for (const elements of newArray) {
  if ((bank_name = "Kotak Bank")) {
    console.log(kotak_bank);
    break;
  }
}
console.log(
  `=========================================================================================================================`
);
console.log(`5. Log the details on console using for loop`);
for (let index = 0; index < newArray.length; index++) {
  const element = newArray[index];
  console.log(element);
}

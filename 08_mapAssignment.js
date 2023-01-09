class Bank {
  constructor(bankName, location, accountNo, ifsc, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.accountNo = accountNo;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
  }
}
console.log(`1. Created the class and added data members`);
console.log(
  `---------------------------------------------------------------------------------------------------------------------------`
);
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
console.log(`2. Created the objecs`);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_bank);
console.log(
  `--------------------------------------------------------------------------------------------------------------------------`
);

console.log(
  `3. Created a map in that key should be account no and value is object`
);
const mapOfBank = new Map();
mapOfBank.set(25678945, axis_bank);
mapOfBank.set(26879545, sbi_bank);
mapOfBank.set(29854534, icici_bank);
mapOfBank.set(28754675, kotak_bank);
mapOfBank.set(26459867, hdfc_bank);
mapOfBank.set(27564567, panjab_bank);

console.log(
  `--------------------------------------------------------------------------------------------------------------------------`
);
console.log(`4. traverse the map for each object`);

const traverseBank = mapOfBank.keys();
for (const key of traverseBank) {
  const bank = mapOfBank.get(key);
  console.log(bank.bankName, " ", bank.accountNo, " ", bank.interestRate);
}

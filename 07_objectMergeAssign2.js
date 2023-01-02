const car = {
  carname: "Creta SX",
  company: "Hundai",
  launchYear: 2017,
};
const carEngine = {
  enginePower: "1499CC",
  maxPower: "113 BHP",
};

console.log(`1. Merging car and carEngine Object Using object.assign `);
margrgeUsingObject = Object.assign(car, carEngine);
console.log(margrgeUsingObject);
console.log(
  `---------------------------------------------------------------------------------------------------------------`
);

console.log(`2. Merging car and carEngine Object Using Spread Operator `);
mergeusingSpread = { ...car, ...carEngine };
console.log(mergeusingSpread);

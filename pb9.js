// problem 9
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const monthlySavings = (incomes, expenses) => {
  if (!Array.isArray(incomes) || typeof expenses != "number") {
    return "Invalid inputs";
  } else {
    let totalIncome = 0;
    for (let i = 0; i < incomes.length; i++) {
      const val = incomes[i];
      if (val >= 3000) {
        incomes[i] = val - val * 0.2;
      }
      totalIncome += incomes[i];
    }
    return totalIncome - expenses;
  }
};

const income = [1000, 2000, 2500];
const expense = 5000;
const saving = monthlySavings(income, expense);
if (saving < 0) {
  console.log("Earn more");
} else {
  console.log(`Total savings: ${saving}`);
}

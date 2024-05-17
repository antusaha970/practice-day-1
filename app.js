// Problem 1
// const number = 96;

// if (number >= 33 && number <= 39) {
//   console.log("You got D");
// } else if (number >= 40 && number <= 49) {
//   console.log("You got C");
// } else if (number >= 50 && number <= 59) {
//   console.log("You got B");
// } else if (number >= 60 && number <= 69) {
//   console.log("You got A-");
// } else if (number >= 70 && number <= 79) {
//   console.log("You got A");
// } else if (number >= 80 && number <= 100) {
//   console.log("You got A+");
// } else {
//   console.log("You got F");
// }

// problem 2
// const number = 11;
// if (number % 2 == 0) {
//   console.log(`${number} is even`);
// } else {
//   console.log(`${number} is odd`);
// }

// problem 3
// const arr = [
//   1, 5, 6, 2, 3, 4, 8, 9, 10, 11, 7, 18, 19, 20, 12, 13, 16, 17, 14, 15,
// ];

// arr.sort((a, b) => a - b);

// console.log(arr);

// problem 4
// const year = 2009;
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log("Leap year");
//     } else {
//       console.log("Not leap year");
//     }
//   } else {
//     console.log("Leap year");
//   }
// } else {
//   console.log("Not leap year");
// }

// problem 5
// const arr = [];
// for (let i = 1; i <= 50; i++) {
//   arr.push(i);
// }
// const ans = arr.filter((val) => val % 3 == 0 && val % 5 == 0);
// console.log(ans);

// problem 6
// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
// let bigFrnd = friends[0];
// for (let i = 0; i < friends.length; i++) {
//   const friend = friends[i];
//   if (friend.length > bigFrnd.length) {
//     bigFrnd = friend;
//   }
// }
// console.log(bigFrnd);

// problem 7
// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// const ans = [];
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   let cnt = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == num) {
//       cnt++;
//     }
//   }
//   if (cnt == 1) {
//     ans.push(num);
//   }
// }
// console.log(ans);

// problem 8
// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort((a, b) => a - b);
// console.log(numbers[numbers.length - 1]);

// problem 9
// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// const monthlySavings = (incomes, expenses) => {
//   if (!Array.isArray(incomes) || typeof expenses != "number") {
//     return "Invalid inputs";
//   } else {
//     let totalIncome = 0;
//     for (let i = 0; i < incomes.length; i++) {
//       const val = incomes[i];
//       if (val >= 3000) {
//         incomes[i] = val - val * 0.2;
//       }
//       totalIncome += incomes[i];
//     }
//     return totalIncome - expenses;
//   }
// };

// const income = [1000, 2000, 2500];
// const expense = 5000;
// const saving = monthlySavings(income, expense);
// if (saving < 0) {
//   console.log("Earn more");
// } else {
//   console.log(`Total savings: ${saving}`);
// }

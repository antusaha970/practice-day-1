// problem 5
const arr = [];
for (let i = 1; i <= 50; i++) {
  arr.push(i);
}
const ans = arr.filter((val) => val % 3 == 0 && val % 5 == 0);
console.log(ans);

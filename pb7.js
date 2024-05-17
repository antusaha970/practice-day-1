// problem 7
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const ans = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  let cnt = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == num) {
      cnt++;
    }
  }
  if (cnt == 1) {
    ans.push(num);
  }
}
console.log(ans);

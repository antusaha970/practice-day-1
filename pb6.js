// problem 6
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let bigFrnd = friends[0];
for (let i = 0; i < friends.length; i++) {
  const friend = friends[i];
  if (friend.length > bigFrnd.length) {
    bigFrnd = friend;
  }
}
console.log(bigFrnd);

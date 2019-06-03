import getUserSync from "./getUserSync";

console.log("Starting User 1");
var user1 = getUserSync('123');
console.log("user1", user1);

console.log("Starting User 2");
var user2 = getUserSync('321');
console.log("user2", user2);


var sum = 1 + 2;
console.log("The sum is: " + sum);

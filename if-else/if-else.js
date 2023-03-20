// let accessAllowed;
// let age = prompt("how old are you?");

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);

// //conditional operater "?"

// let result = a + b < 4 ? "below" : "over";

// //logical operater

// let hour = 12;
// let isWeekend = true;

// if (hour < 8 || hour > 20 || isWeekend) {
//   alert("The office is closed");
// }

// let age;

// if (age >= 14 && age <= 90) {
//   alert("you are allowed");
// }
// if (age < 14 && age > 90) {
//   alert("you are not invited");
// }
// if (!age >= 14 && age <= 90) {
//   alert("you are also not invited");
// }

let visitor = prompt("who are you?", "");

if (visitor == "Admin") {
  let password = prompt("input your password");
  if (password == "TheMaster") {
    alert("welcome!");
  } else if (password == "") {
    alert("canceled");
  } else {
    alert("wrong password");
  }
} else if (visitor == "") {
  alert("canceled");
} else {
  alert("I don't know you");
}

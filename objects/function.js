// let userName = prompt("whats your name?");
// let userGender = prompt("whats your gender?");
// if (userGender === "male") {
//   console.log(`you are prince:${userName}`);
// } else {
//   console.log(`you are princess:${userName}`);
//}

// let userInput = function (name, gender) {
//   let userName = prompt("whats your name?");
//   let userGender = prompt("whats your gender?");
//   if (userGender === "male") {
//     console.log(`you are prince:${userName}`);
//   } else {
//     console.log(`you are princess:${userName}`);
//   }
// };
// //practice

// function showMessage() {
//   alert("hello everyone!");
// }
// showMessage();

// local variable

// function showMessage() {
//   let message = "Hello Im shoeba";
//   alert(message);
// }
// showMessage();
// alert(message);

//outer variable or global variable

// let userName = "John";
// function showMessage() {
//   userName = "Bob";
//   let message = "Hi Im shoeba";
//   alert(message + " " + userName);
// }

// alert(userName);
// showMessage();
// alert(userName);

//returning a value
// function sum(a, b) {
//   return a + b;
// }
// let result = sum(1, 4);
// console.log(result);

// function makeUserInput(Gender) {
//   if (Gender === "male") {
//     return "you are a prince!";
//   } else {
//     alert(`your name is ${userName} and you are a princess!`);
//   }
// }

// makeUserInput();

//JONAS FUNCTION EXAMPLE:1

// function juiceProcessor(apples, oranges) {
//   // console.log(apples, oranges);

// //   let juice = `juice with ${apples}apples and juice with ${oranges} oranges`;
// //   return juice;
// // }
// // let fruitjuice = juiceProcessor(3, 8);
// // console.log(fruitjuice);

//Example:2

// let calcAge = function (birthYear) {
//   let age = 2023 - birthYear;
//   return age;
// };
// let age1 = calcAge(1980);
// console.log(age1);

//example 3
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you");
//   }
// }
// checkAge(23);

//let num = 1000;
//let numtoString = num + "";
//
//let splitNumber = numtoString.split("");
//console.log(splitNumber);
//let reverseNumber = splitNumber.reverse();
//console.log(reverseNumber);
//let joinnumtoString = reverseNumber.join("");
//console.log(joinnumtoString);

// let reverseNumber = function (n) {
//   n = n + "";
//   return n.split("").reverse().join("");
// };
// console.log(Number(reverseNumber(4567)));

//confusion//

// let x = 87;
// function part1() {
//   x = 45;
// }
// function part2() {
//   alert(x);
// // }
// part1();
// part2();
// console.log(x);

// let x = 5,
//   y = 8;
// alert(x++ - ++y + x++);//2
////////////
// let x = "5",
//   y = 10;
// alert(+x + y); //15
// /////////////////////
// alert(1 + 2 + "3" + 4 + 5); //3345

let isleapYear = function (birthYear) {
  if (birthYear % 4 === 0) {
    console.log("its a leapyear...yay!!!");
  } else {
    console.log("not a leapYear");
  }
};
isleapYear(1988);

// let counter = 3;
// console.log(2 * ++counter); //8
// console.log(2 * counter++); //8
// console.log(counter); //5

// // Counter++/++counter is nothing but counter = counter + 1

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(typeof ("-9" + 5));
// console.log(typeof ("-9" - 5));
// console.log(typeof (null + 1));
// console.log(undefined + 1);
// console.log(typeof (" \t \n" - 2)); here '\t \n' is considered as empty string and its value is 0. so (0-2)=-2
let a = Number(prompt("First number?", 1));
let b = Number(prompt("Second number?", 2));
console.log(Number(a + b));

/*objects practice */

// let user = {
//   name: "john",
//   age: "45",
// };
// let key = prompt("whats your name?", "name");
// //alert(user[key]);

// let fruit = prompt("whats your fabourite fruite?", "apple");
// let bag = {};
// console.log(bag[fruit]);

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("john", 30);
alert(user.name);

//exercise
// let calculator = {
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//exercise

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     alert(this.step);
//     return this;
//   },
//   end: function () {
//     alert(`This is the end with step ${this.step}`);
//     return {
//       up: function () {
//         alert("hahaha");
//         return this;
//       },
//       down: function () {
//         alert("ooopsss");
//       },
//     };
//   },
// };
// ladder.up().end().up().down();

//using if-else
// let userName = prompt("what is your name?", "isra");

// if (userName === "isra" || userName === "wania" || userName === "jinuk") {
//   alert("you are 2 years old ");
// } else if (userName === "kayra") {
//   alert("you are 6");
// } else if (userName === "angad") {
//   alert(" you are 14");
// } else {
//   alert("you are not 2");
// }

// //using function
// let userName = prompt("what is your name?", "isra");

// let ageDetect = function (name) {
//   if (userName === "isra" || userName === "wania" || userName === "jinuk") {
//     alert("you are 2 years old ");
//   } else if (userName === "kayra") {
//     alert("you are 6");
//   } else if (userName === "angad") {
//     alert(" you are 14");
//   } else {
//     alert("you are not 2");
//   }
// };

// ageDetect(userName);

let userName = prompt("input your name", "shoeba");

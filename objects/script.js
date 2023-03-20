// let student = {
//   name: "Isra",
//   age: 2,
// };
// let name = prompt("what is your name?", "name");
// let age = prompt("whats your age?", "age");
// student[name] = name;
// student["abc"] = "abc";
// name = "name";
// student["name"] = "name";
// student[age] = age;
// alert(`Name is ${student.name} and age is ${student.age}`);

// let sname = "shoeba";
// let copy = sname;
// console.log(copy);
// let key = prompt("What do you want to know about the user?", "name"); //shoeba
// let user = {};
// let name = prompt("whats your name?", "shoeba");
// let age = prompt("age?", 34);
// let Id = prompt("id?", 9804);
// user[name] = name;
// user[age] = age;
// user[Id] = Id;
// console.log(user[name], user[age], user[Id]);

//jonas object challenge

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Max", "peat", "steve"],
//};
//const interestedIn = prompt("what do you want to know about jonas?");

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("wrong request!kindly choose from ....options");
// }

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
//);
//exercise

// let user = {};
// let name = "John";
// let surname = "Smith";
// user.name = name;
// user.surname = surname;
// console.log(user.name, user.surname);
// user.name = "pete";
// console.log(user.name);
// delete user.name;
// console.log(user.name);

// let makeUserName = function (name, age) {
//   return {
//     name,
//     age,
//   };
// };
// let userName = prompt("whats your name?", "");
// let userAge = prompt("whats your age?", "");
// let user = makeUserName(userName, userAge);
// alert(`your name is ${user.name} and your age is ${user.age} `);

//for in loop exercise

let obj = {
  name: "abc",
  id: 9804,
  age: 34,
};
for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

let isEmpty = function (obj) {
  let flag = true;
  for (let key in obj) {
    flag = false;

  }
  return flag;
};
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

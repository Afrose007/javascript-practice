let message = "Hello!";
let phrase = message;

alert(`${phrase}`);

message = "Hi!";

alert(`${phrase}`);

let userOne = {
  name: "John",
  age: 34,
  address: "abcd",
};

let userTwo = userOne;

alert(userTwo.name);

userOne.name = "Smith";

alert(userTwo.name);

userTwo.name = "Dan";

userOne = {};

alert(userOne.name);
alert(userTwo.name);

const userThree = {
  name: "Isra",
};

usertThree.name = "Sonamoni";

alert(userThree.name);

usertThree = {};

let user = {
  name: "John",
  age: 30,
  sayHi: function () {
    alert("Hello!");
  },
};

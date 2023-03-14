alert("Hello");

let age = prompt("What is your age?", 18);

console.log(`You are ${age} years old`);

let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed

//let adult = age > 18 ? true : false;
age = prompt("What is your age?", 18);
let adult = age > 18;
alert(adult);

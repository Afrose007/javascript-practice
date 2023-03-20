// let arg = prompt("input a number");
// switch (arg) {
//   case "0":
//   case "1":
//     alert("one or zero");
//     break;

//   case "2":
//     alert("two");
//     break;
//   case 2:
//     alert("cannot executes");

//   default:
//     alert("not a valid number");
// }

// let browser = prompt("what is your browser?", "");

// if (browser == "Edge") {
//   alert("you have got the Edge");
// } else if (browser == "chrome" || browser == "safari" || browser == "opera") {
//   alert("we also support these browsers");
// } else {
//   alert("we hope that this page looks okay");
// }

let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
  default:
    alert("invalid number");
}

// advanced problem//
// function multiplyAll(arr) {
//   let product = 2;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product = product * arr[i][j];
//       console.log(arr[i][j]);
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// // Modify values below to test your code
// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);

// for (let i = 0; i < 5; i++) {
//   console.log(`current value is ${i}`);
//   for (let j = 0; j < 5; j++) {
//     console.log(`j : ${j}`);
//   }
//   console.log("-----------");
// }

//create a multiplication table of a given number

for (let i = 0; i < 11; i++) {
  console.log("-----------");
  for (let j = 1; j < 11; j++) console.log(`${i} x ${j} = ${i * j}`);
}

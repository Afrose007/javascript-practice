let styles = ["Jazz", "Blues", "melody"];
let countries = ["USA", "Nepal", "Maldives", "Bangladesh", "India", "UK"];
let states = ["MN", "CA", "TX", "FL"];

styles.push("Rock-n-Roll");

let index = findIndex(styles.length);
styles[index] = "classics";
console.log(styles);

let countryIndex = findIndex(countries.length);
countries[countryIndex] = "Mexico";
console.log(countries);

let stateIndex = findIndex(states.length);
states[stateIndex] = "NY";
console.log(states);

function findIndex(length) {
  let index;
  let halfLength = length / 2;

  if (length % 2 == 0) {
    index = halfLength - 1;
  } else {
    index = Math.ceil(halfLength) - 1;
  }
  return index;
}

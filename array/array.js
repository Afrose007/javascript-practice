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
  return Math.ceil(length / 2) - 1;
}

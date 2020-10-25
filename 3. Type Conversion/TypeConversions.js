//                Type Casting


// Number to string
let val = String(555);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date()); // new Date() returns the current date of the system.
// Array to string
val = String([1, 2, 3, 4]);
console.log(val);
// toString()
val = (5).toString();
val = (true).toString();
// String to number
val = Number('5');
val = Number(true); // Gives 1
val = Number(false); // Gives 0
val = Number(null); // Gives 0
val = Number('hello'); // <-- invalid and will give NaN as output ( Not a Number = NaN )
val = Number([1, 2, 3]); // <-- invalid and will give NaN as output ( Not a Number = NaN )
console.log(`Here1 ---> ${val}`);
val = parseInt('100.30'); // Gives 100
val = parseFloat('100.30');
console.log("Here2 --->" + val);
console.log(val);
console.log(typeof val); // typeof gives the type of the variable.
console.log(val.length); // <>.length returns length of an array only its not valid for number and other types.

console.log(val.toFixed(2)); // fixes the float value to 2 digits

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2); // --> (5 + '6') = '56' and then convert to number means 56

console.log(sum);
console.log(typeof sum);
// Create some arrays
var number1 = [43, 56, 33, 23, 44, 36, 5];
var x = [43, 56, 33, 23, 44, 36, 5];
var number2 = new Array(22, 45, 33, 76, 54);
var fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
var mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

console.log(`Original Array = ${x}`);
var y = x;
let val;

// Get array length
val = number1.length;
// Check if is array
val = Array.isArray(number1);
// Get single value
val = number1[3];
val = number1[0];
// Insert into array
number1[2] = 100;
// Find index of value
val = number1.indexOf(36);



// Add on to end
number1 = x;
number1.push(250);
console.log(`After adding at back using push() = ${y}`);

// Add on to front
number1 = x;
number1.unshift(120);
console.log(`After adding at front using unshift() = ${number1}`);

// Take off from end
number1 = x;
y = number1.pop();
console.log(`Popped element from end using pop() = ${y}`);

// Take off from front
number1 = x;
y = number1.shift();
console.log(`Popped/shift element from front using shift() = ${y}`);

// Splice values
number1 = x;
y = number1.splice(1, 3); // picks the provided range items out of the array.
console.log(`spliced array using splice() = ${y}`);

// Reverse
number1 = x;
y = number1.reverse();
console.log(`reverse array using reverse() = ${y}`);

// Concatenate array
number1 = x;
y = number1.concat(number2);
console.log(`concatenated array using concat() = ${y}`);

// Sorting arrays
val = fruit.sort();
number1 = x;
y = number1.sort();
console.log(`sorted fruit array using sort() = ${val}`);
console.log(`incorrect sorted numbers = ${y} because it only sorts strings to sort number we use compare functions `);

// Use the "compare function"
val = number1.sort(function(x, y) {
    return x - y;
});
console.log(`correct ascending sorted numbers array using compare + sort() = ${val}`);
// Reverse sort
val = number1.sort(function(x, y) {
    return y - x;
});
console.log(`correct descending sorted numbers array using compare + sort() = ${val}`);

/*
When the sort() function compares two values, it sends the values to the compare function, 
and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort 
function will sort 40 as a value lower than 100.

*/

// Find
function over50(num) {
    return num > 50;
}

val = number1.find(over50);

// console.log(number1);
// console.log(val);
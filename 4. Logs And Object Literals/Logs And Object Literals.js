// Log to console
console.log('Hello World');
console.log('Hi' + 'Tashik');
var name = 'tashik';
var age = 21;
console.log("Hi " + name + " Your age is " + age); // without string literals ` `
console.log(`Hi ${name} Your age is ${age}`); // with string literals ` ` 
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log({ a: 1, b: 2 }); // it can print entire objects. here { a: 1, b: 2 } is an anonymous object without name.
var person = {
    a: 10,
    b: 20
};
console.log(person); // this is also object
console.table({ a: 1, b: 2 }); // prints the object in tabular form in browser's console only.
console.error('This is some error'); // To show red highlighted errors in browser's console. ( works only in browser )
console.clear();
console.warn('This is a warning'); // To show yellow highlighted warnings in browser's console.
console.time('Hello'); // starts calculates the time in ms  and prints the given string.
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello'); // stops calculating the time if provided the same starting string.
var array = [10, 20, 30, 40, 50];
console.log(array); // prints entire array without looping
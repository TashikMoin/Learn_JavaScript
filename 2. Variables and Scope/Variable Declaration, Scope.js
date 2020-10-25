//                                                   var, let, const
/* var is used for global scoping, let is used for block scoping , const is also used for block scoping but the 
initial value can not be changed. */

// var name = 'John Doe'; // uncomment this and comment other declarations
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // With and Without Init var
// var greeting;
// console.log(greeting); // <-- gives undefined because it is undefined(type is not defined)
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Variables Naming
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname; // not recommended



// //                                                LET

// //let name; // uncomment this and comment other declarations
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


// //                                                CONST

// // const name = 'John'; // uncomment this and comment other declarations
// console.log(name);
// // Can not reassign
// name = 'Sara';
// // Have to assign a value
// // const greeting;

// // Defining an object with const keyword
// const person = {
//     name: 'John',
//     age: 30
// }
// person.name = 'Sara'; // this is allowed 
// person.age = 32;
// person = { name: 'Tashik', age: 21 };
// this is not allowed because here we are assignign the compelte new value 
// TypeError: Assignment to constant variable.

// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);

// console.log(numbers);



//                         Scope Difference

var x = 10;

for (let x = 0; x < 20; x++) {};
/* scope variable is destroyed when let/const are used and outer scope value( that is global scope here) its old value
or global/outer scope value is reassigned after the scope ends.
*/
console.log(x); // output -> 10
for (var x = 0; x < 20; x++) {};
/* end of for loop scope means, this local scoped x should be destroyed and the global x should give value 10 but it 
will give 20 in the global scope now. The old value is not saved and the scoped value is overriden */
console.log(x); // output -> 20
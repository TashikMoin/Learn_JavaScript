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
/* 
    A new variable x is made when 'let' is used if inner scope has the same variable name as the outer scope and the inner variable is destroyed
    immediately after its scope however the outer scope / global x still exist.
*/
console.log(x); // output -> 10
for (var x = 0; x < 20; x++) {};
/*
    if same named inner scope variable is declared inside with 'var' then javascript do not create any new local variable since the name and
    the declaration (var) both are same so it do not create any new variable and use the same variable and that is why we see 20 as output.
*/
console.log(x); // output -> 20
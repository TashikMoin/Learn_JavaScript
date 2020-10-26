const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],

    address: { // nested object literals --> can be acessed using double dots ( by providing complete path )
        city: 'Miami',
        state: 'FL'
    },

    getBirthYear: function() { // definitions of function inside an object literal
        return 2017 - this.age;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName; // accessing with .
val = person['lastName']; // accessing without .
val = person.age;
val = person.hobbies[1];
val = person.address.state; // accessing nested object literals
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [ // person map/dictionary
    { name: 'John', age: 30 },
    { name: 'Mike', age: 23 },
    { name: 'Nancy', age: 40 }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name); //acessing map
}
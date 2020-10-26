// ES6 way for defining blue prints of objects ( classes )

class Person {
    firstName = ''; // can declare and initialize here too but this is not recommended.
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName; // declaration + initialization of lastName attribute of Person class
        this.birthday = new Date(dob); // "  "   "  "
    }

    greeting() { // definition of non static methods.
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    // static method definitions. static methods are only called using the class name only in JavaScript.
    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');
console.log(mary);
console.log(Person.addNumbers(1, 2));
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}


// JavaScript does not support multiple inheritance.
class Customer extends Person { // Inheritance
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); // calls the parent class constructor

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

Obj = new Person();
/* Allowed in JavaScript explicit default constructor definition is not needed if other parameterized constructors 
are defined. Default constructor will be made by the engine. */
console.log(Obj);

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());
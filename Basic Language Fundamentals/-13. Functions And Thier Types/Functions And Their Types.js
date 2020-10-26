// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3) {
    return x * x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
/*
An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created. 
IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations so that
they can be destroyed immediately after their use.
*/

(function() {
    console.log('hello');
})();

(function(name) {
    console.log('Hello ' + name);
})('Brad'); // Passing parameters

// PROPERTY METHODS

const todo = {
    add: function() {
        console.log('Add todo..');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();
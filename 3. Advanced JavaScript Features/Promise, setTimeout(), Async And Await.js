/*
                                     Promise
A promise has 3 states
1. Pending ( when the promise is yet to be fullfilled or to be rejected )
2. Resolve ( fullfilled)
3. Reject  ( rejected means a catch block will be executed )

                                     setTimeout, Async and Await
  setTimeout is an asynchronous function that waits for a period of time that is given to it as it's second argument 
  and runs a function( block of code ) provided to it as it's first argument after a period of time (given) has passed.
  when JavaScript v8 engine / Node sees an asynchronous method like setTimeout, it breaks the synchronous flow of the
  program. when the main thread goes inside any asynchronous functions  to execute it, and when it sees a await keyword
  that expects a promise with it, --> var = await <promise returning function>
  the main thread goes back to execute the parent/main function until the promise's state
  is changed from pending --> fullfilled or reject. when the promise is rejected or it is fullfilled the main thread
  again leaves the main execution of the program and again comes here back and execute the remaining code that is 
  defined under await in a synchronous manner and then again goes back to the parent/main function.
   
  - Every async requires an 'await'
  - 'await' keyword expects a promise it sends the main thread to execute the parent/main function and waits until the 
    promise is fullfilled(resolved) or a promise is rejected.

*/



function Do_Some_Work() {
    return new Promise((resolve, reject) => {
        let error = false;
        if (!error) {
            resolve();
            // function described in .then() .then() chaining calls are executed one after another...
            // every then() also returns a promise that calls other then() in the chain
        } else {
            reject(); // when reject is called, no then() is executed only the catch block is executed.
        }
    });
}

async function Fun() {
    console.log(`Started Executing Fun()`);
    // some code # 1
    await Do_Some_Work().then(function Resolving() {
        console.log("Promised Resolved");
    }).catch(function print_error(error) {
        console.log(`Error : ${error}`);
    });
    // The await keyword expects a 'promise' and waits until the promise state is changed from pending -> reject / resolve(fullfilled)
    // some code # 2
    console.log(`Work is done`);

}

console.log('Before Fun Function');
Fun();
console.log('After Fun Function');
/* 
                            console.log('After Fun Function');
This should be printed after console.log(`Work is done`); but since we changed the flow of the program and called
a asynchronous function so we get this statement executed first and not the console.log(`Work is done`); 
statement first. The statements after await are executed as separate task when the promise is fullfilled/rejected. 
Note: async and await breaks the code into separate tasks.
*/
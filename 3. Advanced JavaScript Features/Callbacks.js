const Posts_Or_Data_In_Array = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

/*

//                              Problem without callback functions
function createPost(new_post_or_data_to_be_inserted) {

    setTimeout(function() // setTimeout == async function
        {
            Posts_Or_Data_In_Array.push(new_post_or_data_to_be_inserted);
        }, 2000);
    // this task is executed after getPost because it takes more time but if it is having less time ( promise returning
    // time ) then it may be executed first and we can see 3rd post also.

}

function getPosts() {
    setTimeout(function() { // setTimeout == async function
        let output = '';
        Posts_Or_Data_In_Array.forEach(
            function(i) {
                output += `${i.title} \n`;
            }
        );
        console.log(output);
    }, 1000);
}

createPost({ title: 'Third One', body: 'This is post three' });
getPosts();

// Third post is created/posted first and then we are viewing all posts using getpost function. Still we do not see
// third post in the output because the setTimeout is async function and the flow of the program is converted to
// asynchronous from synchronous. The setTimeout function first wait 'n' miliseconds that are provided to it as 2nd
// argument and then after the wait it starts the execution of the function that is passed to it as it's first
// argument. When the main thread sees the async call inside setTimeout() it goes back to the main function until the
// promise of setTimeout is returned & that is the reason we get first 2 posts as output because getPost task takes 
// less time the third post is added after some execution of the main function which means that getPost() is executed 
// first and then the createPost is executed and we do not see third post in output since createpost takes more time 
// so the 




// comment everything except for the Posts_Or_Data_In_Array to run this multi-line commented code.
*/



// /*

function createPost(post, callback)
/*callback function is a function that has an additional parameter called callback which expects a function 
that is to be called after the execution of the parent/first function.
*/
{
    setTimeout(function() {
        Posts_Or_Data_In_Array.push(post); // pushing the post object in to the array
        callback(); // getPost() is called just after the complete execution of createpost.
    }, 2000);
}


function getPosts() {
    setTimeout(function() {
        let output = '';
        Posts_Or_Data_In_Array.forEach(function(i) {
            output += `${i.title} \n`;
        });
        console.log(output);
    }, 1000);
}

/* 
Now if we change time of any of these function it does not matter even if we make createpost time > getpost time,
then still it will show the third post in the output. 
*/

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// */


/* 
While calling the first dependent/parent function we also pass the function that should be invoked immediately 
after the execution of the parent/dependent function.
*/
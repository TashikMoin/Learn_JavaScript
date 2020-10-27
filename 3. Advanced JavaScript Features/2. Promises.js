const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// Promises do the same job that callback functions do but with more readability and less code.

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            const error = false;
            // creating this error variable so that catch will not be executed and on basis of condition we are resolving/rejecting promises.
            if (!error) {
                resolve();
                /*
                calling resolve() means when a promise is returned by createPost, only all then() are executed 
                and no catch will be called.
                */
            } else {
                reject('Error: Something went wrong');
                /* if for some reason we are not able to call getposts() then we call reject() and calling reject 
                means only catch block will be executed.
                */
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `${post.title} \n`;
        });
        console.log(`${output}`);
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(function(err) {
        console.log(err);
    });

/* 
then(<function_to_be_called_after>) executes the function that is to be called after the execution of parent/dependent function. 
we can have multiple then() and every then() returns a promise that calls other then. A promise is required to call then().
*/
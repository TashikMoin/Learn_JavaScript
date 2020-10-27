//                                      Fetch API with normal syntax

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

/* 
fetch returns a response promise ( that has complete data of that page)  in raw format and that that promise calls
then() and calls a new anonymous function that converts the raw format response into text/json or any other format
using different functions and again the first then returns a promise with legal format data that again calls a then()
that does not return anything and do extract data from the valid format of the response
for e.g,
here data object in the 2nd then has legal json formatted data and from that data we are concatenating a output
variable for a list format output using foreach function that only extracts the 'login' names of the users from the 
entire data. The data in api.github.com is in format,
[
  {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false
  },
  
  ....
]

we are only fetching login attribute so that is why we use dot with login to fetch only login names of users and finally
this then does not return any other promise so everything ends here.

*/


// Getting data from external API
function getExternal() {
    fetch('https://api.github.com/users')
        // fetch returns a response ( that has complete data of that page) promise in raw format
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            data.forEach(function(i) {
                output += `<li>${i.login}</li>`; // data extraction
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err) { // executed only when fetching has some issues or status is not 200
            console.log(err);
        });
}

// Geting data local text file data
function getText() {
    fetch('test.txt')
        .then(function(res) {
            return res.text(); // converting the raw response into text format
        })
        .then(function(data) {
            console.log(data);
            document.getElementById('output').innerHTML = data;
            // for displaying output on browser. can also do console.log()
        })
        .catch(function(err) {
            console.log(err); // executed only when fetching has some issues or status is not 200
        });
}


// Geting data local json data
function getJson() {
    fetch('posts.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err) { // executed only when fetching has some issues or status is not 200
            console.log(err);
        });
}
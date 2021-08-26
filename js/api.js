// json

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

// load more data 

function loadUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => userDisplay(data));
}

// load post

function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => console.log(data));
}

function userDisplay(data) {
    const ul = document.getElementById('users');
    for (const user of data) {

        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name:${user.name}  email: ${user.email}`;
        ul.appendChild(li);
    }
}


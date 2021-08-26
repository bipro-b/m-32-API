
//  load post

function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displaypost(data));
}

loadPost();
function displaypost(posts) {

  const postContainer = document.getElementById('posts');
  for (const post of posts) {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
        <h3>${post.title} </h3>
        <p>${post.body}
        `;
    postContainer.appendChild(div);
    console.log(post);

  }
}


function addAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {


    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

}

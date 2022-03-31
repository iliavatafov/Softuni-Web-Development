function attachEvents() {
    document.querySelector(`#btnLoadPosts`).addEventListener(`click`, getAllPosts);
    document.querySelector(`#btnViewPost`).addEventListener(`click`, displayPosts);
}

attachEvents();

async function displayPosts() {

    const selectedId = document.querySelector(`#posts`).value;

    const postTitle = document.getElementById(`post-title`);
    const postBody = document.getElementById(`post-body`);
    const ulElement = document.getElementById(`post-comments`);

    postTitle.textContent = ``;
    postBody.textContent = ``;
    ulElement.replaceChildren();

    const data = await Promise.all([
        getPostById(selectedId),
        getCommentsById(selectedId)
    ]);

    postTitle.textContent = data[0].title;
    postBody.textContent = data[0].body;

    data[1].forEach(c => {
        const newLi = document.createElement(`li`);
        newLi.textContent = c.text;

        ulElement.appendChild(newLi);
    });
}

async function getAllPosts() {

    const url = `http://localhost:3030/jsonstore/blog/posts`;

    const req = await fetch(url);
    const data = await req.json();

    const selectElement = document.querySelector(`#posts`);
    selectElement.replaceChildren();

    Object.values(data).forEach(p => {
        const option = document.createElement(`option`);
        option.textContent = p.title;
        option.value = p.id;
        selectElement.appendChild(option);
    });
}

async function getPostById(postId) {

    const url = `http://localhost:3030/jsonstore/blog/posts/` + postId;

    const req = await fetch(url);
    const data = await req.json();

    return data;
}

async function getCommentsById(postId) {

    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const req = await fetch(url);

    const data = await req.json();

    const result = Object.values(data).filter(c => c.postId == postId);

    return result;

}
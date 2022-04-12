const tbody = document.querySelector(`tbody`);
document.getElementById(`loadBooks`).addEventListener(`click`, loadBooks);
const createForm = document.getElementById(`createForm`);
const editForm = document.getElementById(`editForm`);
createForm.addEventListener(`submit`, onCreate);

loadBooks();

async function loadBooks() {

    const books = await request(`http://localhost:3030/jsonstore/collections/books/`);

    tbody.replaceChildren();
    Object.entries(books).forEach(e => loadBook(e[1].author, e[1].title, e[0]));
}

function loadBook(author, title, id) {
    const tr = document.createElement(`tr`);

    tr.innerHTML = `<td>${title}</td>
    <td>${author}</td>
    <td>
        <button id="editBtn">Edit</button>
        <button id="deleteBtn">Delete</button>
    </td>`;

    tr.querySelector(`td #deleteBtn`).addEventListener(`click`, onDelete.bind(null, id));
    tr.querySelector(`td #editBtn`).addEventListener(`click`, onEdit.bind(null, id));

    tbody.appendChild(tr);
}

async function onCreate(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const author = formData.get(`author`).trim();
    const title = formData.get(`title`).trim();

    if (author == `` && title == ``) {
        alert(`Please fill all fileds!`);
        return;
    }

    const options = {
        method: `post`,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, title }),
    };

    await request(`http://localhost:3030/jsonstore/collections/books/`, options);
    ev.target.reset()
    loadBooks();

}

async function onDelete(id, ev) {

    request(`http://localhost:3030/jsonstore/collections/books/` + id, {
        method: `delete`,
        headers: {
            "Content-Type": "application/json"
        }
    });

    ev.target.parentNode.parentNode.remove();

}

async function onEdit(id, ev) {
    ev.preventDefault();
    createForm.style.display = `none`;
    editForm.style.display = `block`;

    const book = await request(`http://localhost:3030/jsonstore/collections/books/` + id);

    const title = document.querySelector(`#editForm [name="title"]`);
    const author = document.querySelector(`#editForm [name="author"]`);

    author.value = book.author;
    title.value = book.title;

    editForm.addEventListener(`submit`, onUpdate.bind(null, id));

}

async function onUpdate(id, ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const author = formData.get(`author`).trim();
    const title = formData.get(`title`).trim();

    if (author == `` && title == ``) {
        alert(`Please fill all fileds!`);
        return;
    }

    const options = {
        method: `put`,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, title }),
    };

    await request(`http://localhost:3030/jsonstore/collections/books/` + id, options);

    ev.target.reset()

    createForm.style.display = `block`;
    editForm.style.display = `none`;

    loadBooks();
}

async function request(url, options) {
    try {
        const req = await fetch(url, options);

        if (req.ok !== true) {
            const error = req.json();
            throw new Error(error.message);
        }

        const data = await req.json();

        return data

    } catch (err) {
        alert(err.message);
    }
}
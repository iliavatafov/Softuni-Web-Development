let userData = null;

window.addEventListener(`DOMContentLoaded`, () => {
    loadData();
    userData = JSON.parse(sessionStorage.getItem(`userData`));

    if (userData !== null) {
        document.getElementById(`guest`).style.display = `none`;
        document.querySelector(`#addForm .add`).disabled = false;
        document.querySelector(`nav .email span`).textContent = userData.email;
    } else {
        document.getElementById(`user`).style.display = `none`;
    }
    document.querySelector(`#logout`).addEventListener(`click`, onLogout);

    document.querySelector(`.load`).addEventListener(`click`, loadData);

    document.querySelector(`#addForm`).addEventListener(`submit`, onCreateSubmit);

    document.getElementById(`catches`).addEventListener(`click`, onCatchesClick);

});

async function onLogout() {

    const res = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': userData.token
        },
    });

    if (res.ok === true) {
        sessionStorage.clear();
        window.location = 'index.html';
    } else {
        alert(await res.json());
    }
}


async function onCatchesClick(ev) {

    if (ev.target.className == `delete`) {
        onDelete(ev.target);
    } else if (ev.target.className == `update`) {
        onEdit(ev.target);
    }
}

async function onEdit(button) {
    const id = button.getAttribute(`data-id`);

    const updatedData = {};

    button.parentNode.querySelectorAll(`input`).forEach(el => {
        updatedData[el.className] = el.value;
    });

    try {
        const res = await fetch(`http://localhost:3030/data/catches/` + id, {
            method: `put`,
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": userData.token,
            },
            body: JSON.stringify(updatedData)
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }
        loadData();
        alert(`You have successfully edited the record!`);
    } catch (err) {
        alert(err.message);
    }
}

async function onDelete(button) {
    const id = button.getAttribute(`data-id`);

    await deleteBook(id);
    button.parentNode.remove();
}

async function deleteBook(id) {

    await fetch(`http://localhost:3030/data/catches/` + id, {
        method: `delete`,
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": userData.token,
        }
    });
}

async function onCreateSubmit(ev) {
    ev.preventDefault();

    if (!userData) {
        window.location = `/login.html`;
        return;
    }

    const formData = new FormData(ev.target);

    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, {
        [k]: v
    }), {});

    try {

        if (Object.values(data).some(x => x == ``)) {
            throw new Error(`All fileds are required!`);
        }

        const res = await fetch(`http://localhost:3030/data/catches`, {
            method: `post`,
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": userData.token,
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        ev.target.reset();
        loadData();

    } catch (err) {
        alert(err.message);
    }
}

async function loadData() {
    const res = await fetch(`http://localhost:3030/data/catches/`);
    const data = await res.json();

    document.getElementById(`catches`).replaceChildren(...data.map(createPreview));
}

function createPreview(item) {
    const isOwner = (userData && item._ownerId === userData.id);

    const element = document.createElement(`div`);
    element.className = `catch`;

    element.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${item.angler}" ${!isOwner ? `disabled` : ``}>
    <label>Weight</label>
    <input type="text" class="weight" value="${item.weight}" ${!isOwner ? `disabled` : ``}>
    <label>Species</label>
    <input type="text" class="species" value="${item.species}" ${!isOwner ? `disabled` : ``}>
    <label>Location</label>
    <input type="text" class="location" value="${item.location}" ${!isOwner ? `disabled` : ``}>
    <label>Bait</label>
    <input type="text" class="bait" value="${item.bait}" ${!isOwner ? `disabled` : ``}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner ? `disabled` : ``}>
    <button class="update" data-id="${item._id}" ${!isOwner ? `disabled` : ``}>Update</button>
    <button class="delete" data-id="${item._id}" ${!isOwner ? `disabled` : ``}>Delete</button>`;

    return element;
}
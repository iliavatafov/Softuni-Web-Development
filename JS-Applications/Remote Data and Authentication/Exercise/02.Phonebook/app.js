function attachEvents() {
    document.getElementById(`btnLoad`).addEventListener(`click`, onLoad);
    document.getElementById(`btnCreate`).addEventListener(`click`, onCreate);
}

async function onCreate() {
    const personElement = document.getElementById(`person`);
    const phoneElement = document.getElementById(`phone`);

    if (personElement.value === `` || phoneElement.value === ``) {
        alert(`You should fill all mandatory fields!`);
        return;
    }

    const newData = {
        person: personElement.value,
        phone: phoneElement.value,
    }

    const options = {
        method: `post`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newData),
    };

    try {
        const req = await fetch(`http://localhost:3030/jsonstore/phonebook`, options);

        if (req.status !== 200) {
            const error = await req.json();
            throw new Error(error.message);
        }

        personElement.value = ``;
        phoneElement.value = ``;

        const data = await req.json();

        onLoad();

    } catch (err) {
        alert(err.message);
    }


}

async function onLoad() {

    const phoneBookUl = document.getElementById(`phonebook`);
    phoneBookUl.replaceChildren();

    const data = await getData();

    data.forEach(e => {
        const li = document.createElement(`li`);
        li.textContent = `${e.person}: ${e.phone}`;
        const deleteBtn = document.createElement(`button`);
        deleteBtn.textContent = `Delete`;

        deleteBtn.addEventListener(`click`, () => {
            onDelete(e._id, li)
        });

        phoneBookUl.appendChild(li);
        li.appendChild(deleteBtn);
    });

}

async function onDelete(id, li) {

    try {
        const req = await fetch(`http://localhost:3030/jsonstore/phonebook/` + id, {
            method: `delete`,
        });

        if (req.status !== 200) {
            const error = await req.json();
            throw new Error(error.message);
        }

        console.log(li)

        li.remove();

        return await req.json();
    } catch (err) {
        alert(err.message);
    }
}

//create new contact

async function getData() {

    const url = `http://localhost:3030/jsonstore/phonebook/`;

    try {
        const req = await fetch(url);

        if (req.status !== 200) {
            const error = await req.json();
            throw new Error(error.message);
        }

        const data = await req.json();

        return Object.values(data);

    } catch (err) {
        alert(err.message);
    }
}
attachEvents();
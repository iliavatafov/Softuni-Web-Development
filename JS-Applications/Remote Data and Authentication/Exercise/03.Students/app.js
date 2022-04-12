window.addEventListener(`load`, () => {
    displayData();

    const form = document.querySelector(`form`);
    form.addEventListener(`submit`, onCreate)


});

async function onCreate(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    let firstName = formData.get(`firstName`).trim();
    let lastName = formData.get(`lastName`).trim();
    let facultyNumber = formData.get(`facultyNumber`).trim();
    let grade = formData.get(`grade`).trim();

    if (firstName != `` && lastName != `` && facultyNumber !=
        `` && !isNaN(Number(facultyNumber)) && grade != `` && !isNaN(grade)) {

        const url = `http://localhost:3030/jsonstore/collections/students`;

        const options = {
            method: `post`,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                facultyNumber: facultyNumber,
                grade: grade
            })
        }

        try {
            const req = await fetch(url, options);

            if (req.status !== 200) {
                const error = await req.json();
                throw new Error(error.message);
            }

            const data = await req.json();

            form.querySelectorAll(`input`).forEach(i => i.value = ``)

            displayData();

        } catch (err) {
            alert(err.message);
        }
    } else {
        if (isNaN(grade)) {
            alert(`Grade should be a number!`);
        } else if (isNaN(Number(facultyNumber))) {
            alert(`Faculty Number must be a number!`);
        } else {
            alert(`All fields must be fieled!`);
        }

    }
}

async function displayData() {

    const tableBodyElement = document.querySelector(`tbody`);
    tableBodyElement.replaceChildren();

    const data = await getData();

    data.forEach(e => {
        const tr = document.createElement(`tr`);

        const firstNameElement = document.createElement(`th`);
        firstNameElement.textContent = e.firstName;

        const lastNameElement = document.createElement(`th`);
        lastNameElement.textContent = e.lastName;

        const facultyNumberElement = document.createElement(`th`);
        facultyNumberElement.textContent = e.facultyNumber;

        const gradeElement = document.createElement(`th`);
        gradeElement.textContent = e.grade;

        tr.appendChild(firstNameElement);
        tr.appendChild(lastNameElement);
        tr.appendChild(facultyNumberElement);
        tr.appendChild(gradeElement);

        tableBodyElement.appendChild(tr)
    });
}

async function getData() {
    const url = `http://localhost:3030/jsonstore/collections/students`;

    try {

        const req = await fetch(url);

        if (req.status !== 200) {
            const error = req.json();
            throw new Error(error.message);
        }

        const data = await req.json();

        return Object.values(data);

    } catch (err) {
        alert(err.message);
    }
}
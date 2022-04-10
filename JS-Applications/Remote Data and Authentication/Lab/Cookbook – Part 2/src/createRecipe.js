window.addEventListener('load', async() => {
    const form = document.querySelector(`form`);
    const token = localStorage.getItem('token');
    if (token == null) {
        window.location = 'index.html';
        return;
    }
    form.addEventListener(`submit`, onCreate);
});

async function onCreate(event) {
    const url = `http://localhost:3030/data/recipes`;

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get(`name`).trim();
    const img = formData.get(`img`).trim();
    const ingredients = formData.get(`ingredients`).trim().split(`\n`);
    const steps = formData.get(`steps`).trim().split(`\n`);

    try {
        const res = await fetch(url, {
            method: `post`,
            headers: {
                "Content-Type": `application/json`,
                "X-Authorization": localStorage.getItem(`token`),
            },
            body: JSON.stringify({ name, img, ingredients, steps })
        });

        if (res.ok === false) {
            const error = await res.json();
            throw new Error(error.message)
        }

        await res.json();

        window.location = `/index.html`;

    } catch (err) {
        alert(err.message)
    }
}
window.addEventListener(`DOMContentLoaded`, () => {
    const form = document.querySelector(`#register-view #register`);
    form.addEventListener(`submit`, onRegister);
});

async function onRegister(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get(`email`).trim();
    const password = formData.get(`password`).trim();
    const rePass = formData.get(`rePass`).trim();

    try {
        const res = await fetch(`http://localhost:3030/users/register/`, {
            method: `post`,
            headers: {
                "Content-Type": `application/json`
            },
            body: JSON.stringify({ email, password, rePass })
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message)
        }

        const data = await res.json();

        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken,
        };

        sessionStorage.setItem(`userData`, JSON.stringify(userData));

        window.location = `./index.html`;

    } catch (err) {
        alert(`Ivalid data!`);
    }
}
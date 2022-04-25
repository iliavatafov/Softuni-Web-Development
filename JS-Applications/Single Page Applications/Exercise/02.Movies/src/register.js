import { showView } from "./dom.js";
import { updateUserNav } from "./app.js";
import { showHome } from "./home.js";

const section = document.getElementById(`form-sign-up`);
section.remove();

const form = section.querySelector(`form`);

form.addEventListener(`submit`, onRegister);
section.remove();

export function showRegister() {
    showView(section);
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(form);

    console.log(formData.get(`repass`))

    const email = formData.get(`email`).trim();
    const password = formData.get(`password`).trim();
    const repass = formData.get(`repeatPassword`).trim();

    if (password != repass) {
        alert(`Password don\`t match!`);
        return;
    }

    try {
        const res = await fetch(`http://localhost:3030/users/register`, {
            method: `post`,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();

        sessionStorage.setItem(`userData`, JSON.stringify({
            email: data.email,
            id: data._id,
            token: data.accessToken,
        }));
        form.reset();

        updateUserNav();

        showHome();
    } catch (err) {
        alert(err.message);
    }
}
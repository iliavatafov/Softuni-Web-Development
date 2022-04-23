import { showSection, e } from "./dom.js";
import { showHomePage } from "./home.js";
import { updateUserNav } from "./app.js";

const section = document.getElementById(`loginSection`);
section.remove();

const form = section.querySelector(`form`);
form.addEventListener(`submit`, onSubmit);

export function showLogInPage() {
    showSection(section);
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(form);

    const email = formData.get(`email`).trim();
    const password = formData.get(`password`).trim();

    try {
        const res = await fetch(`http://localhost:3030/users/login`, {
            method: `post`,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            const error = res.json();
            throw new Error(error.message);
        }

        const data = await res.json();

        const userData = {
            userName: data.username,
            id: data._id,
            token: data.accessToken
        };

        sessionStorage.setItem(`userData`, JSON.stringify(userData));

        updateUserNav();
        showHomePage();

    } catch (err) {
        alert(err.message);
    }
}
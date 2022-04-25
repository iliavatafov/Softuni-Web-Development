import { showView } from "./dom.js";
import { showHome } from "./home.js";

const section = document.getElementById(`add-movie`);
section.remove();

const form = section.querySelector(`form`);
form.addEventListener(`submit`, onCreate)

export function showCreate() {
    showView(section);
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get(`title`).trim();
    const description = formData.get(`description`).trim();
    const img = formData.get(`imageUrl`).trim();

    const userData = JSON.parse(sessionStorage.getItem(`userData`));
    const movieData = JSON.parse(sessionStorage.getItem(`movieData`));

    const _movieId = movieData.id;

    try {
        let res = ``;
        if (_movieId) {
            res = await fetch(`http://localhost:3030/data/movies/` + _movieId, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": userData.token,
                },
                body: JSON.stringify({ title, description, img })
            });
        } else {
            res = await fetch(`http://localhost:3030/data/movies`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": userData.token,
                },
                body: JSON.stringify({ title, description, img })
            });
        }

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        form.reset();

        showHome();
    } catch (err) {
        alert(err.message)
    }
}
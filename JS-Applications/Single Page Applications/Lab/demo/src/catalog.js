import { updateUserNav } from "./app.js";
import { showSection, e } from "./dom.js";
import { showLogInPage } from "./login.js";

const section = document.getElementById(`catalogSection`);
section.remove();

const ul = section.querySelector(`ul`);

export function showCatalogPage() {
    showSection(section);
    loadMovies();
}

async function loadMovies() {
    ul.replaceChildren(e(`p`, {}, `Loading...`));

    const options = { method: `get`, headers: {} };
    const userData = JSON.parse(sessionStorage.getItem(`userData`));

    if (userData != null) {
        options.headers[`X-Authorization`] = userData.token;
    }

    const res = await fetch(`http://localhost:3030/data/movies`, options);

    if (res.status == 404 || res.status == 403) {
        sessionStorage.removeItem(`userData`);
        updateUserNav();
        showLogInPage();
    }
    const movies = await res.json();

    ul.replaceChildren(...movies.map(createMovieCard));
}

function createMovieCard(movie) {
    return e(`li`, {}, movie.title)
}
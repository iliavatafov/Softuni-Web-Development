import { showCreate } from "./create.js";
import { showView, e } from "./dom.js";
import { showHome } from "./home.js";

const section = document.getElementById(`movie-details`);
section.remove();

export function showDetails(movieId) {
    showView(section);
    getMovie(movieId);
}

async function getMovie(id) {
    section.replaceChildren(e(`p`, {}, `Loading...`));

    const requests = [
        fetch(`http://localhost:3030/data/movies/` + id),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`),
    ];

    const userData = JSON.parse(sessionStorage.getItem(`userData`));

    if (userData != null) {
        requests.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`));
    }

    const [movieRes, likeRes, hasLikeRes] = await Promise.all(requests);

    const [movieData, likes, hasLiked] = await Promise.all([
        movieRes.json(),
        likeRes.json(),
        hasLikeRes && hasLikeRes.json()
    ]);

    section.replaceChildren(createDetails(movieData, likes, hasLiked));
}

function createDetails(movie, likes, hasLiked) {

    const controls = e(`div`, { className: `col-md-4 text-center` },
        e(`h3`, { className: `my-3` }, `Movie Description`),
        e(`p`, {}, movie.description)
    );

    const userData = JSON.parse(sessionStorage.getItem(`userData`));

    if (userData != null) {
        if (userData.id == movie._ownerId) {
            controls.appendChild(e(`a`, { className: `btn btn-danger`, href: `#`, onClick: onDelete }, `Delete`));
            controls.appendChild(e(`a`, { className: `btn btn-warning`, href: `#`, onClick: onEdit }, `Edit`));
        } else {
            if (hasLiked.length > 0) {
                controls.appendChild(e(`a`, { className: `btn btn-warning`, href: `#`, onClick: onUnlike }, `Unlike`));
            } else {
                controls.appendChild(e(`a`, { className: `btn btn-warning`, href: `#`, onClick: onLike }, `Like`));
            }
        }
    }

    controls.appendChild(e(`span`, { className: `enrolled-span` }, `Liked ${likes}`));

    const element = e(`div`, { className: `container` },
        e(`div`, { className: `row bg-light text-dark` },
            e(`h1`, {}, `Movie title: ${movie.title}`),
            e(`div`, { className: `col-md-8` },
                e(`img`, { className: `img-thumbnail`, src: movie.img, alt: `Movie` })
            ),
            controls
        )
    );

    return element

    async function onLike() {
        await fetch(`http://localhost:3030/data/likes`, {
            method: `post`,
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": userData.token,
            },
            body: JSON.stringify({ movieId: movie._id })
        });

        showDetails(movie._id);
    }

    async function onUnlike() {
        const likeId = hasLiked[0]._id;

        await fetch(`http://localhost:3030/data/likes/` + likeId, {
            method: `delete`,
            headers: {
                "X-Authorization": userData.token,
            }
        });

        showDetails(movie._id);
    }

    async function onDelete() {
        await fetch(`http://localhost:3030/data/movies/` + movie._id, {
            method: `delete`,
            headers: {
                "X-Authorization": userData.token,
            }
        });

        showHome();
    }

    async function onEdit(event) {
        event.preventDefault();

        const movieDetailsSection = event.target.parentNode.parentNode;
        const title = movieDetailsSection.querySelector(`h1`).textContent.split(`: `).pop();
        const description = movieDetailsSection.querySelector(`div p`).textContent;
        const img = movieDetailsSection.querySelector(`div img`).src;

        showCreate();

        const section = document.getElementById(`add-movie`);
        const form = section.querySelector(`form`);

        form.querySelector(`div #title`).value = title;
        form.querySelector(`div textarea`).value = description;
        form.querySelector(`div #imageUrl`).value = img;

        let _movieId = ``;

        const res = await fetch(`http://localhost:3030/data/movies`);
        const data = await res.json();

        [...data].forEach(x => {
            if (x.title == title) {
                _movieId = x._id;
            }
        })

        sessionStorage.setItem(`movieData`, JSON.stringify({ id: _movieId }));
    }

}
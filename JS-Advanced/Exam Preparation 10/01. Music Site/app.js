window.addEventListener('load', solve);

function solve() {

    let likes = 0;

    const allHitsContainer = document.querySelector('.all-hits-container');
    const saveHitsContainer = document.querySelector('.saved-container');

    document.getElementById('add-btn').addEventListener('click', onSubmit);

    function onSubmit(ev) {
        ev.preventDefault();

        const genre = document.getElementById('genre');
        const name = document.getElementById('name');
        const author = document.getElementById('author');
        const date = document.getElementById('date');

        if (genre.value && name.value && author.value && date.value) {

            const div = e('div', { class: 'hits-info' });
            e('img', { src: './static/img/img.png' }, null, div);
            e('h2', {}, `Genre: ${genre.value}`, div);
            e('h2', {}, `Name: ${name.value}`, div);
            e('h2', {}, `Author: ${author.value}`, div);
            e('h3', {}, `Date: ${date.value}`, div);
            const saveBtn = e('button', { class: 'save-btn' }, 'Save song', div);
            const likeBtn = e('button', { class: 'like-btn' }, 'Like song', div);
            const deleteBtn = e('button', { class: 'delete-btn' }, 'Delete', div);

            allHitsContainer.appendChild(div);

            const data = {
                genre: genre.value,
                name: name.value,
                author: author.value,
                date: date.value
            }

            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';

            likeBtn.addEventListener('click', onLike);
            saveBtn.addEventListener('click', onSave.bind(null, data, div, ev));
            deleteBtn.addEventListener('click', deleteSavedSong.bind(null, div, ev));

        }

    }

    function onSave(data, div, ev) {
        ev.preventDefault();

        const newDiv = e('div', { class: 'hits-info' });
        e('img', { src: './static/img/img.png' }, null, newDiv);
        e('h2', {}, `Genre: ${data.genre}`, newDiv);
        e('h2', {}, `Name: ${data.name}`, newDiv);
        e('h2', {}, `Author: ${data.author}`, newDiv);
        e('h3', {}, `Date: ${data.date}`, newDiv);
        const deleteBtn = e('button', { class: 'delete-btn' }, 'Delete', newDiv);

        deleteBtn.addEventListener('click', deleteSavedSong.bind(null, newDiv, ev))

        saveHitsContainer.appendChild(newDiv);
        div.remove();
    }

    function deleteSavedSong(div, ev) {
        ev.preventDefault();

        if (likes > 0) {
            likes--;
        }

        document.querySelector('.likes p').textContent = `Total Likes: ${likes}`;
        div.remove();
    }

    function onLike(ev) {
        ev.preventDefault();

        likes++;

        document.querySelector('.likes p').textContent = `Total Likes: ${likes}`;
        ev.target.disabled = true;
    }

    function e(type, attributes, text, parentNode) {
        const element = document.createElement(type);

        for (let [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value)
        }

        if (text) {
            element.textContent = text;
        }

        if (parentNode) {
            parentNode.appendChild(element);
        }

        return element;
    }
}
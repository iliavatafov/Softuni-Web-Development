window.addEventListener('load', solve);

function solve() {

    const inputElements = document.querySelectorAll(`input`);

    const genre = inputElements[0];
    const name = inputElements[1];
    const author = inputElements[2];
    const date = inputElements[3];
    const addBtn = document.querySelector(`#add-btn`);

    const hitsConteiner = document.querySelector(`.all-hits-container`);
    const savedContainer = document.querySelector(`.saved-container`);

    const likesCountElement = document.querySelector(`.likes p`);

    let likeCount = 0;

    addBtn.addEventListener(`click`, addNewSong);

    function addNewSong(ev) {

        ev.preventDefault();

        if (genre.value !== `` && name.value !== `` && author.value !== `` && date.value !== ``) {

            const div = e(`div`);
            div.setAttribute(`class`, `hits-info`);

            const img = e(`img`, undefined, div);
            img.setAttribute(`src`, `./static/img/img.png`);
            e(`h2`, `Genre: ${genre.value}`, div);
            e(`h2`, `Name: ${name.value}`, div);
            e(`h2`, `Author: ${author.value}`, div);
            e(`h3`, `Date: ${date.value}`, div);

            const saveBtn = e(`button`, `Save song`, div);
            saveBtn.setAttribute(`class`, `save-btn`);

            const likeBtn = e(`button`, `Like song`, div);
            likeBtn.setAttribute(`class`, `like-btn`);

            const deleteBtn = e(`button`, `Delete`, div);
            deleteBtn.setAttribute(`class`, `delete-btn`);

            hitsConteiner.appendChild(div);

            Array.from(inputElements).forEach(el => el.value = ``);

            deleteBtn.addEventListener(`click`, () => {

                div.remove();

                if (likeCount > 0) {
                    likeCount--;
                    likesCountElement.textContent = `Total Likes: ${likeCount}`;
                }
            });

            likeBtn.addEventListener(`click`, (ev) => {
                likeCount++;
                likesCountElement.textContent = `Total Likes: ${likeCount}`;

                let likeSection = document.querySelector(".likes");

                console.log(likeSection);
                ev.target.disabled = true;
            });

            saveBtn.addEventListener(`click`, (ev) => {

                ev.preventDefault()

                const hitsInfoDiv = e(`div`);
                hitsInfoDiv.setAttribute(`class`, `hits-info`);
                let elements = Array.from(div.children);
                hitsInfoDiv.appendChild(elements[0]);
                hitsInfoDiv.appendChild(elements[1]);
                hitsInfoDiv.appendChild(elements[2]);
                hitsInfoDiv.appendChild(elements[3]);
                hitsInfoDiv.appendChild(elements[4]);
                const delBtn = e(`button`, `Delete`, hitsInfoDiv);
                delBtn.setAttribute(`class`, `delete-btn`);
                savedContainer.appendChild(hitsInfoDiv);

                div.remove();

                delBtn.addEventListener(`click`, (ev) => {

                    hitsInfoDiv.remove();

                    if (likeCount > 0) {
                        likeCount--;
                        likesCountElement.textContent = `Total Likes: ${likeCount}`;
                    }

                });
            });
        }
    }

    function e(elementType, innerText, parentElement) {
        const element = document.createElement(elementType);
        element.textContent = innerText;

        if (parentElement !== undefined) {
            parentElement.appendChild(element);
        }

        return element;
    }

}
window.addEventListener('load', solution)

async function solution() {

    const titles = await getTitle();

    titles.forEach(title => {
        createArticle(title);
    })

}

async function getTitle() {

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    try {
        const request = await fetch(url);

        if (request.status !== 200) throw new Error(`${request.status} (${request.statusText})`);

        const data = await request.json();

        return data;

    } catch (error) {
        document.getElementById(`main`).textContent = error;
    }
}

async function createArticle(title) {

    const request = fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${title._id}`);

    const data = await (await request).json()

    const divElement = document.createElement(`div`);
    divElement.classList = `accordion`;

    divElement.innerHTML = `<div class="head">
    <span>${title.title}</span>
    <button class="button" id="${title._id}">More</button>
    <button class="button" id="${title._id}" style="display: none">Less</button>
    </div>
    <div class="extra">
    <p>${data.content}</p>
    </div>`

    divElement.querySelector(`.button`).addEventListener(`click`, showMore);
    divElement.querySelectorAll(`.button`)[1].addEventListener(`click`, showLess)


    document.querySelector(`#main`).appendChild(divElement);
}

function showMore(ev) {

    const divClassExtra = ev.target.parentNode.parentNode.querySelector(`.extra`);
    const p = divClassExtra.children[0]
    const lessBtn = ev.target.parentNode.parentNode.querySelectorAll(`.button`)[1];

    divClassExtra.style.display = `block`;
    p.style.display = `block`;
    ev.target.style.display = `none`
    lessBtn.style.display = `block`;
}

function showLess(ev) {

    const divClassExtra = ev.target.parentNode.parentNode.querySelector(`.extra`);
    const p = divClassExtra.children[0]
    const moreBtn = ev.target.parentNode.parentNode.querySelector(`.button`);

    divClassExtra.style.display = `none`;
    p.style.display = `none`;
    ev.target.style.display = `none`
    moreBtn.style.display = `block`;
}
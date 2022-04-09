window.addEventListener(`DOMContentLoaded`, start)

async function start() {

    const main = document.querySelector(`main`);

    const recipes = await getRecipies();
    main.replaceChildren();

    recipes.map(createPreview).forEach(e => main.appendChild(e));
}

function createPreview(recipe) {
    const element = document.createElement(`article`);
    element.className = `preview`

    element.innerHTML = `<div class="title">
    <h2>${recipe.name}</h2>
</div>
<div class="small">
    <img src="${recipe.img}">
</div>`

    element.addEventListener(`click`, () => {
        element.querySelector(`h2`).textContent = `Lodaing...`
        togglePreview(recipe._id, element);

    });

    return element
}

async function togglePreview(id, preview) {
    const recipe = await getRecipiesById(id);

    const element = document.createElement(`article`);
    element.innerHTML = `<h2>${recipe.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="${recipe.img}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
            ${recipe.ingredients.map(i => `<li>${i}</li>`).join(``)}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        <p>${recipe.steps.map(s => `<p>${s}</p>`).join(``)}</p>
    </div>`
    element.querySelector(`h2`).addEventListener(`click`, () => {
        preview.querySelector(`h2`).textContent = `${recipe.name}`;
        element.replaceWith(preview)
    });
    preview.replaceWith(element);
}

async function getRecipies() {
    const url = `http://localhost:3030/jsonstore/cookbook/recipes/`;

    try {
        const res = await fetch(url);

        if (res.status !== 200) {
            throw new Error(`Error ${res.statusText}`);
        }
        const data = await res.json();

        return Object.values(data);
    } catch (error) {
        console.log(error)
    }

}

async function getRecipiesById(id) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/` + id;

    try {
        const res = await fetch(url);

        if (res.status !== 200) {
            throw new Error(`Error ${res.statusText}`);
        }
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error)
    }

}
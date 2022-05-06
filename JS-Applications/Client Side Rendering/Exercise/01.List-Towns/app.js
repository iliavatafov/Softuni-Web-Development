import { html, render } from './node_modules/lit-html/lit-html.js';


const root = document.getElementById(`root`);

document.querySelector(`form`).addEventListener(`submit`, (ev) => {
    ev.preventDefault();

    const towns = document.querySelector(`input`).value.split(',').map(t => t.trim());

    render(towns.map(t => townsTamplate(t)), root)
});

const townsTamplate = (town) => html `
<ul>
    ${html`<li>${town}</li>`}
</ul>
`
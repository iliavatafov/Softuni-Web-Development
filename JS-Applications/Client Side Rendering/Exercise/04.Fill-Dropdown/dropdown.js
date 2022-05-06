import { html, render } from './node_modules/lit-html/lit-html.js';

const div = document.querySelector(`div`);

const form = document.querySelector(`form`);
form.addEventListener(`submit`, addData);

const template = (items) => html `
<select id="menu">${items.map(i => html`<option value=${i._id}>${i.text}</option>`)}</select>
`
const url = `http://localhost:3030/jsonstore/advanced/dropdown`;

getData();

async function getData() {
    const res = await fetch(url);
    const data = await res.json();

    update(data);
}

function update(data) {
    render(template(Object.values(data)), div)
}

async function addData(ev) {
    ev.preventDefault();

    const input = document.getElementById(`itemText`).value; 

    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: input}) 
    });

    if(res.ok) {
        getData();
        form.reset();
    }    
}
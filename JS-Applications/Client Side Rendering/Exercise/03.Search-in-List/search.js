import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns as townsNames } from './towns.js';

const towns = townsNames.map(t => ({ name: t, match: false }));

const townsTemplate = (towns) => html `
   <ul>
   ${towns.map(t => html`<li class=${t.match ? 'active' : ''}>${t.name}</li>`)}
   </ul>`;

const root = document.getElementById(`towns`);

update();

const input = document.getElementById(`searchText`);
const output = document.getElementById(`result`);
document.querySelector(`button`).addEventListener(`click`, onSerch);

function update() {
   render(townsTemplate(towns), root)
}

function onSerch(event) {
   event.preventDefault();

      const match = input.value.trim().toLocaleLowerCase();
      let matches = 0;

      towns.forEach(t => {
         if(match && t.name.toLocaleLowerCase().includes(match)) {
            matches++;
            t.match = true;
         } else {
            t.match = false;
         }
      });

      update();

      input.value = '';
      
      output.textContent = `${matches} matches found`;
}
import { getAllGames } from '../api/data.js';
import { html } from '../lib.js'


const catalogueTemplate = (allGames, catalogCard) => html `
<section id="catalog-page">
    <h1>All Games</h1>
    ${allGames.length > 0 ?
    allGames.map(catalogCard) :
    html`<h3 class="no-articles">No articles yet</h3>`}    
</section>`;


const catalogCard = (data) => html `
<div class="allGames">
        <div class="allGames-info">
            <img src="${data.imageUrl}">
            <h6>${data.category}</h6>
            <h2>${data.title}</h2>
            <a href="/details/${data._id}" class="details-button">Details</a>
        </div>
    </div>`;


    export async function catalogueView(ctx) {

        const allGames = await getAllGames();

        ctx.render(catalogueTemplate(allGames, catalogCard));
    }
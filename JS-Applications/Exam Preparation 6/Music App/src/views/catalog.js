import { getAllAlbums } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const catalogTemplate = (listOfAllAlbums, catalogCard, userData) => html `
<section id="catalogPage">
            <h1>All Albums</h1>
            ${listOfAllAlbums.length > 0 ?
            listOfAllAlbums.map(el => catalogCard(el, userData)) :
            html`<p>No Albums in Catalog!</p>`}          
        </section>`

        const catalogCard = (data, userData) => html`
        <div class="card-box">
                <img src="${data.imgUrl}">
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${data.name}</p>
                        <p class="artist">Artist: ${data.artist}</p>
                        <p class="genre">Genre: ${data.genre}</p>
                        <p class="price">Price: $${data.price}</p>
                        <p class="date">Release Date: ${data.releaseDate}</p>
                    </div>
                    ${userData ? html`<div class="btn-group">
                        <a href="/details/${data._id}" id="details">Details</a>
                    </div>` : null}
                </div>
            </div>`

export async function catalogView(ctx) {

    const userData = getUserData();

    const listOfAllAlbums = await getAllAlbums();

    ctx.render(catalogTemplate(listOfAllAlbums, catalogCard, userData));
}
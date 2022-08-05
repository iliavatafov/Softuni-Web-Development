import { getAllList } from '../api/data.js';
import { html } from '../lib.js'

const catalogTemplate = (allListings, catalogCard) => html `
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

        <!-- Display all records -->
        ${allListings.length > 0 ?
        allListings.map(catalogCard):
        html`<p class="no-cars">No cars in database.</p>`}
        <!-- Display if there are no records -->
        
    </div>
</section>`

    const catalogCard = (data) => html`
    <div class="listing">
            <div class="preview">
                <img src="${data.imageUrl}">
            </div>
            <h2>${data.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${data.year}</h3>
                    <h3>Price: ${data.price} $</h3>
                </div>
                <div class="data-buttons">
                    <a href="/details/${data._id}" class="button-carDetails">Details</a>
                </div>
            </div>
        </div>`

export async function catalogView(ctx) {

    const allListings = await getAllList();

    console.log(allListings)

    ctx.render(catalogTemplate(allListings, catalogCard));
}
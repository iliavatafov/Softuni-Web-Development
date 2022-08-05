import { deleteCar } from '../api/data.js';
import { getDetails } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (carData, isOwner, onDelete) => html `
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${carData.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${carData.brand}</li>
            <li><span>Model:</span>${carData.model}</li>
            <li><span>Year:</span>${carData.year}</li>
            <li><span>Price:</span>${carData.price}$</li>
        </ul>

        <p class="description-para">${carData.description}</p>

        ${isOwner ?
        html`<div class="listings-buttons">
            <a href="/edit/${carData._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
        </div>` : null}
    </div>
</section>`

export async function detailsView(ctx) {

    const carData = await getDetails(ctx.params.id);

    const userData = getUserData();

    const isOwner = userData ? userData.id == carData._ownerId : false;

    ctx.render(detailsTemplate(carData, isOwner, onDelete));

    async function onDelete() {
        if(confirm('Are you sure!')) {
            await deleteCar(ctx.params.id);
        }
        ctx.page.redirect('/catalog');
    }
}
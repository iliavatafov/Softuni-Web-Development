import { getAllList } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const myListingTemplate = (myListings, cardList) => html `
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        <!-- Display all records -->
        ${myListings.length > 0 ?
        myListings.map(cardList) :
        html`<p class="no-cars"> You haven't listed any cars yet.</p>`
        }
        <!-- Display if there are no records -->
    </div>
</section>`

        const cardList = (data) => html`
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

export async function myListingView(ctx) {

    const userData = getUserData();

    const allListings = await getAllList();

    const myListings = allListings.filter(el => el._ownerId == userData.id);

    ctx.render(myListingTemplate(myListings, cardList));
}
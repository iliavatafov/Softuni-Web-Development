import { getAllPets } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (dashboradCard, allPets) => html `
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${allPets.length > 0 ?
        allPets.map(dashboradCard) :
        html`<div>
            <p class="no-pets">No pets in dashboard</p>
        </div>`}
        <!--If there is no pets in dashboard-->
        
    </div>
</section>`;

const dashboradCard = (data) => html`
<div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="${data.image}">
            </article>
            <h2 class="name">${data.name}</h2>
            <h3 class="breed">${data.breed}</h3>
            <div class="action">
                <a class="btn" href="/details/${data._id}">Details</a>
            </div>
        </div>`

export async function dashboardPage(ctx) {

    const allPets = await getAllPets();

    ctx.render(dashboardTemplate(dashboradCard, allPets));
}
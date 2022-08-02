import { getTotalDonations, deletePet, donate, getDonations, getPet } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (petData, isOwner, onDelete, onDonate, isUserDonate, totalDonations, userData) => html `
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${petData.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${petData.name}</h1>
                <h3>Breed: ${petData.breed}</h3>
                <h4>Age: ${petData.age}</h4>
                <h4>Weight: ${petData.weight}</h4>
                <h4 class="donation">Donation: ${totalDonations * 100}$</h4>
            </div>
            ${isOwner ?
            html`<div class="actionBtn">
                <a href="/edit/${petData._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>` : null}
            ${!isOwner && userData && isUserDonate == 0 ?
            html`<div class="actionBtn">
                <a @click=${onDonate} href="/details/${petData._id}" class="donate">Donate</a>
            </div>` : null}
            
        </div>
    </div>
</section>`

export async function detailsPage(ctx) {

    const userData = getUserData();
    const petData = await getPet(ctx.params.id);
    
    const isOwner = userData.id == petData._ownerId

    const isUserDonate = await getDonations(ctx.params.id, userData.id);
    const totalDonations = await getTotalDonations(ctx.params.id);

    ctx.render(detailsTemplate(petData, isOwner, onDelete, onDonate, isUserDonate, totalDonations, userData));

    async function onDelete() {
        
        if(window.confirm("Are you sure?")) {
            deletePet(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {

        await donate({petId: ctx.params.id});
    }
}
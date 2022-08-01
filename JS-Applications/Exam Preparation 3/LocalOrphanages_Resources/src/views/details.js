import { del, get, post } from '../api/api.js'
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (postData, isOwner, userData, onDelete, onDonate, isUserDonated, totalDonations) => html `
        <section id="details-page">
            <h1 class="title">Post Details</h1>
            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${postData.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${postData.title}</h2>
                        <p class="post-description">Description: ${postData.description}</p>
                        <p class="post-address">Address: ${postData.address}</p>
                        <p class="post-number">Phone number: ${postData.phone}</p>
                        <p class="donate-Item">Donate Materials: ${totalDonations}</p>
                        <div class="btns">
                            ${isOwner ? 
                            html`<a href="/edit/${postData._id}" class="edit-btn btn">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>` : null}
                            ${!isOwner && userData && isUserDonated == 0 ?
                            html`<a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>` : null}
                        </div>

                    </div>
                </div>
            </div>
        </section>`

export async function detailsPage(ctx) {

    const postId = ctx.params.id;
    const postData = await get('/data/posts/' + postId);

    const userData = getUserData();

    let isOwner = false

    if(userData && postData._ownerId == userData.id) {
        isOwner = true;
    }

    const isUserDonated = await get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userData.id}%22&count`);

    let totalDonations = await get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);

    ctx.render(detailsTemplate(postData, isOwner, userData, onDelete, onDonate, isUserDonated, totalDonations));

    async function onDelete() {
        
        if(window.confirm("Are you sure?")) {
            await del('/data/posts/' + postId);
            ctx.page.redirect('/');
        }
    }

    async function onDonate(event) {
        event.preventDefault();

        await post('/data/donations', {postId});
        totalDonations = await get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
        ctx.page.redirect(`/details/${postId}`);
    }
}
import { deleteArticle, getSingleAlbum } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (albumData, onDelete, isOwner) => html `
<section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src="${albumData.imgUrl}">
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${albumData.name}</h1>
                        <h3>Artist: ${albumData.artist}</h3>
                        <h4>Genre: ${albumData.genre}</h4>
                        <h4>Price: $${albumData.price}</h4>
                        <h4>Date: ${albumData.releaseDate}</h4>
                        <p>Description: ${albumData.description}</p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    ${isOwner ?
                    html`<div class="actionBtn">
                        <a href="/edit/${albumData._id}" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                    </div>` : null}
                </div>
            </div>
        </section>`

export async function detailsView(ctx) {

    const albumId = ctx.params.id;

    const albumData = await getSingleAlbum(albumId);

    const userData = getUserData();

    const isOwner = userData ? userData.id == albumData._ownerId : false;

    ctx.render(detailsTemplate(albumData, onDelete, isOwner));

    async function onDelete() {
        if(window.confirm('Are you sure? This resource will be deleted permanently!')) {
            await deleteArticle(albumId);
            ctx.page.redirect('/catalog');
        }        
    }
}
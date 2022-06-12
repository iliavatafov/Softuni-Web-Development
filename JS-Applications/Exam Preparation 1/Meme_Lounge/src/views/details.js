import { getMemeById, deleteMeme } from '../api/data.js';
import { getUserData } from '../util.js';
import { html } from '../lib.js'

const memeDetailsTemplate = (meme, isOwner, onDelete, memeId) => html `
        <section id="meme-details">
            <h1>Meme Title: ${meme.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="${meme.imageUrl}">
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${meme.description}</p>
                    ${isOwner ? 
                    html`<a class="button warning" href="/edit/${memeId}">Edit</a>
                    <button @click="${onDelete}" class="button danger">Delete</button>`
                    : null}
                </div>
            </div>
        </section>`;

export async function memeDetailsPage(ctx) {
    const memeId = ctx.params.id;

    const userData = getUserData();

    const meme = await getMemeById(memeId);

    const isOwner = userData && userData.id == meme._ownerId

    ctx.render(memeDetailsTemplate(meme, isOwner, onDelete, memeId));

    async function onDelete() {
        await deleteMeme(memeId);
        ctx.page.redirect('/memes');
    }
}
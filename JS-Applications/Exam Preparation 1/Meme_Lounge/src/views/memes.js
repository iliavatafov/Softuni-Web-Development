import { getAllMemes } from '../api/data.js';
import { html } from '../lib.js'


const mimesTemplate = (isMemes, memes, mimeTemplate) => html `
    <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${isMemes ? memes.map(mimeTemplate) :
                html`<p class="no-memes">No memes in database.</p>`}                
            </div>
        </section>`

const mimeTemplate = (meme) => html `
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${meme.title}</p>
                            <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${meme._id}">Details</a>
                        </div>
                    </div>
                </div>`;


export async function memesPage(ctx) {

    const memes = await getAllMemes();

    const isMemes = memes && memes.length > 0

    ctx.render(mimesTemplate(isMemes, memes, mimeTemplate));
}
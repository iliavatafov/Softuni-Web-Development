import { createComment, deleteGame, getAllComments, getGameDetails } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, isOwner, gameDetails, gameId, commentsData, commentTemplate, userData, onSubmit) => html `
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${gameDetails.imageUrl}" />
            <h1>Bright</h1>
            <span class="levels">MaxLevel: ${gameDetails.maxLevel}</span>
            <p class="type">${gameDetails.category}</p>
        </div>

        <p class="text">${gameDetails.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${commentsData.length > 0 ?
            html`<ul>
                <!-- list all comments for current game (If any) -->
                ${commentsData.map(commentTemplate)}
            </ul>` : 
            html`<p class="no-comment">No comments.</p>`}
            <!-- Display paragraph: If there are no games in the database -->
            
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${isOwner ?
        html`<div class="buttons">
            <a href="/edit/${gameId}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>` : null}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${userData && !isOwner ?
    html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onSubmit} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>` : null}
</section>`;

            const commentTemplate = (data) => html`
                <li class="comment">
                    <p>Content: ${data.comment}</p>
                </li>`


export async function detailsView(ctx) {

    const gameId = ctx.params.id;

    const gameDetails = await getGameDetails(gameId);

    const userData = getUserData();

    const isOwner = userData ? gameDetails._ownerId == userData.id : null;

    const commentsData = await getAllComments(gameId);

    console.log(commentsData)

    ctx.render(detailsTemplate(onDelete, isOwner, gameDetails, gameId, commentsData, commentTemplate, userData, onSubmit));

    async function onDelete() {
        deleteGame(gameId);
        ctx.page.redirect('/');
    }

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const comment = formData.get('comment').trim();

        if(comment != '') {
            await createComment({gameId, comment});
            ctx.page.redirect('/details/' + gameId);
            event.target.reset();
        }
    }
}
import { addLike, deleteBook, getAllLikes, getBookById, getMyLikes } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (book, isOwner, userData, likesCount, onLike, myLikes, onDelete) => html `
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a @click="${onDelete}" class="button" href="javascript:void(0)">Delete</a>` : null}
            ${userData && myLikes == 0 && userData.id != book._ownerId ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>` : null}

            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likesCount}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`

export async function detailsPage(ctx) {
    const book = await getBookById(ctx.params.id);
    const userData = getUserData();
    const likesCount = await getAllLikes(ctx.params.id);
    const myLikes = userData ? await getMyLikes(ctx.params.id, userData.id) : null;

    const isOwner = userData && userData.id == book._ownerId;

    ctx.render(detailsTemplate(book, isOwner, userData, likesCount, onLike, myLikes, onDelete));

    async function onLike() {
        await addLike(book._id);
        ctx.page.redirect('/details/' + ctx.params.id);
    }

    async function onDelete() {
        await deleteBook(ctx.params.id);
        ctx.page.redirect('/');
    }
}
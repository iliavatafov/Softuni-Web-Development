import { getMemeById, updateMeme } from '../api/data.js';
import { html } from '../lib.js'
import { notify } from '../notifay.js';

const editTemplate = (memeData, onSubmit) => html `
        <section id="edit-meme">
            <form @submit="${onSubmit}" id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value="${memeData.title}">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value="${memeData.description}"></textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value="${memeData.imageUrl}">
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>`;


export async function editPage(ctx) {
    const memeId = ctx.params.id

    const memeData = await getMemeById(memeId);

    ctx.render(editTemplate(memeData, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        if (title == '' || description == '' || imageUrl == '') {
            notify('All fileds are required!');
        } else {
            await updateMeme(memeId, { title, description, imageUrl });
            ctx.page.redirect('/details/' + memeId);
        }
    }
}
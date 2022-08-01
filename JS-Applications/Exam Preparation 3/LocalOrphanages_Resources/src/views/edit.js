import { put, get } from '../api/api.js'
import { html } from '../lib.js'

const editTemplate = (onSubmit, currentData) => html `
<section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input .value="${currentData.title}" type="title" name="title" id="title" value="">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input .value="${currentData.description}" type="text" name="description" id="description" value="">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input .value="${currentData.imageUrl}" type="text" name="imageUrl" id="imageUrl" value="">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input .value="${currentData.address}" type="text" name="address" id="address" value="">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input .value="${currentData.phone}" type="text" name="phone" id="phone" value="">
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>`

export async function editPage(ctx) {

    const currentData = await get('/data/posts/' + ctx.params.id);

    ctx.render(editTemplate(onSubmit, currentData));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const address = formData.get('address').trim();
        const phone = formData.get('phone').trim();

        if (title == '' || description == '' || imageUrl == '' || address == '' || phone == '') {
            alert('All fileds are required!');
        } else {
            await put('/data/posts/' + ctx.params.id, { title, description, imageUrl, address, phone });
            console.log('here')
            ctx.updateUserNav();
            ctx.page.redirect('/');
        }
    }
}
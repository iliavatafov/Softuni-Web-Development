import { getBookById, updateBook } from '../api/data.js';
import { html } from '../lib.js'

const editTemplate = (book, onSubmit) => html `
<section id="edit-page" class="edit">
    <form @submit="${onSubmit}" id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                            <input .value="${book.title}" type="text" name="title" id="title" value="A Court of Thorns and Roses">
                        </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                            <textarea .value="${book.description}"  name="description"
                                id="description">Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ...</textarea>
                        </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                            <input .value="${book.imageUrl}"  type="text" name="imageUrl" id="image" value="/images/book1.png">
                        </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                            <select id="type" name="type" .value="${book.type}">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`

export async function editPage(ctx) {
    const book = await getBookById(ctx.params.id);

    ctx.render(editTemplate(book, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const type = formData.get('type').trim();

        if (title == '' || description == '' || imageUrl == '' || type == '') {
            alert('All fileds are required!');
        } else {
            await updateBook(ctx.params.id, {
                title,
                description,
                imageUrl,
                type
            });
            ctx.page.redirect('/details/' + ctx.params.id);
        }
    }
}
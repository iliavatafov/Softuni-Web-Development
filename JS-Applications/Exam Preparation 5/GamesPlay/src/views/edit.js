import { editGame, getGameDetails } from '../api/data.js';
import { html } from '../lib.js'

const editTemplate = (onSubmit, gameData) => html `
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input .value=${gameData.title} type="text" id="title" name="title" value="">

            <label for="category">Category:</label>
            <input .value=${gameData.category} type="text" id="category" name="category" value="">

            <label for="levels">MaxLevel:</label>
            <input .value=${gameData.maxLevel} type="number" id="maxLevel" name="maxLevel" min="1" value="">

            <label for="game-img">Image:</label>
            <input .value=${gameData.imageUrl} type="text" id="imageUrl" name="imageUrl" value="">

            <label for="summary">Summary:</label>
            <textarea .value=${gameData.summary} name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;


export async function editView(ctx) {

    const gameId = ctx.params.id;

    const gameData = await getGameDetails(gameId);

    ctx.render(editTemplate(onSubmit, gameData));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const maxLevel = formData.get('maxLevel').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const summary = formData.get('summary').trim();

        if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {
            window.alert('All fileds are required!');
        } else {
            await editGame(gameId, { title, category, maxLevel, imageUrl, summary });
            ctx.page.redirect('/');
        }
    }
}
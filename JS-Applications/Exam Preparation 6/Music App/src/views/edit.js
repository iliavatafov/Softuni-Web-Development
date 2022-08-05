import { edit, getSingleAlbum } from '../api/data.js';
import { html } from '../lib.js'

const editTemplate = (onSubmit, albumData) => html `
<section class="editPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input .value=${albumData.name} id="name" name="name" class="name" type="text" value="In These Silent Days">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input .value=${albumData.imgUrl} id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="./img/BrandiCarlile.png">

                        <label for="price" class="vhide">Price</label>
                        <input .value=${albumData.price} id="price" name="price" class="price" type="text" value="12.80">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input .value=${albumData.releaseDate} id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="October 1, 2021">

                        <label for="artist" class="vhide">Artist</label>
                        <input .value=${albumData.artist} id="artist" name="artist" class="artist" type="text" value="Brandi Carlile">

                        <label for="genre" class="vhide">Genre</label>
                        <input .value=${albumData.genre} id="genre" name="genre" class="genre" type="text" value="Low Country Sound Music">

                        <label for="description" class="vhide">Description</label>
                        <textarea .value=${albumData.description} name="description" class="description" rows="10"
                            cols="10">Upon release, In These Silent Days received positive reviews from critics. At Metacritic, which assigns a normalized rating out of 100 to reviews from mainstream critics, the album has an average score of 87 out of 100, which indicates 'universal acclaim'.</textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>`

export async function editView(ctx) {

    const albumData = await getSingleAlbum(ctx.params.id);

    ctx.render(editTemplate(onSubmit, albumData));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const name = formData.get('name').trim();
        const imgUrl = formData.get('imgUrl').trim();
        const price = formData.get('price').trim();
        const releaseDate = formData.get('releaseDate').trim();
        const artist = formData.get('artist').trim();
        const genre = formData.get('genre').trim();
        const description = formData.get('description').trim();

        const createData = {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        }

        const isEmptyImpty = Object.values(createData).find(el => el == '');

        if (isEmptyImpty == '') {
            window.alert('All fileds are required!');
        } else {
            await edit(ctx.params.id, createData);
            ctx.page.redirect('/details/' + ctx.params.id);
        }
    }
}
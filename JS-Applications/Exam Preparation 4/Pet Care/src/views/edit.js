import { editPet, getPet } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, petData) => html `
<section id="editPage">
    <form @submit=${onSubmit} class="editForm">
        <img src="${petData.image}">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input .value=${petData.name} name="name" id="name" type="text" value="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input .value=${petData.breed} name="breed" id="breed" type="text" value="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input .value=${petData.age} name="age" id="age" type="text" value="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input .value=${petData.weight} name="weight" id="weight" type="text" value="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input .value=${petData.image} name="image" id="image" type="text" value="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`

export async function editPage(ctx) {

    const petData = await getPet(ctx.params.id);

    ctx.render(editTemplate(onSubmit, petData));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get('name').trim();
        const age = formData.get('age').trim();
        const breed = formData.get('breed').trim();
        const weight = formData.get('weight').trim();
        const image = formData.get('image').trim();

        if (name == '' || breed == '' || weight == '' || image == '') {
            window.alert('All fileds are required!');
        } else {
            await editPet(ctx.params.id, { name, age, breed, weight, image });
            ctx.page.redirect('/');
        }
    }
}
import { edit, getDetails } from '../api/data.js';
import { html } from '../lib.js'

const editTemplate = (onEdit, carData) => html `
<section id="edit-listing">
    <div class="container">

        <form @submit=${onEdit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input .value=${carData.brand} type="text" placeholder="Enter Car Brand" name="brand" value="">

            <p>Car Model</p>
            <input .value=${carData.model} type="text" placeholder="Enter Car Model" name="model" value="">

            <p>Description</p>
            <input .value=${carData.description} type="text" placeholder="Enter Description" name="description" value="">

            <p>Car Year</p>
            <input .value=${carData.year} type="number" placeholder="Enter Car Year" name="year" value="">

            <p>Car Image</p>
            <input .value=${carData.imageUrl} type="text" placeholder="Enter Car Image" name="imageUrl" value="">

            <p>Car Price</p>
            <input .value=${carData.price} type="number" placeholder="Enter Car Price" name="price" value="">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`

export async function editView(ctx) {

    const carData = await getDetails(ctx.params.id)

    ctx.render(editTemplate(onEdit, carData));

    async function onEdit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const brand = formData.get('brand').trim();
        const model = formData.get('model').trim();
        const description = formData.get('description').trim();
        const year = formData.get('year').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const price = formData.get('price').trim();

        const createData = {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
        }

        const isEmptyInput = Object.values(createData).find(el => el == '');

        if (isEmptyInput == '') {
            window.alert('All fileds are requiered!');
        } else {
            await edit(ctx.params.id, createData);
            ctx.page.redirect('/details/' + ctx.params.id);
        }
    }
}
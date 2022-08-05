import { create } from '../api/data.js';
import { html } from '../lib.js'

const createTemplate = (onCreate) => html `
<section id="create-listing">
    <div class="container">
        <form @submit=${onCreate} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`

export async function createView(ctx) {

    ctx.render(createTemplate(onCreate));


    async function onCreate(ev) {
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
            await create(createData);
            ctx.page.redirect('catalog');
        }
    }
}
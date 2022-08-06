import { cerate } from '../api/data.js';
import { html } from '../lib.js'


const createTemplate = (onCreate) => html `
<section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form @submit=${onCreate} class="create-form">
        <input
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
        />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>`

export async function createView(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const title = formData.get('title').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const category = formData.get('category').trim();
        const description = formData.get('description').trim();
        const requirements = formData.get('requirements').trim();
        const salary = formData.get('salary').trim();

        const createData = {
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary
        }

        const isEmpty = Object.values(createData).find(el => el == '');

        if (isEmpty == '') {
            window.alert('All fileds are requiered!');
        } else {
            await cerate(createData);
            ctx.page.redirect('/dashboard');
        }
    }
}
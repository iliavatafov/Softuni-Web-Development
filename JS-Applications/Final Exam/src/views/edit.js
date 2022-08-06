import { edit, getDetails } from '../api/data.js';
import { html } from '../lib.js'


const editTemplate = (offerData, onEdit) => html `
<section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
        .value=${offerData.title}
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
        />
        <input
        .value=${offerData.imageUrl}
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
        .value=${offerData.category}
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
        />
        <textarea
        .value=${offerData.description}
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
        .value=${offerData.requirements}
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input
        .value=${offerData.salary}
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>`

export async function editView(ctx) {

    const offerData = await getDetails(ctx.params.id);

    ctx.render(editTemplate(offerData, onEdit));

    async function onEdit(ev) {
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
            await edit(ctx.params.id, createData);
            ctx.page.redirect('/details/' + ctx.params.id);
        }
    }
}
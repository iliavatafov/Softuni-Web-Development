import { del } from '../api/api.js';
import { addApplication, applicationsCount, getDetails, isUserApplied } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';


const detailsTemplate = (isOwner, detailsData, userData, onDelete, isApplied, appliocationsCnt, onApply) => html `
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${detailsData.imageUrl}" alt="example1" />
      <p id="details-title">${detailsData.title}</p>
      <p id="details-category">
        Category: <span id="categories">${detailsData.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${detailsData.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span
            >${detailsData.description}</span
          >
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span
            >${detailsData.requirements}</span
          >
        </div>
      </div>
      <p>Applications: <strong id="applications">${appliocationsCnt}</strong></p>
      ${isOwner ?
      html`<div id="action-buttons">
        <a href="/edit/${detailsData._id}" id="edit-btn">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
      </div>` : null}
      ${userData && !isOwner && isApplied == 0 ? html`<div id="action-buttons">
      <a href="javascript:void(0)" @click=${onApply} id="apply-btn">Apply</a>
      </div>`: null}       
    </div>
  </section>`

export async function detailsView(ctx) {

    const userData = getUserData();

    const detailsData = await getDetails(ctx.params.id);

    const isOwner = userData ? userData.id == detailsData._ownerId : false;

    const isApplied = userData ? await isUserApplied(ctx.params.id, userData.id) : false;

    const appliocationsCnt = await applicationsCount(ctx.params.id);

    ctx.render(detailsTemplate(isOwner, detailsData, userData, onDelete, isApplied, appliocationsCnt, onApply));

    async function onApply() {
        await addApplication(ctx.params.id);
        ctx.page.redirect('/details/' + ctx.params.id);
    }

    async function onDelete() {
        await del('/data/offers/' + ctx.params.id);
        ctx.page.redirect('/dashboard');
    }
}
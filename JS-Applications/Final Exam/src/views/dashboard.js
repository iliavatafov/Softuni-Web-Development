import { getListOfAllOffers } from '../api/data.js';
import { html } from '../lib.js'


const dashboardTemplate = (offersData, offerCard) => html `
<section id="dashboard">
    <h2>Job Offers</h2>
    ${offersData.length > 0 ?
    offersData.map(offerCard) :
    html` <h2>No offers yet.</h2>`}
  </section>`

  const offerCard = (data) => html`
  <div class="offer">
      <img src="${data.imageUrl}" alt="example1" />
      <p>
        <strong>Title: </strong><span class="title">${data.title}</span>
      </p>
      <p><strong>Salary:</strong><span class="salary">${data.salary}</span></p>
      <a class="details-btn" href="/details/${data._id}">Details</a>
    </div>`

export async function dashboardView(ctx) {

    const offersData = await getListOfAllOffers();

    ctx.render(dashboardTemplate(offersData, offerCard));
}
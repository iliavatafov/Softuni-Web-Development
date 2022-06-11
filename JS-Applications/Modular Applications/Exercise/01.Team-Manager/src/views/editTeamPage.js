import { html } from '../lib.js'
import { getTeamDetails } from '../api/data.js';

const editPageTemplate = () => html `
            <section id="edit">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Edit Team</h1>
                    </header>
                    <form id="edit-form" class="main-form pad-large">
                        <div class="error">Error message.</div>
                        <label>Team name: <input type="text" name="name"></label>
                        <label>Logo URL: <input type="text" name="logoUrl"></label>
                        <label>Description: <textarea name="description"></textarea></label>
                        <input class="action cta" type="submit" value="Save Changes">
                    </form>
                </article>
            </section>`


export async function editPage(ctx) {
    ctx.render(editPageTemplate());

    const teamData = await getTeamData();

    populateData();

    async function getTeamData() {
        const teamId = ctx.params.id
        return await getTeamDetails(teamId);
    }

    function populateData() {
        const editElement = document.getElementById('edit-form');
        const formData = new FormData(editElement);

        console.log(formData.username)
    }
}
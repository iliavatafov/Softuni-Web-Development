import { post, put } from '../api/api.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const createPageTemplate = (onSubmit, errorMsg) => html `
            <section id="create">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>New Team</h1>
                    </header>
                    <form @submit="${onSubmit}" id="create-form" class="main-form pad-large">
                        ${errorMsg ? html`<div class="error">${errorMsg}</div>` : null}
                        <label>Team name: <input type="text" name="name"></label>
                        <label>Logo URL: <input type="text" name="logoUrl"></label>
                        <label>Description: <textarea name="description"></textarea></label>
                        <input class="action cta" type="submit" value="Create Team">
                    </form>
                </article>
            </section>`


export function createPage(ctx) {

    update();

    function update(errorMsg) {
        ctx.render(createPageTemplate(onSubmit, errorMsg));
    }

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get('name').trim();
        const logoUrl = formData.get('logoUrl').trim();
        const description = formData.get('description').trim();

        try {
            if (name == '' || logoUrl == '' || description == '') {
                throw new Error(`All fields are mandatory!`);
            } else if (name.length < 3) {
                throw new Error(`Name should be at least 3 symbols long!`);
            } else if (logoUrl == '') {
                throw new Error(`Logo URL is a mandatory field!`);
            } else if (description.length < 10) {
                throw new Error(`Description should be at least 10 symbols long!`);
            }

            const teamResponse = await post('/data/teams', { name, logoUrl, description });

            const postMember = await post('/data/members', { teamId: teamResponse._id});

            await put('/data/members/' + postMember._id, { status: 'member'})

            ctx.updateUserNav();
            ctx.page.redirect('/my-teams');

        } catch (err) {
            update(err.message);
        }
    }

}
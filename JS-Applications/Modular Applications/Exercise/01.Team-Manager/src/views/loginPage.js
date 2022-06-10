import { login } from '../api/api.js';
import { html } from '../lib.js'

const loginPageTemplate = (onSubmut, errorMsg) => html `
            <section id="login">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Login</h1>
                    </header>
                    <form @submit="${onSubmut}" id="login-form" class="main-form pad-large">
                        ${errorMsg ? html`<div class="error">${errorMsg}</div>` : null}
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <input class="action cta" type="submit" value="Sign In">
                    </form>
                    <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
                    </footer>
                </article>
            </section>`


export function loginPage(ctx) {
    
    update();

    function update(errorMsg) {
        ctx.render(loginPageTemplate(onSubmut, errorMsg));
    }

    async function onSubmut(event) {
        event.preventDefault();
    
        const formData = new FormData(event.target);
    
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        try {
            await login(email, password);

            ctx.updateUserNav();
            ctx.page.redirect('/my-teams');

        } catch (err) {
            update(err.message);
        }
    
    
    }
}
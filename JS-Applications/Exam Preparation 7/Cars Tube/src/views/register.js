import { register } from '../api/api.js';
import { html } from '../lib.js'

const registerTemplate = (onSubmit) => html `
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`

export async function registerView(ctx) {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('repeatPass').trim();

        if (username == '' || password == '' || rePass == '') {
            window.alert('All fileds are required!')
        } else if (password != rePass) {
            window.alert('Password don`t match!')
        } else {
            await register(username, password);
            ctx.updateUserNav();
            ctx.page.redirect('/catalog');
        }
    }
}
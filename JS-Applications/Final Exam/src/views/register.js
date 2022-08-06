import { register } from '../api/api.js';
import { html } from '../lib.js'


const registerTemplate = (onSubmit) => html `
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onSubmit} class="login-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>`

export async function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('re-password').trim();

        if (email == '' || password == '' || rePass == '') {
            window.alert('Please fill all fileds!');
        } else if (password != rePass) {
            window.alert('Password don`t match!');
        } else {
            await register(email, password);
            ctx.updateUserNav();
            ctx.page.redirect('/dashboard');
        }
    }
}
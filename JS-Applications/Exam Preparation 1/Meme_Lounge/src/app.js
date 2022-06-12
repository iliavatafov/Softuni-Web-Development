import { logout } from './api/data.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { memeDetailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js';
import { memesPage } from './views/memes.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';

const root = document.querySelector('main');

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/memes', memesPage);
page('/details/:id', memeDetailsPage);
page('/edit/:id', editPage);
page('/create', createPage);
page('/profile', profilePage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

document.getElementById('logoutBtn').addEventListener('click', onLogout);

async function onLogout() {

    await logout();
    updateUserNav();
    page.redirect('/');

}

function updateUserNav() {

    const userData = getUserData();

    if (userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.profile span').textContent = `Welcome, ${userData.email}`;
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }

}
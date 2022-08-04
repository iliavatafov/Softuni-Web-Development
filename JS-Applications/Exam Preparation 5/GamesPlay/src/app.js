import {get, logout } from './api/api.js';
import { page, html, render } from './lib.js'
import { getUserData } from './util.js';
import { catalogueView } from './views/catalogue.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js'
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

const root = document.querySelector('#main-content');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateCotext);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalogue', catalogueView);
page('/create', createView);
page('/edit/:id', editView);
page('/details/:id', detailsView);

updateUserNav();
page.start();

function decorateCotext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {

    const userData = getUserData();

    if (userData) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/');
}
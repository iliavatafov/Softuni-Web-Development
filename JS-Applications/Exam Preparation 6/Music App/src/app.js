import { logout } from './api/data.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

import { searchView } from './views/search.js';

const root = document.getElementById('main-content');

document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateCotext)
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/search', searchView);


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
        document.querySelectorAll('.user').forEach(el => el.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.guest').forEach(el => el.style.display = 'inline-block');
    }
}


function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}
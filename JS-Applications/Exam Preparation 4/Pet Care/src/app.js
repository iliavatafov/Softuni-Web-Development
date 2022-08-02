import { logout } from './api/data.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const root = document.getElementById('content');

document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateCotext)
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/dashboard', dashboardPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);


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
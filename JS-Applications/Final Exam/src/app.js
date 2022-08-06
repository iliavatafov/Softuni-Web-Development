import { logout } from './api/data.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';


const root = document.querySelector('main');

document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateCotext)
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/dashboard', dashboardView);
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
        document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}


function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}
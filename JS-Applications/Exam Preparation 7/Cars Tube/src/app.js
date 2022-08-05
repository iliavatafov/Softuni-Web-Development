import { logout } from './api/api.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { filterView } from './views/filter.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { myListingView } from './views/my-listings.js';
import { registerView } from './views/register.js';


const root = document.getElementById('site-content');

document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateCotext)
page('/index.html', '/');
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/my-listing', myListingView);
page('/filter', filterView);

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
        document.querySelector('#profile').style.display = 'inline-block';
        document.getElementById('username').textContent = `Welcome ${userData.username}`;
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline-block';
    }
}


function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}
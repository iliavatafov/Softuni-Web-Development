import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js'
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myFurniturePage } from './views/my-furniture.js';
import { registerPage } from './views/register.js';

const root = document.getElementById(`root`);

page(decorateContext)
page('/', catalogPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/my-furniture', myFurniturePage);

page.start();

updateUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {

    const userData = getUserData();

    if (!userData) {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    } else {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    }

}

document.getElementById('logoutBtn').addEventListener('click', onLogout);

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/');
}
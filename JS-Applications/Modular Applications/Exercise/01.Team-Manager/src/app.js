import { getUserData } from './util.js';
import { render, page } from './lib.js';
import { homePage } from './views/homePage.js';
import { loginPage } from './views/loginPage.js';
import { myTeamsPage } from './views/myTeamsPage.js';
import { registerPage } from './views/registerPage.js';
import { logout } from './api/api.js';
import { browsePage } from './views/browseTeamsPage.js';
import { createPage } from './views/createTeamPage.js';
import { teamDetailsPage } from './views/teamDetailsPage.js';

export { html, render }
from './lib.js'

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext);
page('/index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-teams', myTeamsPage);
page('/browse-teams', browsePage);
page('/create', createPage);
page('/team-details/:id', teamDetailsPage);

page.start();

updateUserNav();


function decorateContext(ctx, next) {
    ctx.render = (template) => render(template, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {

    const userData = getUserData();

    if (!userData) {
        Array.from(document.getElementsByClassName('user action')).map((el) => el.style.display = 'none');
        Array.from(document.getElementsByClassName('guest action')).map((el) => el.style.display = 'inline-block');
    } else {
        Array.from(document.getElementsByClassName('user action')).map((el) => el.style.display = 'inline-block');
        Array.from(document.getElementsByClassName('guest action')).map((el) => el.style.display = 'none');
    }
}

async function onLogout() {

    await logout();
    updateUserNav();
    page.redirect('/');

}
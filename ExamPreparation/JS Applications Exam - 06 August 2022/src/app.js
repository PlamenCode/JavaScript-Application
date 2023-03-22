import { createPage } from '../pages/createPage.js';
import { dashboardPage } from '../pages/dashboardPage.js';
import { deletePage } from '../pages/deletePage.js';
import { detailsPage } from '../pages/detailsPage.js';
import { editPage } from '../pages/editPage.js';
import { homePage } from '../pages/homePage.js';
import { loginPage } from '../pages/loginPage.js';
import { logoutPage } from '../pages/logoutPage.js';
import { updateNavBar } from '../pages/navBarPage.js';
import { registerPage } from '../pages/registerPage.js';
import { page, render } from './lib.js'


updateNavBar();
page(decorateCtx);
page('/', homePage);
page('/create', createPage);
page('/login', loginPage);
page('/logout', logoutPage);
page('/register', registerPage);
page('/dashboard', dashboardPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/delete/:id', deletePage);

page.start()
updateNavBar()

function decorateCtx(ctx, next){
    let main = document.querySelector('main');
    ctx.render = (content) => render(content,main);
    ctx.updateNavBar = () =>  updateNavBar();
    next();
};
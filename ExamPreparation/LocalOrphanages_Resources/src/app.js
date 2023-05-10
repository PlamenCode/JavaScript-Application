import { page, render } from './lib.js';
import { updateNavBar } from '../pages/navBarPage.js';
import { loginPage } from '../pages/loginPage.js';
import { logoutPage } from '../pages/logoutPage.js';
import { registerPage } from '../pages/registerPage.js';
import { dashboardPage } from '../pages/dasboardPage.js';
import { createPage } from '../pages/createPage.js';
import { detailsPage } from '../pages/detailsPage.js';
import { editPage } from '../pages/editPage.js';
import { deletePage } from '../pages/deletePage.js';
import { myPostsPage } from '../pages/mypostsPage.js';

const main = document.querySelector('main')
updateNavBar()

page(decorateCtx);
page('/', dashboardPage)
page('/dashboard', dashboardPage)
page('/login', loginPage)
page('/logout', logoutPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/delete/:id', deletePage)
page('/myPosts', myPostsPage)

page.start(dashboardPage);



function decorateCtx(ctx, next){
    ctx.render = (content) => render(content,main);
    ctx.updateNavBar = () =>  updateNavBar();
    next();
};
import { addfruitPage } from '../pages/addfruitPage.js';
import { deleteItemPage } from '../pages/deleteItemPage.js';
import { detailsPage } from '../pages/detailsPage.js';
import { editPage } from '../pages/editPage.js';
import { fruitsPage } from '../pages/fruitsPage.js';
import { homePage } from '../pages/homePage.js';
import { loginPage } from '../pages/loginPage.js';
import { logoutPage } from '../pages/logoutPage.js';
import { registerPage } from '../pages/registerPage.js';
import { searchPage } from '../pages/searchPage.js';
import { updateNavBar } from '../pages/updateNavBar.js';
import { page, render } from '../src/lib.js'


const main = document.querySelector('main')
updateNavBar()


page(decorateCtx);
page('/', homePage);
page('/fruits', fruitsPage);
page('/search', searchPage);
page('/addfruit', addfruitPage);
page('/logout', logoutPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/delete/:id', deleteItemPage)

page.start();

function decorateCtx(ctx, next){
    ctx.render = (content) => render(content,main);
    ctx.updateNavBar = () =>  updateNavBar();
    next();
};
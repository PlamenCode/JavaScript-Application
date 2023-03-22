import { page, render } from '../src/lib.js' 
import { addProductPage } from '../pages/addProductPage.js';
import { dashboardPage } from '../pages/dashboardPage.js';
import { homePage } from '../pages/homePage.js';
import { loginPage } from '../pages/loginPage.js';
import { logoutPage } from '../pages/logoutPage.js';
import { registerPage } from '../pages/registerPage.js';
import { updateNavBar } from '../pages/navBar.js';
import { detailsPage } from '../pages/detailsPage.js';
import { editPage } from '../pages/editPage.js';
import { deletePage } from '../pages/deletePage.js';


const main = document.querySelector('main');

page(decorateCtx);
page('/', homePage);
page('/addProduct', addProductPage);
page('/logout', logoutPage);
page('/login', loginPage);
page('/register', registerPage);
page('/dashboard', dashboardPage);
page('/detailsPage/:id', detailsPage)
page('/edit/:id', editPage)
page('/delete/:id', deletePage)

page.start();
updateNavBar()


function decorateCtx(ctx, next ){
    ctx.render = (content) => render(content,main);
    ctx.updateNavBar = () =>  updateNavBar();
    next();
}

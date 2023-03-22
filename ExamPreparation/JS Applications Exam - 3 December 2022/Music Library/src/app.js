import { addAlbum } from "../pages/addAlbumPage.js";
import { dashboardPage } from "../pages/dashboardPage.js";
import { deletePage } from "../pages/deletePage.js";
import { detailsPage } from "../pages/detailsPage.js";
import { editPage } from "../pages/editPage.js";
import { homePage } from "../pages/homePage.js";
import { loginPage } from "../pages/loginPage.js";
import { logOutPage } from "../pages/logotPage.js";
import { updateNavBar } from "../pages/navBar.js";
import { registerPage } from "../pages/registerPage.js";
import { page, render } from "./lib.js";

const main = document.querySelector('main');
updateNavBar();

page(decorateCtx)
page('/', homePage)
page('/dashboard', dashboardPage)
page('/addAlbum', addAlbum)
page('/login', loginPage)
page('/logout', logOutPage)
page('/register', registerPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/delete/:id', deletePage)


page.start();
updateNavBar();

function decorateCtx(ctx, next ){
    ctx.render = (content) => render(content,main);
    ctx.updateNavBar = () =>  updateNavBar();
    next();
};

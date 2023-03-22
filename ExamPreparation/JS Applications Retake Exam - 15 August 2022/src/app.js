import { addpairPage } from "../pages/addPairPage.js";
import { dashboardPage } from "../pages/dashboardPage.js";
import { deleetePage } from "../pages/deletePage.js";
import { detailsPage } from "../pages/detailsPage.js";
import { editPage } from "../pages/editPage.js";
import { homePage } from "../pages/homePage.js";
import { loginPage } from "../pages/loginPage.js";
import { logoutPage } from "../pages/logoutPage.js";
import { updateNavBar } from "../pages/navBar.js";
import { registerPage } from "../pages/registerPage.js";
import { page, render } from "./lib.js";
const main = document.querySelector('main')


page(decorateCtx)
page('/', homePage)
page('/dashboard', dashboardPage)
page('/search', () => console.log('/search'))
page('/addpair', addpairPage)
page('/logout', logoutPage)
page('/login', loginPage)
page('/register', registerPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/delete/:id', deleetePage)


page.start()
updateNavBar();


function decorateCtx(ctx, next){
    ctx.render = (content) => render(content,main);
    ctx.updateNavBar = () =>  updateNavBar();
    next();
};
import { page } from "./lib.js";
import { registerPage } from "../views/register.js";
import { loginPage } from "../views/login.js";
import { createPage } from "../views/create.js";
import { detailsPage } from "../views/details.js";
import { catalogPage } from "../views/catalog.js";
import { editPage } from "../views/edit.js";


page('/', catalogPage);
page('/details/:id', detailsPage)
page('/create', createPage)
page('/edit/:id', editPage)
page('/login', loginPage)
page('/register', registerPage)
page('/my-furniture', catalogPage)

page.start();


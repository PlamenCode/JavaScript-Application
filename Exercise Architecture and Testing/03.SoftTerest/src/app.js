import { showHome } from './pages/homePage.js'
import { logout } from './api/users.js'
import { showCatalog } from './pages/catalogPage.js'
import { showCreate } from './pages/createPage.js'
import { showLogin } from './pages/loginPage.js'
import { showRegistration } from './pages/registrationPage.js';
import { showDetails } from './pages/detailsPage.js'
import { initialize } from './router.js';

document.getElementById('views').remove();


const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/create': showCreate,
    '/login': showLogin,
    '/registration': showRegistration,
    '/details': showDetails,
    '/logout': onLogout
};

const router = initialize(links);
router.updateNav();

router.goTo('/')

function onLogout(){
    logout();
    router.updateNav();
    router.goTo('/');
}


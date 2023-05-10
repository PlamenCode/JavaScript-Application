import { logout } from "../src/data.js";


export async function logoutPage(ctx){
    await logout();
    ctx.updateNavBar();
    ctx.page.redirect('/')
}
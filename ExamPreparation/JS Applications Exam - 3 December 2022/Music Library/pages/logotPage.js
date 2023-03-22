import { logout } from "../src/data.js";

export async function logOutPage(ctx){
    await logout();
    ctx.updateNavBar();
    ctx.page.redirect('/dashboard')
}
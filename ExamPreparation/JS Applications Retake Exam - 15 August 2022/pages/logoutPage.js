import { logout } from "../src/data.js";
import { clearUserData } from "../src/utils.js";

export async function logoutPage(ctx){
    await logout();
    ctx.updateNavBar()
    ctx.page.redirect('/dashboard')
}
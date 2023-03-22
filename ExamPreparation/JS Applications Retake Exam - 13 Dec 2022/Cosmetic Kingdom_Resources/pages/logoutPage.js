import { logout } from "../src/api.js";

export async function logoutPage(ctx){
    await logout();
    ctx.updateNavBar();

    ctx.page.redirect('/dashboard')
};


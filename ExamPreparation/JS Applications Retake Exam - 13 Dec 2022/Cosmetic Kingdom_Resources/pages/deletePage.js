import { del } from "../src/api.js";

export async function deletePage(ctx){
    const isConfirmes = confirm('Are you shure you want to delete this.');
    if(isConfirmes){
    const pathname = ctx.pathname;
    const [empty, path, id] = pathname.split('/')
    const url = `/data/products/${id}`;
    const responce = await del(url)
    ctx.page.redirect('/dashboard');
    }
}
import { deleteItem } from "../src/data.js"

export async function deletePage(ctx){
    const id = ctx.params.id;
    const confirmMsg = confirm('Are you shure you want to delete this.');
    if(confirmMsg){
        await deleteItem(id);
        ctx.page.redirect('/dashboard');
    }
}
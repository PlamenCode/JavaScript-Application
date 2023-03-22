import { deleteItem } from "../src/data.js";


export async function deletePage(ctx){
    const id = ctx.params.id;
    const isConfirmed = confirm('Are you sure you want to delete this offer?');

    if(isConfirmed){
        await deleteItem(id);
        ctx.page.redirect('/dashboard');
    }
}
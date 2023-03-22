import { deleteItem } from "../src/data.js";

export async function deleetePage(ctx){
    const id = ctx.params.id;
    const isConfirmed = confirm('Are you sure you want to delete this item.');

    if(isConfirmed){
        await deleteItem(id);
        ctx.page.redirect('/dashboard')
    }
}
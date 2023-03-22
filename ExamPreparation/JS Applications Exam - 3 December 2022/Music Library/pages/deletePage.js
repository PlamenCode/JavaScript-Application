import { deleteItem } from "../src/data.js";


export async function deletePage(ctx){
    const id = ctx.params.id;

    const isConfirmed = confirm('Are you shure you want to delete this album?');

    if(isConfirmed){
        await deleteItem(id);
        ctx.page.redirect('/dashboard');
    }

}